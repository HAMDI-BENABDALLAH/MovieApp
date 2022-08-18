import MovieSearch from './Component/MovieSearch';
import logo from './logo.svg';
import data from './data'
import React,{useState} from 'react';
import Movie from './Component/Movie';
import Search from './Component/Search';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){

const [movie, setMovie] = useState(data)

const [text, setText] = useState("")
  return (
    <div className="App">
      <Search text={text} setText={setText}/>
     <Movie movie={movie.filter(el=>el.nameFilm.includes(text)||el.date.includes(text))}/>
    </div>
  );
}

export default App;
