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
        try{
            const upcoming = await MoviesApi.upcoming();
            const popular = await MoviesApi.popular();
            const nowPlaying = await MoviesApi.nowPlaying();

            console.log(upcoming, popular, nowPlaying);
        } catch {
            this.setState({error: "Can't get Movies."})
        } finally {
            this.setState({loading:false })
        }
    }

    render() {
        const {loading} =this.state;
        return <MoviesPresenter loading={loading}/>;
    }
}