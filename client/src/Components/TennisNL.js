import React, { Component } from "react";

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
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Williams-blikt-vooruit-op-revancheduel-tegen-Muguruza.pdf`,
      },
      {
        title: `Van der Duim ontsnapt en wint future Dominicaanse Republiek`,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Van-der-Duim-ontsnapt-en-wint-future-Dominicaanse-Republiek.pdf`,
      },
      {
        title: `Tweede ATP-finale van 2014 voor Murray        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Tweede-ATP-finale-van-2014-voor-Murray.pdf`,
      },
      {
        title: `Huta Galung bereikt vierde finale in Alphen       `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Huta-Galung-bereikt-vierde-finale-in-Alphen.pdf`,
      },
      {
        title: `Hogenkamp en Burger verder in Alphen aan den Rijn        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Hogenkamp-en-Burger-verder-in-Alphen-aan-den-Rijn.pdf`,
      },
      {
        title: `Lemoine deklasseert Versteeg in Nederlandse finale        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Lemoine-deklasseert-Versteeg-in-Nederlandse-finale.pdf`,
      },
      {
        title: `Federer soepel langs Robredo naar kwartfinale        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Federer-soepel-langs-Robredo-naar-kwartfinale.pdf`,
      },
      {
        title: `Kyrgios boekt mooiste overwinning uit zijn carrière        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Kyrgios-boekt-mooiste-overwinning-uit-zijn-carri%C3%A8re.pdf`,
      },
      {
        title: `Nadal blijft zonder setverlies in Parijs        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Nadal-blijft-zonder-setverlies-in-Parijs.pdf`,
      },
      {
        title: `Djokovic verslaat rivaal Nadal in finale Rome        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Djokovic-verslaat-rivaal-Nadal-in-finale-Rome.pdf`,
      },
      {
        title: `Errani zorgt in Rome voor langverwacht Italiaans succes        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Errani-zorgt-in-Rome-voor-langverwacht-Italiaans-succes.pdf`,
      },
      {
        title: `Bertens niet naar enkelspelfinale in Frankrijk        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Bertens-niet-naar-enkelspelfinale-in-Frankrijk.pdf`,
      },
      {
        title: `Bertens brengt Nederland naast Japan in Fed Cup        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Bertens-brengt-Nederland-naast-Japan-in-Fed-Cup.pdf`,
      },
      {
        title: `Nederland op achterstand in Fed Cup        `,
        article: `http://daanruijter.eu/wp-content/uploads/2015/05/Nederland-op-achterstand-in-Fed-Cup.pdf`,
      },
    ],
  };
  render() {
    let tennisNLArticlesDisplay = this.state.tennisNLArticles.map((article) => {
      return <div key={article.title}>{article.title}</div>;
    });
    return <div>{tennisNLArticlesDisplay}</div>;
  }
}
