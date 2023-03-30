import React, { useEffect, useRef, useState } from "react";
import SecondPage from "../SecondPage/SecondPage";

const FirstPage = ({ movieArray }) => {
  let initialTimes = [...new Set(Object.values(movieArray)[0])];
  let initialMovies = Object.keys(movieArray);

  const movieRef=useRef();
  const timeRef=useRef();

  const [movie, setMovie] = useState(initialMovies[0]);
  const [time, setTime] = useState(initialTimes[0]);

  const [movies, setMovies] = useState(initialMovies);
  const [times, setTimes] = useState(initialTimes);
  
  useEffect(()=>{
    setTime(timeRef.current.value);
  },[times])

  useEffect(()=>{
    setMovie(movieRef.current.value);
  },[movies])

  const handleMovie = (e) => {
    setTimes(movieArray[Object.keys(movieArray).find(mName=>mName===e.target.value)])
    setMovie(e.target.value);
  };
  const handleTime=(e)=>{
    setMovies(
        Object.entries(movieArray)
          .filter(([mName, mTime]) => mTime.includes(+e.target.value))
          .map((i) => i[0])
    );
    setTime(e.target.value);
  }
  return (
    <div>
      <select onChange={handleMovie} ref={movieRef}>
        {movies.map((singleMovie) => (
          <option key={singleMovie}>{singleMovie}</option>
        ))}
      </select>

      <select onChange={handleTime} ref={timeRef}>
        {times.map((singleTime) => (
          <option key={singleTime}>{singleTime}</option>
        ))}
      </select>
      <br />
      <br />

    <SecondPage movieArray={movieArray} movie={movie} time={time}/>

    </div>
  );
};

export default FirstPage;
