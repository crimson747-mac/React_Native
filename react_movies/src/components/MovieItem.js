import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import MovieRating from "./MovieRating";
import MoviePoster from "./MoviePoster";

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) => (
  <Container>
    <MoviePoster path={posterPhoto} />
    <Title>{title}</Title>
    <MovieRating votes={voteAvg} />
  </Container>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired
};

export default MovieItem;
