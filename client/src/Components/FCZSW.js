import React, { Component } from "react";
import "../CSS/FCZSW.css";

export default class FCZSW extends Component {
  componentDidMount() {
    this.test();
  }
  test() {
    console.log("hi");
    let that = this;
    // setTimeout(that.test(), 20000);
    // return {
    //   image: this.state.magaZineArray[0].image,
    //   magaZineLink: this.state.magaZineArray[0].magazineLink,
    // };
    // console.log(this.state.magaZineArray[0].image);
    // console.log(this.state.magaZineArray[0].magazineLink);
  }

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
    magaZineArray: [
      {
        image:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2019.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2019.pdf",
      },
      {
        image:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2018.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2019/06/FCZSW-Magazine-2018.pdf",
      },
      {
        image:
          "http://daanruijter.eu/wp-content/uploads/2016/10/FCZSW-2016.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2016/10/FCZSW-Magazine-2016.pdf",
      },
      {
        image:
          "http://daanruijter.eu/wp-content/uploads/2015/04/FCZSW-Magazine.jpg",
        magazineLink:
          "http://daanruijter.eu/wp-content/uploads/2015/04/FCZSW-Magazine.pdf",
      },
    ],
  };
  render() {
    // let magaZineImage = this.test().image;
    // let magaZineLink = this.test().magaZineLink;

    // let FCZSWMagazinesDisplay = this.state.magaZineArray.map((article) => {
    //   return (
    //     <div key={article.image}>
    //       <img src={article.image} />
    //     </div>
    //   );
    // });

    let FCZSWArticlesDisplay = this.state.FCZSWArticles.map((article) => {
      return <div key={article.title}>{article.title}</div>;
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
        <div className="FCZSW-magazines">
          {/* <a href={magaZineLink}>
            <img src={magaZineImage} />
          </a> */}
        </div>
        <div className="FCZWS-articles">{FCZSWArticlesDisplay}</div>
        <div className="FCZSW-fall-of-fame"></div>
      </div>
    );
  }
}
