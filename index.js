import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get('/api/movies');
            setMovies(response.data);
        };
        fetchMovies();
    }, []);

    return(
        <div>
            <Navbar/>
            <div className="container ma-auto mt-8">
                <MovieGrid movies={movies}/>
            </div>
        </div>
    );
}