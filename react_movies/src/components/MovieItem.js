import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import MovieRating from "./MovieRating";
import MoviePoster from "./MoviePoster";
import { GREAY_COLOR } from "../../constants/Colors";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size:${props => (!props.big ? "16px" : "18px")}
  font-size: 13px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 65%;
`;

const Overview = styled.Text`
  color: ${GREAY_COLOR};
  font-size: 14px;
  margin-vertical: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview
}) =>
  horizontal ? (
    <HContainer>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title big={true}>{title}</Title>
        <MovieRating votes={voteAvg} />
        {overview ? (
          <Overview>
            {" "}
            {overview.length > 130
              ? `${overview.substring(0, 127)}...`
              : overview}
          </Overview>
        ) : null}
      </Column>
    </HContainer>
  ) : (
    <Container>
      <MoviePoster path={posterPhoto} />
      <Title>{title.length > 10 ? `${title.substring(0, 7)}...` : title}</Title>
      <MovieRating votes={voteAvg} />
    </Container>
  );

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string
};

export default MovieItem;
