import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../../../utils/makePhotoUrl";
import Layout from "../../../constants/Layout";
import MoviePoster from "../../components/MoviePoster";
import {GREAY_COLOR, TINT_COLOR} from "../../../constants/Colors";
import MovieRating from "../../components/MovieRating";

const Container = styled.View`
    flex: 1;
    position:relative;
`;

const BgImage = styled.Image`
    width:${Layout.width};
    height:${Layout.height / 3};
    opacity: 0.4;
    position: absolute;
`;

const Content = styled.View`
    flex: 1;
    flex-direction:row;
    align-items:center;
    padding-horizontal: 30px;
    justify-content: space-between;
`;

// 디폴트로 align-items는 stretch 이다.
const Column = styled.View`
    width: 60%;
    align-items: flex-start; 
`;

const Title = styled.Text`
    color:${TINT_COLOR};
    font-size: 16px;
    font-weight: 600;
`;

const Overview = styled.Text`
    color: ${GREAY_COLOR};
    font-size: 15px;
    margin-bottom: 10px
`;

const VoteContainer = styled.View`
    margin: 12px 0px;
`;

const BtnContainer = styled.TouchableOpacity`
 background-color: crimson;
 padding: 5px;
 border-radius: 3px;
`;

const BtnText = styled.Text`
    color: white;
    font-size: 15px;
`;

const MovieSlide =
    ({
         posterPhoto,
         backgroundPhoto,
         title,
         voteAvg,
         overview
     }) => (<Container>
        <BgImage source={{uri: makePhotoUrl(backgroundPhoto)}}/>
        <Content>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title>{title}</Title>
                {voteAvg ?
                    <VoteContainer>
                        <MovieRating votes={voteAvg} inSlide={true}/>
                    </VoteContainer>
                    : null}
                {overview ?
                    <Overview>
                        {overview.length > 117 ? `${overview.substring(0, 120)}...` : overview}
                    </Overview>
                    : null}
                <BtnContainer>
                    <BtnText>
                        More Details
                    </BtnText>
                </BtnContainer>
            </Column>
        </Content>
     </Container>);

MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default MovieSlide;