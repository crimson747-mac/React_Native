import React from "react";
import TVPresenter from "./TVPresenter";
import { TVApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, airingThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await TVApi.popular());
      ({
        data: { results: airingThisWeek }
      } = await TVApi.airingThisWeek());
      ({
        data: { results: airingToday }
      } = await TVApi.airingToday());
    } catch (error) {
      console.log(error);
      error = "Can't get TV";
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        airingThisWeek,
        airingToday
      });
    }
  }

  render() {
    const { loading, popular, airingThisWeek, airingToday } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        airingThisWeek={airingThisWeek}
        airingToday={airingToday}
      />
    );
  }
}
