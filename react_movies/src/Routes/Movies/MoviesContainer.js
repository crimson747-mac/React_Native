import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { MoviesApi } from "../../api";

export default class extends React.Component{
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount() {
        let upcoming, popular, nowPlaying, error;

        try{
            ({data:{results: upcoming}} = await MoviesApi.upcoming());
            ({data:{results: popular}} = await MoviesApi.popular());
            ({data:{results: nowPlaying}} = await MoviesApi.nowPlaying());
        } catch {
            error = "Can't get Movies.";
        } finally {
            this.setState({
                loading:false,
                upcoming,
                popular,
                nowPlaying,
                error
            })
        }
    }

    render() {
        const {loading, upcoming, popular, nowPlaying} =this.state;
        console.log(this.state);
        return <MoviesPresenter loading={loading}/>;
    }
}