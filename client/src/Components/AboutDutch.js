import React, { Component } from "react";
import "../CSS/About.css";
import { Fragment } from "react";
import Media from "react-media";

export default class About extends Component {
  render() {
    let dev = process.env.NODE_ENV === "development";
    return (
      <div className="about-wrapper">
        <div className="about-information">
          <p>
            Ik begon met computers te werken en schrijven toen ik nog maar
            nauwelijks boven de zetel van de computerstoel uitkwam. Op
            2,5-jarige leeftijd kroop ik achter de voorloper van de moderne
            computer, een Texas Instruments. Ik zette zo mijn eerste kleine
            woordjes op het digitale scherm. Toen ik ouder werd, bleef ik
            schrijven, voornamelijk in mijn dagboeken. Ik volgde het gymnasium
            aan het Zaanlands Lyceum te Zaandam en besloot om daarna de Master
            Algemene Economie aan de Universiteit van Amsterdam te gaan doen. In
            de zomer van 2007 studeerde ik af. Ik nam even een rustpauze en kwam
            erachter dat ik voor mijn beroep wilde gaan schrijven. Dit
            motiveerde mij om in 2008 de Premaster Journalistiek aan de Vrije
            Universiteit te gaan volgen en daarna de Master. Ik behaalde mijn
            bul in 2011.
          </p>
          <p>
            Deze studie was tamelijk theoretisch. Om die reden wilde ik na mijn
            afstuderen meer ervaring als journalist opdoen. Onder andere op de
            marketing- en communicatieafdeling van BaanStede, bij
            Ajaxshowtime.com en Rodi Media. Ik leerde zo de fijne kneepjes van
            het redacteursvak. Bij Rodi Media kon ik uiteindelijk blijven en ik
            werkte er enkele jaren als redacteur en tekstschrijver. Deze baan
            gaf me de kans om veel mooie interviews te doen.
            <br />
          </p>
          <p>
            Helaas is de markt voor redacteuren en tekstschrijvers erg krap en
            wordt deze naar verwachting ook niet ruimer. Dit zette mij aan tot
            nadenken over mijn toekomst. Ik zocht naar een veelbelovende sector
            waarin ik me zou kunnen blijven ontwikkelen. Een creatieve en zeker
            ook internationale branche, zodat ik mijn kennis van vreemde talen
            kan inzetten. De IT heeft al die eigenschappen, zodat ik er nu met
            veel enthousiasme hard aan werk om mijn carrière als webdeveloper te
            lanceren.
          </p>
          <p>Hieronder vindt u informatie over mijn portfolio als redacteur.</p>
        </div>
        <div className="about-rodi-media">
          <h2>Rodi Media</h2>
          Als redacteur bij Rodi Media, een bedrijf dat ongeveer 23 wekelijkse
          lokale kranten in de provincie Noord-Holland publiceert, schreef en
          redigeerde ik diverse voorpagina-, commerciële en kortere artikelen.
          De onderwerpen varieerden van muziek en concerten tot politiek,
          kunst/cultuur, lokale activiteiten en sport. Daarnaast schreef ik veel
          artikelen voor adverterende klanten.
        </div>{" "}
        <div className="about-link">
          {" "}
          <a
            href={
              dev
                ? "http://localhost:3000/localarticles"
                : "https://daanruijter.herokuapp.com/localarticles"
            }
          >
            <Media
              queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1100px)",
                large: "(min-width: 1101px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && (
                    <div>
                      Rodi Media-artikelen
                      <br />
                    </div>
                  )}
                  {matches.medium && (
                    <div>
                      Klik hierop om Rodi Media-artikelen te lezen <br />
                    </div>
                  )}
                  {matches.large && (
                    <div>
                      Klik hierop om Rodi Media-artikelen te lezen <br />
                    </div>
                  )}
                </Fragment>
              )}
            </Media>
          </a>
        </div>
        <div className="about-tennis-information">
          <h2>Tennis</h2>

          <div className="about-tennis-text">
            <div>
              <div className="about-tennis-daan-picture">
                <img
                  alt="daan"
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/Daantennis.jpg"
                />
              </div>
              Al vele jaren ben ik een groot tennisliefhebber. De sport trok
              voor de eerste keer echt mijn aandacht toen ik in 2000 in een
              marathonpartij van Sjeng Schalken terechtkwam. De Nederlander,
              vanwege zijn vastheid ook wel "de muur" genoemd, vocht een
              verbeten strijd uit met Mark Philippoussis. Het was de derde ronde
              van Wimbledon en de hardserverende Australiër kwam als winnaar uit
              de bus. Hij versloeg Schalken na vijf zenuwslopende sets in vijf
              uur en vijf minuten. De laatste set eindigde in 20-18 in het
              voordeel van Philippoussis, die in de kwartfinale tegen de
              Amerikaan Andre Agassi zijn Waterloo vond.
            </div>
            <br />
            <div>
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
            </div>
            <br />
            <div>
              In 2004 pakte ik zelf een racket op en ontdekte ik hoe leuk het is
              om zelf te tennissen. Tien jaar later, januari 2014, ging ik
              schrijven voor de nationale tenniswebsite www.tennis.nl. Dat bleef
              ik voor anderhalf jaar op vrijwillige basis doen. In 2015 werd ik
              lid van een andere tennisvereniging, waar ik enkele redactionele
              artikelen voor schreef en redigeerde.
            </div>
          </div>
        </div>{" "}
        <div className="about-link">
          {" "}
          <Media
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1100px)",
              large: "(min-width: 1101px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <div>
                    {" "}
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/internationaltennis"
                          : "https://daanruijter.herokuapp.com/internationaltennis"
                      }
                    >
                      Internationale en nationale tennisartikelen
                      <br />
                    </a>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/localtennis"
                          : "https://daanruijter.herokuapp.com/localtennis"
                      }
                    >
                      Artikelen over mijn tennisvereniging <br />
                    </a>
                  </div>
                )}
                {matches.medium && (
                  <div>
                    {" "}
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/internationaltennis"
                          : "https://daanruijter.herokuapp.com/internationaltennis"
                      }
                    >
                      Internationale en nationale tennisartikelen <br />
                    </a>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/localtennis"
                          : "https://daanruijter.herokuapp.com/localtennis"
                      }
                    >
                      Klik hierop om tennisartikelen over mijn tennisvereniging
                      te lezen <br />
                    </a>
                  </div>
                )}
                {matches.large && (
                  <div>
                    {" "}
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/internationaltennis"
                          : "https://daanruijter.herokuapp.com/internationaltennis"
                      }
                    >
                      Klik hierop om internationale en nationale tennisartikelen
                      te lezen <br />
                    </a>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/localtennis"
                          : "https://daanruijter.herokuapp.com/localtennis"
                      }
                    >
                      Klik hierop om tennisartikelen over mijn tennisvereniging
                      te lezen <br />
                    </a>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>
        <div className="about-soccer-information">
          <h2>Voetbal</h2>
          <Media
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1100px)",
              large: "(min-width: 1101px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <div>
                    {" "}
                    <div className="about-soccer-text">
                      My passion for soccer came when I started to practice with
                      the ball at the square in front of my parents' house. That
                      was the start sign for me to go and play more and more. As
                      a coincidence, or maybe not, it was the period when Ajax
                      conquered the soccer world: the nineties. I went to the
                      ancient stadium "De Meer" on a regular base with my father
                      and uncle. My father at the time had an important role in
                      the fan policy of the club and in 1995 organized a big
                      congress to work towards a national fan policy. As a
                      little child of 10 years old I had the honour to open it.
                      <img
                        alt="Daan with Louis van Gaal"
                        src="http://daanruijter.eu/wp-content/uploads/2015/04/DSCF7251-Large.jpg"
                      ></img>
                      <div>
                        During my student time I exchanged the play square for
                        the hall. I started to play indoor soccer. Every sunday
                        morning I still play with a nice group in Amsterdam.
                        Besides that, many times I watch the matches of Ajax or
                        the Dutch national team with a group of friends.
                      </div>
                      <div>
                        After finishing my journalism degree I wanted to get
                        extra editorial experience. So I did an internship at
                        the Ajax news platform Ajax Showtime. I also wrote
                        articles for the local indoor soccer club FCZSW, owned
                        by a former colleague.
                      </div>
                    </div>{" "}
                  </div>
                )}
                {matches.medium && (
                  <div>
                    {" "}
                    <div className="about-soccer-text">
                      My passion for soccer came when I started to practice with
                      the ball at the square in front of my parents' house. That
                      was the start sign for me to go and play more and more. As
                      a coincidence, or maybe not, it was the period when Ajax
                      conquered the soccer world: the nineties. I went to the
                      ancient stadium "De Meer" on a regular base with my father
                      and uncle. My father at the time had an important role in
                      the fan policy of the club and in 1995 organized a big
                      congress to work towards a national fan policy. As a
                      little child of 10 years old I had the honour to open it.
                      <img
                        alt="Daan with Louis van Gaal"
                        src="http://daanruijter.eu/wp-content/uploads/2015/04/DSCF7251-Large.jpg"
                      ></img>
                      <div>
                        During my student time I exchanged the play square for
                        the hall. I started to play indoor soccer. Every sunday
                        morning I still play with a nice group in Amsterdam.
                        Besides that, many times I watch the matches of Ajax or
                        the Dutch national team with a group of friends.
                      </div>
                      <div>
                        After finishing my journalism degree I wanted to get
                        extra editorial experience. So I did an internship at
                        the Ajax news platform Ajax Showtime. I also wrote
                        articles for the local indoor soccer club FCZSW, owned
                        by a former colleague.
                      </div>
                    </div>{" "}
                  </div>
                )}
                {matches.large && (
                  <div>
                    {" "}
                    <div className="about-soccer-text">
                      {" "}
                      <img
                        alt="Daan with Louis van Gaal"
                        src="http://daanruijter.eu/wp-content/uploads/2015/04/DSCF7251-Large.jpg"
                      />
                      Mijn passie voor voetbal kwam toen ik met de bal begon te
                      oefenen op het plein voor mijn ouderlijk huis. Dit was
                      voor mij het startsein om almaar meer te gaan voetballen.
                      Toeval of niet was het in de periode waarin Ajax de
                      voetbalwereld veroverde: de jaren negentig. Ik ging
                      regelmatig met mijn oom en vader naar het oude stadion De
                      Meer. Mijn vader had destijds een belangrijke rol had in
                      het supportersbeleid van Ajax en organiseerde in 1995 een
                      groot congres "Naar een nationaal supportersbeleid". Ik
                      had de eer om als tienjarige jongen de bijeenkomst te
                      openen.
                      <br />
                      <br />
                      <div>
                        In mijn studententijd verruilde ik het speelplein voor
                        de zaal om te gaan zaalvoetballen. Nog steeds trap ik
                        elke zondagochtend in Amsterdam een balletje met een
                        fijne groep. Ook kijk ik zo nu en dan met vrienden
                        wedstrijden van Ajax of het Nederlands elftal.
                      </div>
                      <br />
                      <div>
                        Nadat ik mijn master journalistiek heb afgerond wilde ik
                        extra journalistieke ervaring opdoen. Daarom deed ik een
                        stage bij de Ajax-nieuwswebsite Ajaxshowtime.com. Ik
                        schreef ook artikelen voor de zaalvoetbalclub FCZSW,
                        waarvan de eigenaar een ex-collega is.
                      </div>{" "}
                    </div>{" "}
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>
        <div className="about-link">
          <Media
            queries={{
              small: "(max-width: 767px)",
              medium: "(min-width: 768px) and (max-width: 1100px)",
              large: "(min-width: 1101px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <div>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/ajax"
                          : "https://daanruijter.herokuapp.com/ajax"
                      }
                    >
                      Ajax-artikelen <br />
                    </a>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/localsoccer"
                          : "https://daanruijter.herokuapp.com/localsoccer"
                      }
                    >
                      FCZSW-artikelen <br />
                    </a>
                    <br />
                  </div>
                )}
                {matches.medium && (
                  <div>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/ajax"
                          : "https://daanruijter.herokuapp.com/ajax"
                      }
                    >
                      Klik hierop om enkele Ajax-arikelen te lezen <br />
                    </a>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/localsoccer"
                          : "https://daanruijter.herokuapp.com/localsoccer"
                      }
                    >
                      Klik hierop om enkele FCZSW-artikelen te lezen <br />
                    </a>
                  </div>
                )}
                {matches.large && (
                  <div>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/ajax"
                          : "https://daanruijter.herokuapp.com/ajax"
                      }
                    >
                      Klik hierop om enkele Ajax-arikelen te lezen <br />
                    </a>
                    <a
                      href={
                        dev
                          ? "http://localhost:3000/localsoccer"
                          : "https://daanruijter.herokuapp.com/localsoccer"
                      }
                    >
                      Klik hierop om enkele FCZSW-artikelen te lezen <br />
                    </a>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>
        {/*FLIPPING BOOK */}
        <div className="about-book-wrapper">
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
  }
}
