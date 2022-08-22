import {useParams} from "react-router-dom"

const First = ({movie}) => {
    const params=useParams()
    console.log(params)
    const theMovie=movie.find(el=>el.id==params.id)
    console.log(theMovie)
  return (
    <div>
        {theMovie.nameFilm}
    </div>
  )
}

export default First