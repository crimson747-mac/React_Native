import React from "react";
import { Text  } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

//모든 스크린은 네비게이션 props를 가지고 있다.
const MoviesPresenter = ({loading}) => loading ? <Loader/> :  <Text>Movies</Text>;

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MoviesPresenter;
