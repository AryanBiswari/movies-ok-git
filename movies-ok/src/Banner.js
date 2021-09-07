import React , { useState, useEffect}from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
export default function Banner() {
    function Banner(props) {
        const {classes} = props
        const [movie, setMovie] = useState([])
    
        useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
        )
        return request
    
    }
    fetchData()
        },[])
    }


    function truncate(string, n) {
        return string.length>n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movies Names</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(`This is Description This is Description This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        valueThis is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description
        This is Description`,150)}</h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
}
