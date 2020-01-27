import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../../constants/Layout";
import MovieSlide from "../Routes/Movies/MovieSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
    height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({movies}) => (
    movies ? <Swiper
                autoplayTimeout={3}
                showsPagination={false}
                autoplay={true}
                style={{height:SWIPER_HEIGHT}}>
                {movies.filter(movie => movie.backdrop_path !== null)
                .map(movie => <View><MovieSlide posterPhoto={movie.poster_path} backgroundPhoto={movie.backdrop_path} overview={movie.overview} voteAvg={movie.vote_average} title={movie.title} id={movie.id} /></View>)}
            </Swiper>
        : null);

MovieSlider.propTypes = {
    movies: PropTypes.array
};

export default  MovieSlider;