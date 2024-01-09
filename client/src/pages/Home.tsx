import { Link } from "react-router-dom";

export function Home() {
    const movies = [
        {
            id: 1,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 4,
            title: "lorem ipsum lorem title",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "https://images.pexels.com/photos/3600592/pexels-photo-3600592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];
    
    return (
        <div className="home">
            <div className="movies">
                {
                    movies.map((movie) => {
                        return (
                            <div className="movie-bout" key={movie.id}>
                                <img className="movie-img" src={movie.img} alt="" />
                                <div className="movie-content">
                                    <Link className="movie-link" to={`/movie/${movie.id}`}>
                                        <h1>{movie.title}</h1>
                                    </Link>
                                    <p>{movie.desc}</p>
                                    <button >▶️ Watch Now</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}