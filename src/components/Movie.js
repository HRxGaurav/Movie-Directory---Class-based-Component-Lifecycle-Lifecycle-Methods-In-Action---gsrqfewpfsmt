import React from "react";

class Movie extends React.Component {
  render() {

    // If no movie is selected, show message - "Invalid Id".
    
    return (
      <div id="movie-banner">
        <h2>{this.props.Movie_title}</h2>
        <h2>{this.props.Movie_year}</h2>
        <h2>{this.props.Movie_director}</h2>
      </div>
    );
  }
}

export default Movie;
