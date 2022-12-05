import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";


export default function News(props) {
  
    const pagesize = 20

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true); 
    
  const Capitalize = (word) => {
    let low = word.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.newsCategory}&apiKey=6989b320bd7c45ff950fb6610a8bee69&page=${page+1}&pageSize=${pagesize}`;
    setPage(page + 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.newsCategory}&apiKey=6989b320bd7c45ff950fb6610a8bee69&page=${page}&pageSize=${pagesize}`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30)
    const parsedData = await data.json();
    setLoading(false);
    setArticles(parsedData.articles);
    props.setProgress(90)
    setTotalResults(parsedData.totalResults);
    props.setProgress(100)
    // console.log(totalResults);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  },);

  return (
    <>
      <h1
        className={`text-center text-${
          props.mode === "light" ? "dark" : "white"
        }`} style={{marginTop:"2.3em",marginBottom:"0.5em"}}
      >
       NewsMonkey - Top  {Capitalize(props.newsCategory)} Headlines {props.country==="in"?"from India":""||props.country==="us"?"from United States":"" }
      </h1>
      {loading && <Spinner/>}

      <InfiniteScroll dataLength={articles.length}  next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner/>}>
      
         <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    mode={props.mode}
                    imgUrl={element.urlToImage}
                    newsurl={element.url}
                    source={element.source.name}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
    </>
  );
}
