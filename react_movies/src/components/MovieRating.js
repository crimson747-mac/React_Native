import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {GREAY_COLOR, TINT_COLOR} from "../../constants/Colors";

const Vote = styled.Text`
    color:${props => props.inSlide ? TINT_COLOR : GREAY_COLOR};
    font-size: ${props => props.inSlide ? '14px' : '12px'};
    font-weight: 600;
    margin-bottom: 5px;
`;

const MovieRating = ({votes, inSlide = false}) => <Vote inSlide={inSlide}>⭐ {`${votes} / 10`}</Vote>

MovieRating.propTypes = {
    votes: PropTypes.number.isRequired,
    inSlide: PropTypes.bool
};

export default MovieRating;