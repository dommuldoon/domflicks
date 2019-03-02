import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: this.movie.title,
      genre: getGenres(),
      numberInStock: this.movie.numberInStock,
      rate: this.movie.dailyRentalRate
    },
    errors: {},
    genres: []
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovie(this.props.match.params.id), genres });
  }

  schema = {
    title: Joi.string()
      .required()
      .email()
      .label("Title"),
    genre: Joi.string()
      .min(5)
      .required()
      .label("Genre"),
    numberInStock: Joi.string()
      .required()
      .label("Number"),
    rate: Joi.number()
      .required()
      .label("Rate")
  };aAXZXX

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    const { match, history } = this.props;
    return (
      <React.Fragment>
        <div>
          <h1>Movie Form {match.params.id}</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("title", "Title")}
            {this.renderSelect("genre", "Genre", {state.genres})}
            {this.renderInput("numberInStock", "Number")}
            {this.renderInput("rate", "Rate")}
            {this.renderButton("Login")}s
            <button
              className="btn btn-primary"
              onClick={() => history.push("/movies")}
            >
              Save
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieForm;
