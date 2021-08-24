import React, { useState } from 'react';
import MovieCard from './MovieCard';
import "../App.css"
import Filter from './Filter';


const MovieList = ({Movies}) => {
  const [text, settext] = useState("");
  const [rate, setrate] = useState("");
const filterText=(text)=>{
  settext(text)
}

const filterRate=(rate)=>{
  setrate(rate)
}

  return (
    <div>
        <div className="movies">
          <Filter filterRate={filterRate} filterText={filterText}/>
    {Movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rate).map((el)=>(<MovieCard Movie={el}/>))}
    </div>
    </div>
  );
}
export default MovieList;