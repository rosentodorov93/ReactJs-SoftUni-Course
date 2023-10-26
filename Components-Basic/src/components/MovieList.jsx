import Heading from "./Heading";
import Movie from "./Movie";

export default function MovieList(props){
    return(
        <div>

         <Heading>{props.heading}</Heading>

            <ul>
                <Movie movie={props.moviesData[0]}/>
                <Movie movie={props.moviesData[1]}/>
                <Movie movie={props.moviesData[2]}/>
            </ul>
   
        </div>
    )

}