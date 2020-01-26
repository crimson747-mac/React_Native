import React from "react";
import TVPresenter from "./TVPresenter";
import {TVApi} from "../../api";

export default class extends React.Component{
    state ={
        loading: true,
        popular: null,
        topRated: null,
        airingToday: null
    };

    async componentDidMount() {
        let popular, topRated, airingToday, error;
        try{
            ({data:{results: popular}} = await TVApi.popular());
            ({data:{results: topRated}} = await TVApi.topRated());
            ({data:{results: airingToday}} = await TVApi.airingToday());
        } catch (error) {
            console.log(error);
            error = "Can't get TV";
        } finally {
            this.setState({
                loading: false,
                error,
                popular,
                topRated,
                airingToday
            })
        }
    }

    render() {
        const {loading, popular, topRated, airingToday} = this.state;
        console.log(this.state);
        return <TVPresenter loading={loading} popular={popular} topRated={topRated} airingToday={airingToday}/>;
    }
};