import React from 'react';
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string
//     }

//     render() {
//         // console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 {/* <img src={this.props.poster} /> */}
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }

// class MoviePoster extends Component {
//     render() {
//         // console.log(this.props);
//         return(
//             <img width="300px" src={this.props.poster} alt="poster" />
//         );
//     }
// }

function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}

function MoviePoster({ poster, alt }) {
    return (
        <img className="Movie_Poster" src={poster} alt={alt} />
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;
