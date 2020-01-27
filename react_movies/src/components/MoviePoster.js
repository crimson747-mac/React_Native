import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import makePhotoUrl from "../../utils/makePhotoUrl";

// react-native의 Image는 반드시 width 와 height가 있어야 한다.
const Image = styled.Image`
    width: 100px;
    height: 160px;
    border-radius: 2.5px;
`;

const MoviePoster = ({path}) => {
    return <Image source={{uri: makePhotoUrl(path)}}/>
};

MoviePoster.propTypes = {
    path: PropTypes.string.isRequired
};

export default MoviePoster;