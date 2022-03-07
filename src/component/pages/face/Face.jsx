import React, {useEffect, useState} from "react";
import axios from "../../Axios/axios"
import "./Face.css";
import Navbar from "../../Navbar/Navbar";
import Row from "../../Row/Row";
// import requests from "../../Axios/Requests";


import Image4 from "./play.png";
import video from "./video.mp4";
import Image5 from "./close.png";
// import { StyledComponentProps } from '@material-ui/core';
function Face() {

    // API code for harry potter caracters and there informations


    // const [data, setData] = useState([]);
    // useEffect(() => {
    // async function fatchData() {
    //     const response = await axios.get(
    //       "http://hp-api.herokuapp.com/api/characters"
    //     );
    //     setData(response.data);
    // }
    // fatchData();
    // }, []);


    // console.log(data);

    // trailer:

    const [show, setShow] = useState(false);


    // iformation of  movies

    function truncate(string, n) {
        return string ?. length > n ? string.substr(0, n - 1) + '...' : string;
    }

    // API movies code

    const [Movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=c853be6d931d7e5d274291c253728014&language=en-US");
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, [])
    console.log(Movie);

    return (
        <div>
            <Navbar/>
            <div className="big-one"
                style={
                    {
                        backgroundSize: "cover",
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
                            Movie ?. backdrop_path
                        }" )`,
                        objectFit: "content",
                        shadow:"inset 4px 4px 15px 0px #000000"
                    }
             }>

                <div className="content">
                    <h1 className="movieTitle">
                        {
                        Movie ?. name || Movie?.original_title
                    }</h1>
                    <h4>
                        <span>{ Movie?.release_date}</span>
                        <span>
                            <i>16+</i>
                        </span>
                        <span>2h 15min</span>
                        {/* <span>Action</span> */}
                    </h4>
                    <p className="Movies-Info">
                        {
                        truncate(Movie ?. overview, 150)
                    } </p>
                    <div className="buttons">
                        <a href="">
                            play
                            <img src={Image4}
                                alt=""/>
                        </a>
                        <a href="">+ My list</a>
                    </div>
                </div>
                <div className="">
                    
                        <a href="#" className="play"
                            onClick={
                                () => setShow(true)
                        }>
                            <img src={Image4}
                                alt=""/>
                            Watch Trailer
                        </a>
                    
                </div>
                <div className="under-image"></div>
            </div>


            {
            show ? (
                <div className="trailer">
                    <video src={video}
                        controls="true"
                        autoPlay="true"></video>
                    <img src={Image5}
                        alt=""
                        className="close"
                        onClick={
                            () => setShow(false)
                        }/>
                </div>
            ) : null
        }



        <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl='https://api.themoviedb.org/3/discover/tv?api_key=c853be6d931d7e5d274291c253728014&with_networks=213'/>
        <Row title='Top Rated'
        fetchUrl='https://api.themoviedb.org/3/trending/all/week?api_key=c853be6d931d7e5d274291c253728014&language=en-US'/>
        <Row
        title='Romantic Movies '
        fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=c853be6d931d7e5d274291c253728014&with_genres=10749'/>
        <Row title='Action Movies'
        fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=c853be6d931d7e5d274291c253728014&with_genres=28'/>
        <Row
        title='Comedy Movies'
        fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=c853be6d931d7e5d274291c253728014&with_genres=35'/>
        <Row
        title='Horror Movies'
        fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=c853be6d931d7e5d274291c253728014&with_genres=27'/>
        <Row
        title='Documentaries Movies'
        fetchUrl='https://api.themoviedb.org/3/discover/movie?api_key=c853be6d931d7e5d274291c253728014&with_genres=99'/>
            {/* <div className="Box">
        <h1>{title}</h1>
        <div className="boxs">
          {data.slice(0, 12).map((item, index) => (
            <Box key={index} item={item} />
          ))}

          <button className="more">SEE MORE</button>
        </div>
      </div> */}
       </div>
    );
}

export default Face;
