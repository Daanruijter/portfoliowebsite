import React, { Component } from "react";
import "../CSS/FCZSW.css";

export default class FCZSW extends Component {
  componentDidMount() {
    this.setMagazineCounter();
  }
  setMagazineCounter() {
    let magazineCounter = this.state.magazineCounter;

    if (this.state.magazineCounter === this.state.magazineArray.length - 1) {
      magazineCounter = 0;
    } else {
      magazineCounter++;
    }

    this.setState({ magazineCounter: magazineCounter });

    setTimeout(() => this.setMagazineCounter(), 5000);
  }

  state = {
    FCZSWArticles: [
      {
        title: `Zaalvoetbal voor jeugd bij zaalvoetbalclub FCZSW`,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/38277/zaalvoetbal-voor-jeugd-bij-zaalvoetbalclub-fczsw-`,
        date: `(20/12/2018)`,
      },
      {
        title: `Nieuwe trainer voor selectie FCZSW`,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/95197/nieuwe-trainer-voor-selectie-fczsw`,
        date: `(01-04-2015)`,
      },
      {
        title: `Zaalvoetbalclub FCZSW/Lekkervroeg.nl draait op volle toeren`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/21-10-2014-Zaalvoetbalclub-FCZSW.pdf`,
        date: `(21-10-2014)`,
      },
      {
        title: `Voorspel uitslag RKC - Telstar en win een Telstar-uitshirt`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/15-10-2014-Persbericht-Shirtactie-Lekkervroeg.nl_.pdf`,
        date: `(15-10-2014)`,
      },
      {
        title: `Fc Zaansportswear 7 kampioen`,
        article: `http://epaper.rodimedia.nl/rodimedia/data/EPaper/ZaansStadsblad/epaperarchive/2014/04-23/epaper/page11.pdf`,
        date: `(24-04-2014)`,
      },
      {
        title: `Fc Zaansportswear in vier jaar een van de grootste in de Zaanstreek`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/06-02-2014-FC-Zaansportswear.pdf`,
        date: `(06-02-2014)`,
      },
    ],
    magazineArray: [
      {
        magazineImage:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2019.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2019.pdf",
      },
      {
        magazineImage:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2018.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2018.pdf",
      },
      {
        magazineImage:
          "http://daanruijter.eu/wp-content/uploads/2016/10/FCZSW-2016.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2016/10/FCZSW-Magazine-2016.pdf",
      },
      {
        magazineImage:
          "http://daanruijter.eu/wp-content/uploads/2015/04/FCZSW-Magazine.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2015/04/FCZSW-Magazine.pdf",
      },
    ],
    magazineCounter: 0,
  };
  render() {
    let magazinesImageDisplay = this.state.magazineArray[
      this.state.magazineCounter
    ].magazineImage;
    let magazinesDisplay = this.state.magazineArray[this.state.magazineCounter]
      .magazineLink;

    let FCZSWArticlesDisplay = this.state.FCZSWArticles.map((article) => {
      return (
        <div className="FCZSW-article-cards" key={article.title}>
          <a href={article.article}>
            {article.title} <i>{article.date}</i>
          </a>
        </div>
      );
    });

    return (
      <div className="FCZSW-wrapper">
        <div className="FCZSW-information">
          FCZSW is a big indoor soccer club in the Zaanstreek, a region to the
          north of Amsterdam. When a collegue at Rodi Media, the owner of FCZSW,
          asked me to do some promotional activities for the club I became
          enthusiastic. I wrote several articles and published multiple club
          magazines in collaboration with my former collegue.
        </div>
        <div className="FCZSW-magazines-and-hall-of-fame">
          <div className="FCZSW-magazines">
            <a href={magazinesDisplay}>
              <img alt="magazines" src={magazinesImageDisplay} />
            </a>
          </div>
          <div className="FCZSW-hall-of-fame">
            <img
              alt="halloffame"
              src="http://daanruijter.eu/wp-content/uploads/2015/04/7.-De-thuishallen.jpg"
            />
          </div>{" "}
        </div>
        <div className="FCZSW-articles-header">
          Some articles I wrote for FCZSW{" "}
        </div>
        <div className="FCZSW-articles">{FCZSWArticlesDisplay} </div>
      </div>
    );
  }
}
