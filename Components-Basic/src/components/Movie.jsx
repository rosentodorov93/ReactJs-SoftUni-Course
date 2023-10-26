export default function Movie(props){
    return(
        <li>
            <h4>{props.movie.title}</h4>
            <p>Year: {props.movie.year}</p>
            <p>Description: {props.movie.description}</p>
        </li>
    )
}