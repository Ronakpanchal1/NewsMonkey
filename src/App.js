import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.title = `NewsMonkey | ${country}`
      document.body.style.background = "#111"
    }
    else {
      setMode("light")
      document.title = `NewsMonkey | ${country}`
      document.body.style.background = "#e7e7e7"
    }
  }
  const[progress,setProgress] = useState(10)
  
  const[country,setCountry] = useState("in")
  
  return (
    <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar toggleMode={toggleMode} mode={mode} setCountry={setCountry}  country={country}/>
        <Routes>
        <Route exact path='/' element={<News country={country} mode={mode} key="general" setProgress={setProgress} newsCategory="general"/>} ></Route>
        <Route exact path='/business' element={<News country={country} mode={mode} key="business" setProgress={setProgress} newsCategory="business"/>} ></Route>
        <Route exact path='/entertainment' element={<News country={country} mode={mode} key="entertainment" setProgress={setProgress} newsCategory="entertainment"/>} ></Route>
        <Route exact path='/health' element={<News country={country} mode={mode} key="health" setProgress={setProgress} newsCategory="health"/>} ></Route>
        <Route exact path='/science' element={<News country={country} mode={mode} key="science" setProgress={setProgress} newsCategory="science"/>} ></Route>
        <Route exact path='/sports' element={<News country={country} mode={mode} key="sports" setProgress={setProgress} newsCategory="sports"/>} ></Route>
        <Route exact path='/technology' element={<News country={country} mode={mode} key="technology" setProgress={setProgress} newsCategory="technology"/>} ></Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
