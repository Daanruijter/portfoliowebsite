import React, { Component } from "react";
import "../CSS/TennisNL.css";

export default class TennisNL extends Component {
  state = {
    tennisNLArticles: [
      {
        tournement: `ATP Basel, 2014`,
        title: `Goffin langs tienertalent Coric naar finale Basel       `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Goffin-langs-tienertalent-Coric-naar-finale-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Goffin-langs-tienertalent-Coric-naar-finale.pdf`,
      },
      {
        tournement: `Masters 1000 Parijs, 2014       `,
        title: `Federer revancheert zich tegen Raonic       `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Federer-revancheert-zich-tegen-Raonic-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Federer-revancheert-zich-tegen-Raonic.pdf`,
      },
      {
        tournement: `WTA Bastad, 2014       `,
        title: `Barthel en Scheepers naar finale Bastad       `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Barthel-en-Scheepers-naar-finale-Bastad-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Barthel-en-Scheepers-naar-finale-Bastad.pdf`,
      },
      {
        tournement: `ATP Dubai, 2014        `,
        title: `Federer verovert zesde eindzege in Dubai        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Federer-verovert-zesde-eindzege-in-Dubai-thumb2.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Federer-verovert-zesde-eindzege-in-Dubai.pdf`,
      },
      {
        tournement: `ATP Shenzhen, 2014        `,
        title: `Zevende ATP-finale voor Rojer en Tecau        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Zevende-ATP-finale-voor-Rojer-en-Tecau-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Zevende-ATP-finale-voor-Rojer-en-Tecau.pdf`,
      },
      {
        tournement: `Wimbledon, 2014        `,
        title: `Serena Williams in drie sets uitgeschakeld        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Serena-Williams-in-drie-sets-uitgeschakeldII-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Serena-Williams-in-drie-sets-uitgeschakeld.pdf`,
      },
      {
        tournement: `Challenger Alphen, 2014        `,
        title: `Einde oefening voor De Bakker in Alphen        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Einde-oefening-voor-De-Bakker-in-Alphen-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Einde-oefening-voor-De-Bakker-in-Alphen.pdf`,
      },
      {
        tournement: `General, 2014`,
        title: `Federer verklaart gebrek aan tieners in top100`,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Federer-zoekt-verklaring-gebrek-tieners-in-top100-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Federer-zoekt-verklaring-gebrek-tieners-in-top100.pdf`,
      },
      {
        tournement: `ATP Basel, 2014        `,
        title: `Haase speelt kwalificaties in Basel        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Haase-speelt-kwalificaties-in-Basel-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Haase-speelt-kwalificaties-in-Basel.pdf`,
      },
      {
        tournement: `ATP Zagreb, 2013        `,
        title: `Marin Cilic winnaar in Zagreb        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Marin-Cilic-winnaar-in-Zagreb-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Marin-Cilic-winnaar-in-Zagreb.pdf`,
      },
      {
        tournement: `ATP Bastad, 2014        `,
        title: `Cuevas verrast Verdasco in Bastad        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Cuevas-verrast-Verdasco-in-Bastad-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Cuevas-verrast-Verdasco-in-Bastad.pdf`,
      },
      {
        tournement: `ATP Oeiras, 2014        `,
        title: `Berdych veel te sterk voor Hanescu        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Berdych-veel-te-sterk-voor-Hanescu-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Berdych-veel-te-sterk-voor-Hanescu.pdf`,
      },
      {
        tournement: `US Open, 2014        `,
        title: `Krajicek en Hradecka stranden in derde ronde        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Krajicek-en-Hradecka-stranden-in-derde-ronde.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Krajicek-en-Hradecka-stranden-in-derde-ronde.pdf`,
      },
      {
        tournement: `Masters 1000 Parijs, 2014        `,
        title: `Sijsling naar beslissende ronde kwalificaties Parijs        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Sijsling-naar-beslissende-ronde-kwalificaties-Parijs-thumb.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Sijsling-naar-beslissende-ronde-kwalificaties-Parijs1.pdf`,
      },
      {
        tournement: `ATP Acapulco, 2014        `,
        title: `Dimitrov na marathonpartij voorbij Murray        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Dimitrov-na-marathonpartij-voorbij-Murray-in-Acapulco.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Dimitrov-na-marathonpartij-voorbij-Murray-in-Acapulco.pdf`,
      },
      {
        tournement: `Wimbledon, 2014        `,
        title: `Federer eenvoudig naar tweede ronde        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/10/M%C3%BCller-Federer-eenvoudig-naar-tweede-ronde.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2016/09/M%C3%BCller-Federer-eenvoudig-naar-tweede-ronde.pdf`,
      },
      {
        tournement: `ATP Kitzbühel, 2014        `,
        title: `Goffin grijpt eerste ATP-titel        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Goffin-grijpt-eerste-ATP-titel.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Goffin-grijpt-eerste-ATP-titel.pdf`,
      },
      {
        tournement: `Australian Open, 2015        `,
        title: `Eerste Grand Slamtitel Bolelli en Fognini        `,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/02/Bolelli-en-Fognini-pakken-eerste-Grand-Slamtitel.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/02/Bolelli-en-Fognini-pakken-eerste-Grand-Slamtitel.pdf`,
      },
    ],
    tennisNLArticlesOnlyText: [
      {
        title: `Williams blikt vooruit op revancheduel tegen Muguruza    `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Williams-blikt-vooruit-op-revancheduel-tegen-Muguruza.pdf`,
      },
      {
        title: `Van der Duim ontsnapt en wint future Dominicaanse Republiek`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Van-der-Duim-ontsnapt-en-wint-future-Dominicaanse-Republiek.pdf`,
      },
      {
        title: `Tweede ATP-finale van 2014 voor Murray        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Tweede-ATP-finale-van-2014-voor-Murray.pdf`,
      },
      {
        title: `Huta Galung bereikt vierde finale in Alphen       `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Huta-Galung-bereikt-vierde-finale-in-Alphen.pdf`,
      },
      {
        title: `Hogenkamp en Burger verder in Alphen aan den Rijn        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Hogenkamp-en-Burger-verder-in-Alphen-aan-den-Rijn.pdf`,
      },
      {
        title: `Lemoine deklasseert Versteeg in Nederlandse finale        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Lemoine-deklasseert-Versteeg-in-Nederlandse-finale.pdf`,
      },
      {
        title: `Federer soepel langs Robredo naar kwartfinale        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Federer-soepel-langs-Robredo-naar-kwartfinale.pdf`,
      },
      {
        title: `Kyrgios boekt mooiste overwinning uit zijn carrière        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Kyrgios-boekt-mooiste-overwinning-uit-zijn-carri%C3%A8re.pdf`,
      },
      {
        title: `Nadal blijft zonder setverlies in Parijs        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Nadal-blijft-zonder-setverlies-in-Parijs.pdf`,
      },
      {
        title: `Djokovic verslaat rivaal Nadal in finale Rome        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Djokovic-verslaat-rivaal-Nadal-in-finale-Rome.pdf`,
      },
      {
        title: `Errani zorgt in Rome voor langverwacht Italiaans succes        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Errani-zorgt-in-Rome-voor-langverwacht-Italiaans-succes.pdf`,
      },
      {
        title: `Bertens niet naar enkelspelfinale in Frankrijk        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Bertens-niet-naar-enkelspelfinale-in-Frankrijk.pdf`,
      },
      {
        title: `Bertens brengt Nederland naast Japan in Fed Cup        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Bertens-brengt-Nederland-naast-Japan-in-Fed-Cup.pdf`,
      },
      {
        title: `Nederland op achterstand in Fed Cup        `,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/05/Nederland-op-achterstand-in-Fed-Cup.pdf`,
      },
    ],
  };
  render() {
    let tennisNLArticlesDisplay = this.state.tennisNLArticles.map((article) => {
      return (
        <div key={article.title}>
          <div className="tennisNL-cards">
            <div className="tennisNL-header">{article.title}</div>
            <div className="tennisNL-chapeau">{article.chapeau}</div>
            <a href={article.articleLink}>
              <img alt={article.title} src={article.picture} />
            </a>
          </div>
        </div>
      );
    });
    let tennisNLArticlesOnlyTextDisplay = this.state.tennisNLArticlesOnlyText.map(
      (article) => {
        return (
          <div key={article.title}>
            <div className="tennisNL-only-text-cards">
              <a href={article.articleLink}>
                <div className="tennisNL-header">{article.title}</div>
              </a>
            </div>
          </div>
        );
      }
    );
    return (
      <div className="tennisNL-wrapper">
        <div className="tennisNL-information">
          <div className="tennisNL-Daan-picture">
            <img
              alt="daan"
              src="http://daanruijter.eu/wp-content/uploads/2015/04/Daantennis.jpg"
            />
          </div>
          <div className="tennisNL-text">
            <p>
              I've been a tennis lover for many years now. The sport got me for
              the first time during a marathon match that Sjeng Schalken played
              in 2000. The Dutchman, also called "the wall", because he hit so
              many balls back, fought out a tough battle against Mark
              Philippoussis. It was the third round of Wimbledon and the big
              serving Australian came out as the winner, beating Schalken after
              five thrilling sets and in five hours and five minutes. The final
              set score: 20-18. Philippoussis ended up losing in his quarter
              final match against good old American Andre Agassi.
            </p>
            Since then I started to follow national and international tennis.
            With the rise of Roger Federer at the end of the nineties my
            interest only got bigger. Unfortunately in 2013 Schalken got beaten
            again at the quarter finals of Wimbledon, but now by an unleashed
            Swiss maestro. After this match the probably best male tennis player
            ever went on to win the tournement, his maiden Grand Slam. I had the
            honour to see him in action at the Rotterdam ATP World Tournement
            three times.
            <p>
              In 2004 I picked up a racket and discovered how nice it also is to
              play the game by myself. Ten years later, January 2014, I started
              to write for the Dutch tennis website www.tennis.nl, doing that
              for about 1,5 years.
            </p>
          </div>
        </div>
        <div className="tennisNL-articles-flexer">
          {tennisNLArticlesDisplay}
        </div>
        <div className="tennisNL-other-articles">Other articles</div>
        <div className="tennisNL-only-text-wrapper">
          {tennisNLArticlesOnlyTextDisplay}
        </div>
      </div>
    );
  }
}
