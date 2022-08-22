
import data from './data'
import React,{useState} from 'react';
import Movie from './Component/Movie';
import Search from './Component/Search';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Component/AddMovie';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import First from './Component/First';
function App(){

const [movie, setMovie] = useState(data)

const [text, setText] = useState("")
const handleAdd=(newMovie)=>{
  setMovie([...movie,newMovie])
  console.log("object")
}
const handleEdit=(editedMovie)=>{
  setMovie([...movie.map(el=>el.id===editedMovie.id?{...editedMovie}:el)])
  console.log("object")
}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path='/' element={<><Search text={text} setText={setText}/>
     <Movie edit={handleEdit} movie={movie.filter(el=>el.nameFilm.includes(text)||el.date.includes(text))}/>
     <AddMovie add={handleAdd}/><Search text={text} setText={setText}/></>} />
      
     {/* <Movie edit={handleEdit} movie={movie.filter(el=>el.nameFilm.includes(text)||el.date.includes(text))}/>
     <AddMovie add={handleAdd}/> */}
     <Route path='/movie/:id' element={<First movie={movie} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
