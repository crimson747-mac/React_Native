import React from "react";
import { Text  } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

//모든 스크린은 네비게이션 props를 가지고 있다.
const MoviesPresenter = ({loading, upcoming, popular, nowPlaying}) => (
    loading ? <Loader/> :  <Text>Movies</Text>
);

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array,
};

export default MoviesPresenter;
