import React from 'react'

export default function Newsitem(props) {

  let pill = {
    position: "absolute",
    right: "-2px",
    top: "-5px",
  }

  let defaultImageUrl = "https://www.google.com/imgres?imgurl=https%3A%2F%2Flearn.getgrav.org%2Fuser%2Fpages%2F11.troubleshooting%2F01.page-not-found%2Ferror-404.png&imgrefurl=https%3A%2F%2Flearn.getgrav.org%2F17%2Ftroubleshooting%2Fpage-not-found&tbnid=GjlM76K_5yISSM&vet=12ahUKEwjahZKipt37AhW-i9gFHfMaBG0QMygOegUIARDTAQ..i&docid=nnV-TdlGB3o_BM&w=566&h=330&q=pic%20not%20found&ved=2ahUKEwjahZKipt37AhW-i9gFHfMaBG0QMygOegUIARDTAQ"


  return (
    <div className={`card my-4 bg-${props.mode}`} style={{ border: "1px solid grey" }} >
      <span className={`badge text-bg-${props.mode === "light" ? "dark" : "light"}`} style={pill}>From-{props.source}</span>
      <img src={!props.imgUrl ? defaultImageUrl : props.imgUrl} className="card-img-top" alt="..." />
      <div className={`card-body text-${props.mode === 'light' ? 'dark' : 'white'}`}>
        <h5 className={`card-title text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.title}</h5>
        <p className={`card-text text-${props.mode === 'light' ? '-black-50' : 'muted'}`} >{props.description}</p>
        <p className='card-text'><small className='text-muted'>Published on {new Date(props.date).toGMTString()} </small></p>
        <a rel='noreferrer' href={props.newsurl} className={`btn btn-${props.mode === "light" ? "dark" : "light"} btn-sm`} target="_blank" style={{ opacity: props.mode === "light" ? "1" : "0.85" }}>Read news</a>
      </div>
    </div>
  )
}
