import React from "react";
import { Text  } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import {BG_COLOR} from "../../../constants/Colors";

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

//모든 스크린은 네비게이션 props를 가지고 있다.
const MoviesPresenter = ({loading, upcoming, popular, nowPlaying}) => (
    loading ? <Loader/> :  <Container>
        <MovieSlider movies={nowPlaying}/>
    </Container>
);

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
};

export default MoviesPresenter;
