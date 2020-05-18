import React, { Component } from "react";

export default class TennisNL extends Component {
  state = {
    tennisverenigingDeGouwArticlesChampionship: [
      {
        title: `    `,
        article: ``,
      },
    ],
    tennisverenigingDeGouwArticlesOther: [
      {
        title: `    `,
        article: ``,
      },
    ],
  };
  render() {
    let tennisverenigingDeGouwArticlesChampionshipDisplay = this.state.tennisverenigingDeGouwArticlesChampionship.map(
      (article) => {
        return <div key={article.title}>{article.title}</div>;
      }
    );
    let tennisverenigingDeGouwArticlesOtherDisplay = this.state.tennisverenigingDeGouwArticlesOther.map(
      (article) => {
        return <div key={article.title}>{article.title}</div>;
      }
    );
    return <div>{tennisverenigingDeGouwArticlesChampionshipDisplay}</div>
    <div>{tennisverenigingDeGouwArticlesOtherDisplay}</div>;;
  }
}
