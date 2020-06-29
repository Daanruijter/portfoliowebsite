import React, { Component } from "react";
import "../CSS/About.css";
import { connect } from "react-redux";

class AboutDutch extends Component {
  state = {
    extraInformationOpen: false,
    rodiOpen: false,
    tennisOpen: false,
    firstBookOpen: false,
    soccerOpen: false,
  };
  showExtraInformation = () => {
    this.setState({
      extraInformationOpen: !this.state.extraInformationOpen,
    });
  };

  showRodiExtraInformation = () => {
    this.setState({
      rodiOpen: !this.state.rodiOpen,
    });
  };

  showTennisExtraInformation = () => {
    this.setState({
      tennisOpen: !this.state.tennisOpen,
    });
  };

  showSoccerExtraInformation = () => {
    this.setState({
      soccerOpen: !this.state.soccerOpen,
    });
  };

  render() {
    let dev = process.env.NODE_ENV === "development";

    return (
      <div className="about-wrapper">
        {this.state.extraInformationOpen ? (
          <div className="about-information">
            <div className="about-information-extra">
              <p>
                Ik begon met computers te werken en schrijven toen ik nog maar
                nauwelijks boven de zetel van de computerstoel uitkwam. Op
                2,5-jarige leeftijd kroop ik achter de voorloper van de moderne
                computer, een Texas Instruments. Ik zette zo mijn eerste kleine
                woordjes op het digitale scherm. Toen ik ouder werd, bleef ik
                schrijven, voornamelijk in mijn dagboeken. Ik volgde het
                gymnasium aan het Zaanlands Lyceum te Zaandam en besloot om
                daarna de Master Algemene Economie aan de Universiteit van
                Amsterdam te gaan doen. In de zomer van 2007 studeerde ik af. Ik
                nam even een rustpauze en kwam erachter dat ik voor mijn beroep
                wilde gaan schrijven. Dit motiveerde mij om in 2008 de Premaster
                Journalistiek aan de Vrije Universiteit te gaan volgen en daarna
                de Master. Ik behaalde mijn bul in 2011.
              </p>
              <p>
                Deze studie was tamelijk theoretisch. Om die reden wilde ik na
                mijn afstuderen meer ervaring als journalist opdoen. Onder
                andere op de marketing- en communicatieafdeling van BaanStede,
                bij Ajaxshowtime.com en Rodi Media. Ik leerde zo de fijne
                kneepjes van het redacteursvak. Bij Rodi Media kon ik
                uiteindelijk blijven en ik werkte er enkele jaren als redacteur
                en tekstschrijver. Deze baan gaf me de kans om veel mooie
                interviews te doen.
                <br />
              </p>
              <p>
                Toch wilde ik een stapje hogerop. De markt voor redacteuren en
                tekstschrijvers was echter erg krap en wordt naar verwachting
                ook niet ruimer. Dit zette mij aan tot nadenken over mijn
                toekomst. Ik zocht naar een veelbelovende sector waarin ik me
                zou kunnen blijven ontwikkelen. Een creatieve en zeker ook
                internationale branche, zodat ik mijn kennis van vreemde talen
                kan inzetten. De IT heeft al die eigenschappen, zodat ik er nu
                met veel enthousiasme hard aan werk om mijn carrière als
                webdeveloper te lanceren.
              </p>
            </div>
            <div
              className="about-close-more-on-editorial-portfolio"
              onClick={this.showExtraInformation}
            >
              Sluiten
            </div>
          </div>
        ) : (
          <div className="about-information">
            <p>
              In mijn vorige carrière was ik redacteur. Voordat ik via een stage
              bij het mediabedrijf Rodi Media kwam te werken deed ik een aantal
              andere redactionele stages. Op die manier heb ik veel
              verschillende artikelen geschreven. Door op onderstaande link te
              klikken is hier meer over te lezen.
            </p>

            <div
              className="about-close-more-on-editorial-portfolio"
              onClick={this.showExtraInformation}
            >
              Lees meer over mijn carrière
            </div>
          </div>
        )}{" "}
        <div className="about-rodi-media">
          <h2>Rodi Media</h2>{" "}
          {this.state.rodiOpen ? (
            <div>
              {" "}
              <p>
                Als redacteur bij Rodi Media, een bedrijf dat ongeveer 23
                wekelijkse lokale kranten in de provincie Noord-Holland
                publiceert, schreef en redigeerde ik diverse voorpagina-,
                commerciële en kortere{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localarticles"
                      : "https://daanruijter.herokuapp.com/localarticles"
                  }
                >
                  artikelen
                </a>
                . artikelen. De onderwerpen varieerden van muziek en concerten
                tot politiek, kunst/cultuur, lokale activiteiten en sport.
                Daarnaast schreef ik veel artikelen voor adverterende klanten.
              </p>{" "}
              <div
                onClick={this.showRodiExtraInformation}
                className="about-articles-more"
              >
                Sluiten
              </div>
            </div>
          ) : (
            <div>
              <p>
                Ik schreef en redigeerde vele{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localarticles"
                      : "https://daanruijter.herokuapp.com/localarticles"
                  }
                >
                  artikelen
                </a>{" "}
                als redacteur bij Rodi Media, een bedrijf dat ongeveer 23
                wekelijkse lokale kranten in Noord-Holland publiceert,
              </p>
              <div className="about-link"></div>
              <div
                onClick={this.showRodiExtraInformation}
                className="about-articles-more"
              >
                Rodi Media-artikelen
              </div>
            </div>
          )}
        </div>
        <div className="about-tennis-information">
          <hr />
          <h2>Tennis</h2>

          {this.state.tennisOpen ? (
            <div className="about-tennis-text">
              {" "}
              <div className="about-tennis-daan-picture">
                <img
                  alt="daan"
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/Daantennis.jpg"
                />
              </div>
              <p>
                Al vele jaren ben ik een groot tennisliefhebber. De sport trok
                voor de eerste keer echt mijn aandacht toen ik in 2000 in een
                marathonpartij van Sjeng Schalken terechtkwam. De Nederlander,
                vanwege zijn vastheid ook wel "de muur" genoemd, vocht een
                verbeten strijd uit met Mark Philippoussis. Het was de derde
                ronde van Wimbledon en de hardserverende Australiër kwam als
                winnaar uit de bus. Hij versloeg Schalken na vijf zenuwslopende
                sets in vijf uur en vijf minuten. De laatste set eindigde in
                20-18 in het voordeel van Philippoussis, die in de kwartfinale
                tegen de Amerikaan Andre Agassi zijn Waterloo vond.
              </p>
              Sindsdien ging ik het nationale en internationale tennis meer
              volgen. Met de opkomst van Roger Federer aan het einde van de
              negentiger jaren werd mijn interesse almaar groter. In 2013 nam de
              Zwitserse maestro het op tegen mijn toenmalige Nederlandse
              favoriet. Ook Schalken maakte toen al kennis met Federers enorme
              potentie. De Nederlandse nederlaag was dan ook niet zo vreemd,
              want de met de kennis van nu misschien wel beste tennisser ooit
              zou uiteindelijk zijn allereerste Grand Slam-titel behalen. Ik heb
              driemaal de eer gehad om Federer live in actie te zien. Bij het
              Rotterdam ATP World Tournament zag ik hem in de kwartfinale
              tweemaal zegevieren (Jarkko Nieminen/2012 en Ruben
              Bemelmans/2018), maar eenmaal sneuvelen tegen de Fransman Julien
              Benneteau (2013).
              <p>
                In 2004 pakte ik zelf een racket op en ontdekte ik hoe leuk het
                is om zelf te tennissen. Tien jaar later, januari 2014, ging ik{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/internationaltennis"
                      : "https://daanruijter.herokuapp.com/internationaltennis"
                  }
                >
                  artikelen{" "}
                </a>
                schrijven voor de nationale tenniswebsite www.tennis.nl. Dat
                bleef ik voor anderhalf jaar op vrijwillige basis doen. In 2015
                werd ik lid van een andere tennisvereniging, waar ik enkele
                redactionele{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localtennis"
                      : "https://daanruijter.herokuapp.com/localtennis"
                  }
                >
                  artikelen{" "}
                </a>
                voor schreef en redigeerde.
              </p>{" "}
              <div
                onClick={this.showTennisExtraInformation}
                className="about-tennis-articles-more"
              >
                Raemon Sluiter
              </div>
            </div>
          ) : (
            <div className="about-tennis-text ">
              <p>
                Vanaf januari 2014 ging ik ongeveer anderhalf jaar lang{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/internationaltennis"
                      : "https://daanruijter.herokuapp.com/internationaltennis"
                  }
                >
                  artikelen
                </a>{" "}
                schrijven voor de nationale tenniswebsite www.tennis.nl. In 2015
                werd ik lid van mijn huidige tennisvereniging, TV De Gouw, en
                schreef en redigeerde meerdere{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localtennis"
                      : "https://daanruijter.herokuapp.com/localtennis"
                  }
                >
                  artikelen{" "}
                </a>
                voor mijn club.
              </p>{" "}
              <div
                onClick={this.showTennisExtraInformation}
                className="about-tennis-articles-more"
              >
                Meer over mijn passie voor tennis
              </div>
            </div>
          )}
        </div>
        <div className="about-soccer-information">
          {" "}
          <hr />
          <h2>Soccer</h2>{" "}
          {this.state.soccerOpen ? (
            <div className="about-soccer-text">
              Mijn passie voor voetbal kwam toen ik met de bal begon te oefenen
              op het plein voor mijn ouderlijk huis. Dit was voor mij het
              startsein om almaar meer te gaan voetballen. Toeval of niet was
              het in de periode waarin Ajax de voetbalwereld veroverde: de jaren
              negentig. Ik ging regelmatig met mijn oom en vader naar het oude
              stadion De Meer. Mijn vader had destijds een belangrijke rol had
              in het supportersbeleid van Ajax en organiseerde in 1995 een groot
              congres "Naar een nationaal supportersbeleid". Ik had de eer om
              als tienjarige jongen de bijeenkomst te openen.
              <img
                alt="Daan with Louis van Gaal"
                src="http://daanruijter.eu/wp-content/uploads/2015/04/DSCF7251-Large.jpg"
              ></img>
              <p>
                In mijn studententijd verruilde ik het speelplein voor de zaal
                om te gaan zaalvoetballen. Nog steeds trap ik elke zondagochtend
                in Amsterdam een balletje met een fijne groep. Ook kijk ik zo nu
                en dan met vrienden wedstrijden van Ajax of het Nederlands
                elftal.
              </p>
              <p>
                Nadat ik mijn master journalistiek heb afgerond wilde ik extra
                journalistieke ervaring opdoen. Daarom deed ik een stage bij de
                Ajax-nieuwswebsite Ajaxshowtime.com, waar ik diverse{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/ajax"
                      : "https://daanruijter.herokuapp.com/ajax"
                  }
                >
                  artikelen
                </a>
                publiceerde. Ik schref ook{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localsoccer"
                      : "https://daanruijter.herokuapp.com/localsoccer"
                  }
                >
                  artikelen{" "}
                </a>
                voor de zaalvoetbalclub FCZSW, waarvan de eigenaar een
                ex-collega is.
              </p>{" "}
              <div
                onClick={this.showSoccerExtraInformation}
                className="about-soccer-articles-more"
              >
                Sluiten
              </div>
            </div>
          ) : (
            <div className="about-soccer-text">
              <p>
                Nadat ik mijn master journalistiek heb afgerond wilde ik extra
                journalistieke ervaring opdoen. Daarom deed ik een stage bij de
                Ajax-nieuwswebsite Ajaxshowtime.com, waar ik diverse{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/ajax"
                      : "https://daanruijter.herokuapp.com/ajax"
                  }
                >
                  artikelen
                </a>{" "}
                publiceerde. Ik schreef ook{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localsoccer"
                      : "https://daanruijter.herokuapp.com/localsoccer"
                  }
                >
                  artikelen
                </a>{" "}
                voor de lokale zaalvoetbalclub FCZSW, waarvan de eigenaar een
                oud-collega is.
              </p>{" "}
              <div
                onClick={this.showSoccerExtraInformation}
                className="about-soccer-articles-more"
              >
                Meer over mijn passie voor voetbal
              </div>
            </div>
          )}
        </div>
        {/*FLIPPING BOOK */}
        <div className="about-book-wrapper">
          {" "}
          <hr />
          <h2>Eerste boek</h2>
          <div className="about-book-flexer">
            <br />
            <div className="about-book-cover-and-bookpresentation">
              <div className="about-book-flip-box">
                <div className="about-book-flip-box-inner">
                  <div className="about-book-front about-book-flip-box-front">
                    <img
                      alt="book-front"
                      src={
                        "http://daanruijter.eu/wp-content/uploads/2015/04/Heeft-u-nog-plek.jpg"
                      }
                    />
                  </div>

                  <div className="about-book-flip-box-back">
                    {" "}
                    <iframe
                      title="book-presentation"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/SkPVuBUbFeE"
                      // frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      // allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="about-book">
              <p>
                Kort na het afronden van mijn journalistiekstudie kreeg ik een
                interessante opdracht aangeboden. Ik had de mogelijkheid om een
                boek te schrijven over Camping de Duinvoet in vakantiedorp
                Schoorl. Een camping waar ik in mijn jeugd veelvuldig te vinden
                was. Ik leerde in al die jaren de eigenaren Hans en Ria goed
                kennen. Zij bestierden de camping lange tijd, maar zoals altijd
                komt er aan alle goede dingen een eind. Hans en Ria verkochten
                de camping in 2011.
              </p>
              Bij het afscheidsfeest op de camping, oktober 2011, vroeg Hans mij
              of ik een boek over De Duinvoet wilde schrijven. Ik hoefde niet
              lang na te denken en begon enthousiast aan deze bijzondere klus.
              In maart 2014 lag er een boek. De campingbaas gaf tijdens zijn
              zeventigste verjaardag een erg mooie speech, waarmee hij het boek
              officieel presenteerde.{" "}
              <p>
                <strong>
                  {" "}
                  Ga met uw muis over het boek om de boekpresentatie te
                  bekijken. <br />
                  <br />U kunt plaatjes, verhalen en meer informatie op de{" "}
                  <br />
                  <a href="https://www.facebook.com/Heeftunogplek">
                    Facebook-pagina van het boek vinden
                  </a>{" "}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    // let aboutDutch = <About />;

    // if (
    //   this.props.languages.english === "english" ||
    //   this.props.languages.english === "nodutch"
    // ) {
    //   return aboutEnglish;
    // }
    // if (
    //   this.props.languages.dutch === "dutch" ||
    //   this.props.languages.english === "noenglish"
    // ) {
    //   return aboutDutch;
    // }
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};

export default connect(mapStateToProps, null)(AboutDutch);
