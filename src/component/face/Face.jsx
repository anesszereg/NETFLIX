import React, {useEffect, useState} from 'react';
import Box from '../Box/box';
import axios from "axios"
import './Face.css'
import Image from './logo.png';
import Image2 from './bg.jpg'
import Image3 from './name.png'
import Image4 from './play.png'
import video from './video.mp4'
import Image5 from './close.png'
// import { StyledComponentProps } from '@material-ui/core';
function Face({title}) {
    const [data, setData] = useState([]);
    useEffect(() => {


        async function fatchData() {
            const response = await axios.get('http://hp-api.herokuapp.com/api/characters')
            setData(response.data)

        }
        fatchData()
    }, []);
    console.log(data);

    const [show, setShow] = useState(false);


    return <div>
        <div className="navbar">
            <a href=""><img src={Image}
                    alt=""
                    className="logo"/></a>
            <div className="left">

                <ul className="left">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">TV Show</a>
                    </li>
                    <li>
                        <a href="">Movies</a>
                    </li>
                    <li>
                        <a href="">Latest</a>
                    </li>
                    <li>
                        <a href="">My List</a>
                    </li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder='search'/>


            </div>
        </div>
        <div className="big-one">
            <img src={Image2}
                alt=""
                className="bg"/>
            <div className="content">
                <img src={Image3}
                    alt=""
                    className="movieTitle"/>
                <h4>
                    <span>2020</span>
                    <span>
                        <i>12+</i>
                    </span>
                    <span>1h 55min</span>
                    <span>Action</span>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minus quia nesciunt doloremque voluptatum, esse tempore placeat, ut animi illo laborum! Sequi a voluptas, in dolorum temporibus dolorem suscipit quae.</p>
                <div className="buttons">

                    <a href="">play<img src={Image4}
                            alt=""/>
                    </a>
                    <a href="">+ My list
                    </a>

                </div>

            </div>
            <div className="">
                <button>
                    <a href="#" className="play"
                    onClick={()=>setShow(true)}><img src={Image4}
                        alt=""/>Watch Trailer</a>

                    </button>
            </div>


        </div>
        {
        show ? <div className="trailer"
       >
            <video src={video}
                controls="true"
                autoPlay="true"></video>
            <img src={Image5}
                alt=""
                className="close"
                onClick={()=>setShow(false)}/>
        </div>:null
    }
        <div className="Box">
            <h1>{title}</h1>
            <div className="boxs">
                {
                data.slice(0, 12).map((item, index) => (
                    <Box key={index}
                        item
                        ={item}/>

                ))
            }

                <button className="more">
                    SEE MORE
                </button>

            </div>

        </div>


    </div>;
}

export default Face;
