import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./Row.css"

function Row({
    title,
    fetchUrl,
    islargeRow = false
}) {
    const [Movies, setMovies] = useState([])
    const base_Url = "https://image.tmdb.org/t/p/original/"


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;

        }
        fetchData()

    }, [fetchUrl])

    console.log(Movies);

    return (
        <div className='row'>
            <h3>{title}</h3>
            <div className="row_posters">

                {
                Movies.map((movie) => ((islargeRow && movie.poster_path) || (!islargeRow && movie.backdrop_path)) && (
                    <img className={
                            `row_poster ${
                                islargeRow && "row_posterLarge"
                            }`
                        }
                        key={
                            movie.id
                        }
                        src={
                            `${base_Url}${
                                islargeRow ? movie.poster_path : movie.backdrop_path
                            }`
                        }
                        alt={
                            movie.name
                        }/>
                ))
            } </div>
        </div>
    )
}

export default Row
