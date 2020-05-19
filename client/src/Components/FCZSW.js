import React, { Component } from "react";

export default class FCZSW extends Component {
  state = {
    FCZSWArticles: [
      {
        title: `Zaalvoetbal voor jeugd bij zaalvoetbalclub FCZSW`,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/38277/zaalvoetbal-voor-jeugd-bij-zaalvoetbalclub-fczsw-`,
        date: `20/12/2018`,
      },
      {
        title: `Nieuwe trainer voor selectie FCZSW`,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/95197/nieuwe-trainer-voor-selectie-fczsw`,
        date: `01-04-2015`,
      },
      {
        title: `Zaalvoetbalclub FCZSW/Lekkervroeg.nl draait op volle toeren`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/21-10-2014-Zaalvoetbalclub-FCZSW.pdf`,
        date: `21-10-2014`,
      },
      {
        title: `http://daanruijter.eu/wp-content/uploads/2020/05/15-10-2014-Persbericht-Shirtactie-Lekkervroeg.nl_.pdf`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/15-10-2014-Persbericht-Shirtactie-Lekkervroeg.nl_.pdf`,
        date: `15-10-2014`,
      },
      {
        title: `Fc Zaansportswear 7 kampioen`,
        article: `http://epaper.rodimedia.nl/rodimedia/data/EPaper/ZaansStadsblad/epaperarchive/2014/04-23/epaper/page11.pdf`,
        date: `24-04-2014`,
      },
      {
        title: `Fc Zaansportswear in vier jaar een van de grootste in de Zaanstreek`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/06-02-2014-FC-Zaansportswear.pdf`,
        date: `06-02-2014`,
      },
    ],
  };
  render() {
    let FCZSWArticlesDisplay = this.state.FCZSWArticles.map((article) => {
      return <div key={article.title}>{article.title}</div>;
    });

    return <div>{FCZSWArticlesDisplay} </div>;
  }
}
