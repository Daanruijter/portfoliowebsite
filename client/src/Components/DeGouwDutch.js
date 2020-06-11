import React, { Component } from "react";
import "../CSS/DeGouw.css";
import DeGouw from "./DeGouw";
import { connect } from "react-redux";

class DeGouwDutch extends Component {
  state = {
    tennisverenigingDeGouwArticlesChampionship: [
      {
        title: `De Gouw pakt titel in Zandvoort`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/kampioenschap-1-1-juni-2015-Zon-teamgevoel-weinig-meegemaakt-De-Gouw-pakt-titel-in-Zandvoort.pdf`,
        date: `(18/05/2015)`,
      },
      {
        title: ` De Gouw op titelkoers na winst tegen concurrent `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/kampioenschap-3-11-mei-2015-De-Gouw-op-titelkoers-na-winst-tegen-concurrent.pdf`,
        date: `(12/05/2015)`,
      },
      {
        title: `De Gouw pakt koppositie `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/kampioenschap-4-27-april-2015-De-Gouw-pakt-koppositie.pdf`,
        date: `(28/04/2015)`,
      },
      {
        title: `De Gouw boekt derde overwinning op rij `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/kampioenschap-5-20-april-2015-De-Gouw-boekt-derde-overwinning-op-rij.pdf`,
        date: `(20/04/2015)`,
      },
      {
        title: `De Gouw pakt volle winst in Hoorn `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/kampioenschap-6-13-april-2015-De-Gouw-pakt-volle-winst-in-Hoorn.pdf`,
        date: `(13/04/2015)`,
      },
      {
        title: `Klinkende overwinning eerste mixteam TV de Gouw`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/kampioenschap-7-7-april-2015-overwinning-eerste-mixteam-TV-de-Gouw.pdf`,
        date: `(08/04/2015)`,
      },
    ],
    tennisverenigingDeGouwArticlesOther: [
      {
        title: `'Bij elke mooie bal juichten ze'`,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/45498/span-`,
        date: `(29/05/2017)`,
      },
      {
        title: ` 'Teamsfeer is onze kracht' `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/Overig-maart-2016-Hoofdklasse-Mix-TV-de-Gouw-Rodi-Media.pdf`,
        date: `(06/04/2016)`,
      },
      {
        title: `Opnieuw geen winst voor De Gouw`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/april-2016-Opnieuw-geen-winst-voor-De-Gouw.pdf`,
        date: `(04/2016)`,
      },
      {
        title: `Roy van Ammers wint week KIA rijden met hardste tennisservice`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/maart-2016-Roy-van-Ammers-wint-week-KIA-rijden-met-hardste-tennisservice.pdf`,
        date: `(03/2016)`,
      },

      {
        title: `Geslaagde reünie TV De Gouw`,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/105529/geslaagde-re-uuml-nie-tv-de-gouw?redir)`,
        date: `(05/10/2015)`,
      },
      {
        title: ` Zaans tennistalent Demi tweemaal clubkampioen `,
        article: `https://www.rodi.nl/regio/zaanstad/nieuws/104582/zaans-tennistalent-demi-tweemaal-clubkampioen`,
        date: `(22/09/2015)`,
      },
      {
        title: `'Lekker kletsen over vroeger'`,
        article: `http://epaper.rodimedia.nl/rodimedia/data/EPaper/ZaansStadsblad/epaperarchive/2015/09-23/epaper/page1.pdf`,
        date: `(15/09/2015)`,
      },
      {
        title: `  Nieuw bestuur TV de Gouw op de foto `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/Overig-21-april-2015-Nieuw-bestuur-TV-de-Gouw-op-de-foto.pdf`,
        date: `(22/04/2015)`,
      },
      {
        title: `Druk finaleweekend bij TV de Gouw `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/Overig-24-maart-2015-Druk-finaleweekend-bij-TV-de-Gouw.pdf`,
        date: `(24/03/2015)`,
      },
      {
        title: ` Dubbelen bij Gouw Krokus Dubbeltoernooi `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/Overig-15-februari-2015-Gouw-Krokus-Dubbeltoernooi.pdf`,
        date: `(16/02/2015)`,
      },
      {
        title: `TV de Gouw opent jubileumjaar`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/Overig-7-januari-2015-TV-de-Gouw-opent-jubileumjaar.pdf`,
        date: `(07/01/2015)`,
      },
      {
        title: ` TV de Gouw uit waardering `,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/Overig-6-oktober-2014-Sponsor-en-medewerkerstoernooi-TV-de-Gouw.pdf`,
        date: `(08/10/2014)`,
      },
      {
        title: `TV de Gouw haalt toptennis binnen`,
        article: `http://daanruijter.eu/wp-content/uploads/2020/05/januari-2015-TV-de-Gouw-haalt-toptennis-binnen.pdf`,
        date: `(24/01/2015)`,
      },
    ],
  };
  render() {
    let tennisverenigingDeGouwArticlesChampionshipDisplay = this.state.tennisverenigingDeGouwArticlesChampionship.map(
      (article) => {
        return (
          <div className="DeGouw-championship-cards" key={article.title}>
            <a href={article.article}>
              {article.title} {<i>{article.date}</i>}
            </a>
          </div>
        );
      }
    );
    let tennisverenigingDeGouwArticlesOtherDisplay = this.state.tennisverenigingDeGouwArticlesOther.map(
      (article) => {
        return (
          <div className="DeGouw-other-cards" key={article.title}>
            <a href={article.article}>
              {article.title} {<i>{article.date}</i>}
            </a>
          </div>
        );
      }
    );
    let deGouwDutch = (
      <div className="DeGouw-wrapper">
        <div className="DeGouw-information">
          Sinds september 2014 ben ik lid van Tennisvereniging De Gouw in
          Zaandam. Zo nu en dan sla ik er een balletje. Toen ik lid werd, bood
          ik aan om artikelen voor de vereniging te schrijven of redigeren. Ik
          publiceerde bijvoorbeeld een aantal artikelen over het kampioenschap
          van het mixteam, dat toen in de Eerste Klasse speelde. Dat is het
          derde beste niveau in die mixcompetitie.
        </div>
        <div className="DeGouw-clubhouse">
          <img
            alt="Clubhouse"
            src="        http://daanruijter.eu/wp-content/uploads/2015/04/Sponsor-en-medewerkerstoernooi.jpg
"
          />
        </div>
        <div className="DeGouw-championship-articles-header">
          Artikelen over het kampioenschap
        </div>
        <div className="DeGouw-tennisverenigingDeGouwArticlesChampionshipDisplay">
          {tennisverenigingDeGouwArticlesChampionshipDisplay}
        </div>

        <div className="DeGouw-competition">
          <img
            alt="Competition"
            src="http://daanruijter.eu/wp-content/uploads/2015/06/TV-De-Gouw-zegeviert.jpg"
          />
        </div>
        <div className="DeGouw-NienkeDeJong-action">
          <img
            alt="Action Nienke de Jong"
            src="http://daanruijter.eu/wp-content/uploads/2015/06/Actiefoto-Nienke-de-Jong.jpg"
          />
        </div>
        <div className="DeGouw-other-articles-header">
          Andere artikelen over Tennisvereniging De Gouw
        </div>
        <div className="DeGouw-tennisverenigingDeGouwArticlesOtherDisplay">
          {tennisverenigingDeGouwArticlesOtherDisplay}
        </div>
        <div className="DeGouw-scoreboards">
          <img
            alt="Scoreboards"
            src="http://daanruijter.eu/wp-content/uploads/2015/06/Scoreborden-bij-TV-De-Gouw.jpg"
          />
        </div>
      </div>
    );
    let deGouwEnglish = (
      <div>
        <DeGouw />
      </div>
    );
    if (
      this.props.languages.english === "english" ||
      this.props.languages.english === "nodutch"
    ) {
      return deGouwEnglish;
    }
    if (
      this.props.languages.dutch === "dutch" ||
      this.props.languages.english === "noenglish"
    ) {
      return deGouwDutch;
    }
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};
export default connect(mapStateToProps, null)(DeGouwDutch);
