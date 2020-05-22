import React, { Component } from "react";
import "../CSS/Ajax.css";

export default class Ajax extends Component {
  state = {
    AjaxArticles: [
      {
        title: `Moisander: 'Kolbeinn nog ijzersterke spits'        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Moisander-Kolbeinn-nog-ijzersterke-spits-22042013.pdf`,
        date: `22-04-2013`,
      },
      {
        title: `'Denk dat Maher heel goed bij Ajax past'        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Denk-dat-Maher-heel-goed-bij-Ajax-past-03042013.pdf`,
        date: `03-04-2013`,
      },
      {
        title: `'Opleiding Ajax beter dan Feyenoord'        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Opleiding-Ajax-beter-dan-Feyenoord-03042013.pdf`,
        date: `03-04-2013`,
      },
      {
        title: `'Heb mezelf bij elkaar geraapt'        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Blind-Heb-mezelf-bij-elkaar-geraapt-20032013.pdf`,
        date: `20-03-2013`,
      },
      {
        title: `Komt de lente eraan, Ajax niet te verslaan,         `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Komt-de-lente-eraan-Ajax-niet-te-verslaan-18032013.pdf`,
        date: `18-03-2013`,
      },
      {
        title: `De Boer: 'Dochters krijgen geen zakgeld'        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/De-Boer-dochters-krijgen-geen-zakgeld-06032013.pdf`,
        date: `06-03-2013`,
      },
      {
        title: `Alleen Ajax en Barcelona mikken op de jeugd        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Alleen-Ajax-en-Barcelona-mikken-op-de-jeugd-23012013.pdf`,
        date: `23-01-2013`,
      },
      {
        title: `Ajax na Europese wedstrijden        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/Ajax-na-Europese-wedstrijden-09012013.pdf`,
        date: `09-12-2013`,
      },
      {
        title: `De Jong meest waardevolle speler        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/04/De-Jong-meest-waardevolle-speler-Ajax-24122012.pdf`,
        date: `24-12-2012`,
      },
    ],
  };
  render() {
    let AjaxArticlesDisplay = this.state.AjaxArticles.map((article) => {
      return (
        <div className="Ajax-article-cards" key={article.title}>
          <a href={article.article}>
            {article.title} ({article.date})
          </a>
        </div>
      );
    });

    return (
      <div className="Ajax-wrapper">
        <div className="Ajax-information">
          For several months I worked as an editor at the editorial office of
          Ajax Showtime. I edited and wrote various articles about the Ajax
          news. Below an impression.
        </div>
        <div className="Ajax-ArenA">
          <img
            alt="Amsterdam-ArenA"
            src="http://daanruijter.eu/wp-content/uploads/2015/04/DSCF2496.jpg"
          ></img>
        </div>{" "}
        <div className="Ajax-articles"> {AjaxArticlesDisplay} </div>
      </div>
    );
  }
}
