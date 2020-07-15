import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
    render() {
        let posterUrl = `https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`
        console.log(posterUrl);
        
        return (
            <div className="film-row">
                <FilmPoster posterImg={posterUrl} film={this.props.film} />
                <div className="film-summary">
                    <h1> {this.props.film.title}</h1>
                    <p> {this.props.film.release_date.substring(0,4)} </p>
                </div>
                <div className="film-row-fave add_to_queue">
                    <Fave />
                </div>
            </div>
        );
    }
}

export default FilmRow;