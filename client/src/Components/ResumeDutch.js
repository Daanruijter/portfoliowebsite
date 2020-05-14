import React, { Component } from "react";
import "../CSS/Resume.css";
import ResumeJobinfoTemplate from "./ResumeJobinfoTemplate";
import daanfoto from "../pictures/daanfoto.jpeg";
import email from "../pictures/email.png";
import GitHub from "../pictures/GitHub.png";
import journalism from "../pictures/journalism.jpg";
import languages from "../pictures/languages.jpg";
import Linkedin from "../pictures/Linkedin.jpg";
import music from "../pictures/music.png";
import nature from "../pictures/nature.jpg";
import photography from "../pictures/photography.jpg";
import programming from "../pictures/programming.png";
import residence from "../pictures/residence.jpg";
import soccer from "../pictures/soccer.png";
import tabletennis from "../pictures/tabletennis.png";
import telephone from "../pictures/telephone.jpg";
import tennis from "../pictures/tennis.jpg";
import travelling from "../pictures/travelling.png";
import writing from "../pictures/writing.png";

export default class Resume extends Component {
  state = {
    moreExperienceOpen: false,
    studyType: false,
    languageCoursesOpen: false,
  };
  showMoreExperience = () => {
    this.setState({ moreExperienceOpen: !this.state.moreExperienceOpen });
  };
  closeMoreExperience = () => {
    this.setState({ moreExperienceOpen: false });
  };
  setStudyType = (studyType) => {
    this.setState({ studyType: studyType });
  };
  clearStudyType = () => {
    this.setState({ studyType: false });
  };
  showLanguageCourses = () => {
    this.setState({ languageCoursesOpen: !this.state.languageCoursesOpen });
  };
  closeLanguageCourses = () => {
    this.setState({ languageCoursesOpen: false });
  };

  render() {
    return (
      <div
        className={
          this.state.moreExperienceOpen && this.state.languageCoursesOpen
            ? "resume-wrapper-extralarge"
            : this.state.moreExperienceOpen
            ? "resume-wrapper-large"
            : this.state.languageCoursesOpen
            ? "resume-wrapper-large"
            : "resume-wrapper-small"
        }
      >
        <div className="resume-top">
          <div className="resume-english">
            <a href="http://localhost:3000/resume">English</a>
          </div>
          <div className="resume-dutch">
            <a href="http://localhost:3000/resume/dutch">Dutch</a>
          </div>
        </div>
        {/* left side */}
        <div className="resume-left">
          {/* contact */}
          <h1 className="resume-leftside-header">Contact</h1>
          <div className="resume-contact-wrapper">
            <div className="resume-contact-flexer">
              <div className="resume-contact-icon">
                <img src={telephone} alt="telephone" />
              </div>
              <div>0615178860</div>
            </div>
            <div className="resume-contact-flexer">
              <div className="resume-contact-icon">
                <img src={email} alt="email" />
              </div>
              <div>daan_ruijter@hotmail.com</div>{" "}
            </div>
            <div className="resume-contact-flexer">
              <div className="resume-contact-icon">
                <img src={Linkedin} alt="LinkedIn" />
              </div>
              <div>
                <a href="https://www.linkedin.com/in/daan-ruijter-b7514620">
                  in/daan-ruijter-b7514620
                </a>
              </div>
            </div>
            <div className="resume-contact-flexer">
              <div className="resume-contact-icon">
                <img src={GitHub} alt="GitHub" />
              </div>

              <a href="https://github.com/Daanruijter">
                <div>Daanruijter</div>
              </a>
            </div>
            <div className="resume-contact-flexer">
              <div className="resume-contact-icon">
                <img src={residence} alt="residence" />
              </div>
              <div> Amsterdam</div>
            </div>
          </div>{" "}
          {/* tech skills */}
          <h1 className="resume-leftside-header">Tech skills</h1>
          <div className="resume-tech-wrapper">
            <div className="resume-tech-flexer">
              <div className="resume-tech">HTML 5</div>
              <div>Vue.js</div>
            </div>
            <div className="resume-tech-flexer">
              <div className="resume-tech">CSS 3</div>
              <div>Chart.js</div>{" "}
            </div>
            <div className="resume-tech-flexer">
              <div className="resume-tech">Bootstrap</div>
              <div>MongoDB</div>
            </div>
            <div className="resume-tech-flexer">
              <div className="resume-tech">Materialize</div>

              <div>Git & GitHub</div>
            </div>
            <div className="resume-tech-flexer">
              <div className="resume-tech">JavaScript</div>
              <div> Express</div>
            </div>
            <div className="resume-tech-flexer">
              <div className="resume-tech">React.js</div>
              <div> Node</div>
            </div>
            <div className="resume-tech-flexer">
              <div className="resume-tech">Redux</div>
            </div>
          </div>
          {/* soft skills */}
          <h1 className="resume-leftside-header">Soft skills</h1>
          <div className="resume-soft-skills-wrapper">
            <ul>
              <li>Leergierig</li>
              <li>Communicatief</li>
              <li>Accuraat</li>
              <li>Creatief</li>
              <li>Analytisch</li>
              <li>Doorzetter</li>
            </ul>
          </div>
          {/* Tech Courses */}
          <h1 className="resume-leftside-header">Cursussen</h1>
          <div className="resume-courses-wrapper">
            <u>2019</u>
            <br />
            <strong>
              Online zelfstudie JavaScript via Code Academy and Scrimba:
            </strong>
            <ul>
              <li>
                Creëren van pagina voor verjaar- dagsuitnodiging met reactieveld
                gekoppeld aan de database Firebase;
              </li>
              <li>Bestuderen ‘Eloquent JavaScript’ van Marijn Haverbeke;</li>
              <li>
                Nauwgezet bestuderen van boek ‘JavaScript’ van Peter Kassenaar.
              </li>
            </ul>
          </div>
          <div className="resume-courses-wrapper">
            <u>2015</u>
            <br />
            <strong>
              Zelfstudie HTML, CSS en JavaScript via online cursussen:
            </strong>
            <ul>
              <li>JavaScript - Khan Academy;</li>
              <li>HTML, CSS - Khan Academy;</li>
            </ul>
          </div>{" "}
          {/* Computer knowledge */}
          <h1 className="resume-leftside-header">Computerkennis</h1>
          <div className="resume-computer-knowledge-wrapper">
            <ul>
              <li>Microsoft Office Suite</li>
              <li>Verschillende contentmanage- mentsystemen</li>
            </ul>
          </div>
          {/* Hobbies/interests */}
          <h1 className="resume-leftside-header">Hobby's/interesses</h1>
          <div className="resume-hobbies-interests-wrapper">
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={tennis} alt="tennis" />
              </div>
              <div>Tennis</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={tabletennis} alt="tabletennis" />
              </div>
              <div>Tafeltennis</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={soccer} alt="soccer" />
              </div>
              <div>Voetbal</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={programming} alt="programming" />
              </div>

              <div>Programmeren</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={writing} alt="writing" />
              </div>

              <div>Schrijven</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={languages} alt="languages" />
              </div>

              <div>Taal(uitwisselingen)</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={photography} alt="photography" />
              </div>
              <div>Fotografie</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={music} alt="music" />
              </div>

              <div>Muziek</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={travelling} alt="travelling" />
              </div>

              <div>Reizen</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={journalism} alt="journalism" />
              </div>

              <div>Journalistiek/Media</div>
            </div>
            <div className="resume-hobbies-interests-flexer">
              <div className="resume-hobbies-interests-icon">
                <img src={nature} alt="nature" />
              </div>

              <div>Natuur</div>
            </div>
          </div>
        </div>

        {/* right, main side */}
        <div className="resume-right">
          <div className="resume-name">DAAN LAURENTIUS RUIJTER</div>
          <div className="resume-profession"> FULL STACK WEB DEVELOPER </div>
          <div className="resume-daanfoto-wrapper">
            <img className="resume-daanfoto" src={daanfoto} alt="daanphoto" />
            <div className="resume-introduction">
              Webdevelopment maakt mij erg enthousiast. De combinatie van
              analytische uitdagingen, creativiteit en de internationale
              oriëntatie van het beroep spreken mij sterk aan. Het vak geeft me
              bovendien de mogelijkheid om me continu te on- twikkelen. Gezien
              mijn achtergrond als (web)redacteur en interesse in de structuur
              van vreemde talen is het een logische ontwikkeling in mijn
              carrière om me nu toe te leg- gen op programmeren. Ik begin dan
              ook graag aan een func- tie in een motiverende omgeving waar ik
              veel kan leren om zo bij te dragen aan waardevolle webapplicaties.
            </div>
          </div>

          <div className="resume-career-summary-heading">
            SAMENVATTING CARRIÈRE
            <br />
            <br />
            <br />
          </div>

          <div className="resume-career-summary-wrapper">
            <ResumeJobinfoTemplate
              jobdate={"12/2019-03/2020"}
              organisation={"Ubiqum Code Academy Amsterdam"}
              jobtitle={"Full Stack MERN web developer:"}
              description={[
                "Fulltime op locatie volgens de Agile-werkmethode.",
                <br key={Math.random()} />,
                "Werken aan projecten op basis van leren door te doen.",
              ]}
            />
            <br />
            <div className="resume-coding-projects">PROGRAMMEERPROJECTEN </div>
            <br />
            <br />
            <a
              className="resume-project-links"
              href="https://myitinerariestravelapp.herokuapp.com/"
            >
              Mytinerary app (voor de mobiele telefoon){" "}
            </a>
            <br />
            Reisapplicatie die toeristische steden, reisroutes en activiteiten
            in die steden toont. Ge- bruikers kunnen de reisroutes toevoegen aan
            hun favorieten. De backend voor deze app zette ik op met Node,
            Express en voor de data MongoDB. Voor de frontend gebruikte ik
            React,js, Redux en een combinatie van CSS en Materialize.
            <br />
            <a
              className="resume-project-links"
              href="       https://daanruijter.github.io/WeatherApp/"
            >
              <br />
              Weerapp
            </a>
            <br />
            Weerapplicatie in Vue.js, gebruikmakend van de bibliotheek Chart.js
            en een weer-API. Gebruikers kunnen zoeken op een bepaalde stad. De
            app vertoont dan het actuele weer voor deze locatie. Gebruikers
            kunnen ook verschillende weergegevens selecteren om grafieken met
            voorspellingen te genereren.
            <br />
            <br />
            <a
              className="resume-project-links"
              href="https://ruijterbookstoreapp.herokuapp.com/"
            >
              Bookstore app
            </a>
            <br />
            App die informatie over meerdere boeken vertoont met behulp van mijn
            eigen RESTful API en een boekendataset in de database MongoDB. De
            app heeft een zoekfunctie die de boeken filtert.
            <br />
            <br />
            <a
              className="resume-project-links"
              href="https://daanruijter.github.io/tgifVUEtodeploy/index.html"
            >
              TGIF: Transparent Government In Fact
            </a>
            <br />
            Webapplicatie in Vue.js die data rond vertegenwoordigers van het
            Amerikaanse parle- ment en de senaat vertoont. De gegevens komen van
            een API en zijn bewerkt om ze op dynamische wijze te kunnen tonen.
            Dit project hielp mij om mijn code efficiënter en vol- gens de
            standaard van de sector te schrijven.
            <br />
            <a
              className="resume-project-links"
              href="https://daanruijter.github.io/soccerproject"
            >
              <br />
              NYSL: North Youth League Soccer website
            </a>
            <br />
            Website met informatie over de jeugdvoetbalcompetitie NYSL,
            gecreëerd met HTML en CSS. Daarbij gebruikte ik op een aantal
            pagina’s CSS FlexBox en Grid om elementen te positioneren. Ook paste
            ik CSS-mediaregels toe om de website responsive te maken.
            <br />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"09/2013-06/2019"}
              organisation={"Rodi Media, Purmerend"}
              jobtitle={"Redacteur"}
              description={`Redigeren en publiceren van diverse lokale nieuws- en webartikelen,
              waarbij nauwkeurigheid vereist was. Voor de interviews die ik hield
              met adverteerders en nieuwswaardige personen was het nodig om te
              beschikken over goede luister- en communicatiecapaciteiten.`}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"01/2014-09/2015"}
              organisation={"TENNiS.nl, Sassenheim"}
              jobtitle={`Webredacteur (vrijwillig):`}
              description={`Schrijven en publiceren van verschillende nieuwsartikelen over
              professionele nationale en internationale tenniswedstrijden.              `}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"12/2012-04/2013"}
              organisation={"Valkering Media, Amsterdam"}
              jobtitle={`Stage als webredacteur bij de website Ajax Showtime:`}
              description={`(Her)schrijven van artikelen over Ajax en voetbal in het algemeen               `}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"07/2012-11/2012"}
              organisation={"Internetonderneming User.nl, Purmerend"}
              jobtitle={`Stage marketingafdeling:`}
              description={`Ontwikkelen van een mediaplan om meer zichtbaarheid voor het
              bedrijf te genereren
              `}
            />
            <br></br>
            <div
              onClick={this.showMoreExperience}
              className="resume-more-past-experience"
            >
              KLIK HIER OM MEER EERDERE ERVARINGEN TE ZIEN
            </div>
            {this.state.moreExperienceOpen ? (
              <div>
                <br />{" "}
                <ResumeJobinfoTemplate
                  jobdate={"12/2014-03/2019"}
                  organisation={"InDutch/Flowently, Amsterdam"}
                  jobtitle={`Tutor/Taalcoach:`}
                  description={[
                    "Met expats, immigranten, studenten en toeristen de Nederlandse taal oefenen tijdens verschillende typen oefensessies, bijvoorbeeld in een café;",
                    <br />,
                    "Ontwikkelen van de speciale sessie ‘Met Daan naar de Zaan’:Nederlands oefenen tijdens een bezoek op de Zaanse Schans (Zaandam)",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"05/2012-04/2013"}
                  organisation={"Hilton Meats, Zaandam"}
                  jobtitle={`Projectassistent`}
                  description={[
                    "Schrijven van procedures en werkvoorschriften op het gebied van veiligheid en Arbo;",
                    <br />,
                    "Schrijven filmscript over veiligheid en hygiëne voor nieuwkomers op het werk;",
                    <br />,
                    "Redigeren en aanvullen van het personeelshandboek;",
                    <br />,
                    "Verwerken van gegevens met het database-/gegevensverwerkingsprogramma Ultimo;",
                    <br />,
                    "Adviseren van collega’s over hun scripties voor hun cursus Middelbaar Veiligheidskundige en redigeren van deze scripties",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"03/2012-05/2012"}
                  organisation={"BaanStede"}
                  jobtitle={`Stagiair afdeling marketing & communicatie, Purmerend`}
                  description={[
                    "Allerlei zaken die te maken hebben met de marketing en communicatie:",
                    <br />,
                    "Redigeren van de nieuwe website en (missende) content documenteren en aanvragen bij bedrijfsleiders;",
                    <br />,
                    "Plan voor continu aanleveren van content maken;",
                    <br />,
                    "Plan voor herindelen en verbetering intranet maken",
                    <br />,
                    "Instructiemap schrijven voor het project Alfacheque (=hulp bij Huishouden);",
                    <br />,
                    "Artikelen schrijven en redigeren voor interne blad ‘De BaanStedeling’;",
                    <br />,
                    "Betrokken bij introductie sociale media voor BaanStede;",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"06/2009-07/2009"}
                  organisation={"Hilton Meats, Zaandam"}
                  jobtitle={`Vertaler`}
                  description={[
                    "Machineprotocollen van Nederlands naar Engels vertalen",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"09/2007-03/2008"}
                  organisation={"Sandd, Zaandam"}
                  jobtitle={`Mail carrier`}
                  description={["Carried mail"]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"07/2006-08/2006"}
                  organisation={
                    "Technical and Tactical Soccer Clinics, Loveland, Ohio, USA"
                  }
                  jobtitle={`Assistent bij voetbalclinics`}
                  description={[
                    "Assisteren bij het geven van voetbalclinics aan jongeren in de leeftijd van 6-16",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"02/2002-12/2002"}
                  organisation={"Kaasboerderij Catharina Hoeve, Zaandam"}
                  jobtitle={`Verkoopmedewerker`}
                  description={[
                    "Kassawerkzaamheden",
                    <br />,
                    "Aanvullen van de schappen",
                  ]}
                />
                <br />
                <div
                  onClick={this.closeMoreExperience}
                  className="resume-more-past-experience"
                >
                  KLIK HIER OM EERDERE ERVARINGEN TE SLUITEN
                </div>
              </div>
            ) : null}
            <br /> <br />
            <div className="resume-green-header">OPLEIDING</div>
            <br />
            <ResumeJobinfoTemplate
              jobdate={"12/2019-03/2020 "}
              organisation={
                "Full Stack MERN Web development bij Ubiqum Code Academy"
              }
            />
            <br />
            {/* MASTER OF JOURNALISM PART */}
            <div
              className="resume-master-journalism"
              onMouseEnter={() => this.setStudyType("masterJournalism")}
              onMouseLeave={this.clearStudyType}
            >
              <div
                style={
                  this.state.studyType === "masterJournalism"
                    ? { backgroundColor: "khaki" }
                    : null
                }
              >
                <ResumeJobinfoTemplate
                  jobdate={"09/2008-11/2011"}
                  organisation={
                    "Master Journalistiek aan de Vrije Universiteit in Amsterdam"
                  }
                />
                <br />
              </div>
            </div>
            {/* MASTER OF JOURNALISM MORE INFO PART */}
            {this.state.studyType === "masterJournalism" ? (
              <div
                onMouseEnter={() => this.setStudyType("masterJournalism")}
                className="resume-master-economics-more-info "
              >
                <div className="resume-master-journalism-thesis">
                  <h3>Masterscriptie</h3>
                  Voor mijn Master Journalistiek schreef ik de masterscriptie
                  ‘Maar beantwoordt u nou eens de vraag…!’-een
                  conversatieanalytisch onderzoek met betrekking tot
                  vraagontwijkend antwoordgedrag van de Nederlandse
                  minister-presidenten Ruud Lubbers, Wim Kok, Jan-Peter
                  Balkenende en Mark Rutte'
                  <br />
                  <br />
                  De scriptie is te openen door{" "}
                  <a href="http://daanruijter.eu/wp-content/uploads/2015/03/Maar-beantwoordt-u-nu-toch-eens-de-vraag-Masterscriptie-Journalistiek-Daan-Ruijter.pdf">
                    hier
                  </a>{" "}
                  te klikken
                </div>
                <br />{" "}
                <img
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/VoorkantMasterscriptiejournalistiek.jpg"
                  alt="front-master-thesis-journalism"
                ></img>
              </div>
            ) : null}
            <div
              className="resume-master-journalism"
              onMouseEnter={() => this.setStudyType("masterEconomics")}
            >
              {/* MASTER OF ECONOMICS PART */}
              <div
                style={
                  this.state.studyType === "masterEconomics"
                    ? { backgroundColor: "khaki" }
                    : null
                }
              >
                <ResumeJobinfoTemplate
                  jobdate={"09/2005-07/2007"}
                  organisation={
                    "Master Algemene Economie aan de Universiteit van Amsterdam"
                  }
                />

                <br />
              </div>
              {/* MASTER OF ECONOMICS MORE INFO PART */}
            </div>
            {this.state.studyType === "masterEconomics" ? (
              <div
                onMouseEnter={() => this.setStudyType("masterEconomics")}
                className="resume-master-economics-more-info"
              >
                <img
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/Daanontvangtmasterbuleconomie.jpg"
                  alt="receiving-economics-masters-degree"
                ></img>
                <div className="resume-master-economics-thesis">
                  <h3>Masterscriptie</h3>
                  Voor mijn Master Algemene Economie schreef ik een scriptie
                  over de onderzoeksvraag: ‘Is het Verenigd Koninkrijk klaar om
                  de Euro in te voeren?’ Ter beantwoording van deze vraag
                  gebruikte ik de{" "}
                  <a href="https://en.wikipedia.org/wiki/Optimum_currency_area">
                    theorie van het optimale valutagebied.
                  </a>{" "}
                  <br />
                  <br />
                  De scriptie is te openen door{" "}
                  <a href="http://daanruijter.eu/wp-content/uploads/2015/03/Is-het-Verenigd-Koninkrijk-klaar-om-de-Euro-te-introduceren-Masterscriptie-Algemene-Economie-Daan-Ruijter.pdf">
                    hier
                  </a>{" "}
                  te klikken
                </div>
                <br />{" "}
              </div>
            ) : null}
            {/* BACHELOR OF ECONOMICS PART */}
            <div
              style={
                this.state.studyType === "bachelorEconomics"
                  ? { backgroundColor: "khaki" }
                  : null
              }
            >
              <div
                className="resume-bachelor-economics"
                onMouseEnter={() => this.setStudyType("bachelorEconomics")}
                onMouseLeave={this.clearStudyType}
              >
                <ResumeJobinfoTemplate
                  jobdate={"09/2002-09/2005"}
                  organisation={
                    "Bachelor Algemene Economie aan de Universiteit van Amsterdam"
                  }
                />
                <br />
              </div>
            </div>
            {/* BACHELOR OF ECONOMICS MORE INFO PART */}
            {this.state.studyType === "bachelorEconomics" ? (
              <div
                onMouseEnter={() => this.setStudyType("bachelorEconomics")}
                onMouseLeave={() => this.clearStudyType()}
                className="resume-bachelor-economics-more-info"
              >
                <div className="resume-bachelor-economics-thesis">
                  <h3>Bachelorscriptie</h3>
                  Voor mijn Bachelor Algemene Economie schreef ik een scriptie
                  over de economische groei in China. De onderzoeksvraag was:
                  ‘Hoe is het mogelijk dat China de afgelopen decennia
                  economisch zo sterk is gegroeid?’
                  <br />
                  <br />
                  De scriptie is te openen door{" "}
                  <a href="http://daanruijter.eu/wp-content/uploads/2020/05/China’s-economische-groei-Bachelorscriptie-Algemene-Economie-Daan-Ruijter.pdf">
                    hier
                  </a>{" "}
                  te klikken
                </div>
                <img
                  src="http://daanruijter.eu/wp-content/uploads/2015/04/Hoge-gebouwen-China.jpg"
                  alt="receiving-economics-masters-degree"
                ></img>
                <br />{" "}
              </div>
            ) : null}
            <ResumeJobinfoTemplate
              jobdate={"08/1996-06/2002"}
              organisation={
                "Gymnasium met Latijn en Grieks aan Het Zaanlands Lyceum"
              }
            />
            <br />{" "}
            <div className="resume-green-header">BIJZONDERE PRESTATIES</div>
            <br />
            {/* BOOK INFO PART */}
            <ResumeJobinfoTemplate
              jobdate={"11/2011-03/2014"}
              organisation={"Camping de Duinvoet, Schoorl "}
              jobtitle={`Auteur`}
              description={[
                "Schrijven van een boek over Camping de Duinvoet, een kleine camping aan de voet van de Schoorlse duinen",
              ]}
            />
            <br />
            {/*FLIPPING BOOK */}
            <div className="resume-book-wrapper">
              <div className="resume-flip-box">
                <div className="resume-flip-box-inner">
                  <div className="resume-book-front resume-flip-box-front">
                    <img
                      alt="book-front"
                      src={
                        "http://daanruijter.eu/wp-content/uploads/2015/04/Heeft-u-nog-plek.jpg"
                      }
                    />
                  </div>

                  <div className="resume-flip-box-back">
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

              <div className="resume-book-more-info">
                Toen ik klein was, gingen mijn ouders naar 'Camping de
                Duinvoet', Ze genoten er, bleven komen en bouwden een goede
                vriendschap op met de eigenaars Hans en Ria. Ik bracht een deel
                van mijn jeugd op de kleine, gezellige camping door. Hans en Ria
                werden ouder en in 2011 kregen ze de kans om Camping de Duinvoet
                te verkopen.
                <br />
                <br />
                Ze hielden een groot afscheidsfeest in een tent op een van de
                terreinen van de camping. Ineens kwam Hans naar me toe met een
                bijzondere vraag. Of ik een boek wilde schrijven. Dat was
                natuurlijk een grote eer. Ik was net klaar met mijn
                journalistiekstudie en had hier erg veel zin in.
                <br />
                <br />
                Ik schreef over de pittige beslissingen die Hans en Ria moesten
                nemen om de camping te kunnen starten en bestieren. Over de
                anekdotes en de goede tijden op Camping de Duinvoet, maar ook
                over het afscheid. Het boek is in 2014 gepubliceerd. Zie de
                boekpresentatie door met de muis over het boek te gaan.
                <br />
                <br />
                Plaatjes, verhalen en meer informatie over het boek op de <br />
                <a href="https://www.facebook.com/Heeftunogplek">
                  Facebook-pagina.
                </a>
              </div>
            </div>
            <br />
            <div className="resume-green-header">TAALCURSUSSEN</div>
            <br />
            Vanaf 2009 volgde ik diverse talencursussen: Spaans in Barcelona,
            Valencia en Málaga en Italiaans in Amsterdam. Daarbij bezoek ik
            regelmatig taalmeetups om mijn talen te oefenen en nieuwe mensen te
            ontmoeten. Kunnen communiceren met mensen en in staat zijn om te
            lezen, schrijven en luisteren in andere talen motiveert mij enorm om
            te blijven schaven aan mijn talenkennis. De IT-wereld is
            internationaal georiënteerd, dus ik denk dat deze vaar- digheden en
            mijn interesse in andere culturen van waarde kunnen zijn.
            <div
              onClick={this.showLanguageCourses}
              className="resume-language-courses"
            >
              <br />
              KLIK OM MIJN TAALCURSUSSEN TE ZIEN
              <br /> <br />
            </div>
            {this.state.languageCoursesOpen ? (
              <div className="resume-language-courses-list">
                <ResumeJobinfoTemplate
                  jobdate={"08/2009"}
                  organisation={
                    "Spaanse taalcursus in Barcelona, B1-niveau bij CaminoBarcelona (2 weken);"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"09/2010-06/2011"}
                  organisation={
                    "Cursus Italiaans A2-niveau bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"09/2011-06/2012"}
                  organisation={
                    "Cursus Italiaans B1-niveau bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"01/2012-02/2012"}
                  organisation={
                    "Cursus vertalen Italiaans bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"09/2012-06-2013"}
                  organisation={
                    "Cursus Italiaans B1+-niveau bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"09/2013-04/2014"}
                  organisation={
                    "Cursus Italiaans B2-niveau bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"09/2014-03/2015"}
                  organisation={
                    "Cursus Italiaans B2+-niveau bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"09/2015-03/2016"}
                  organisation={
                    "Cursus Italiaans C1-niveau bij Studiolingua, Amsterdam;"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"11/2016"}
                  organisation={
                    "Cursus Spaans in Valencia, B1 en B2-niveau bij Costa de Valencia (2 weken)"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"10/2017-11/2017"}
                  organisation={
                    "Cursus Spaans in Málaga, B2-niveau bij Cile (3 weken);"
                  }
                />
                <ResumeJobinfoTemplate
                  jobdate={"11/2018"}
                  organisation={
                    "Cursus Spaans in Málaga, B2-niveau bij Instituto Picasso (3 weken)."
                  }
                />{" "}
                <div className="resume-language-level-wrapper">
                  <div className="resume-dutch-flag">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg"
                      alt="dutch"
                    />
                  </div>
                  <div className="resume-british-flag">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg"
                      alt="english"
                    ></img>
                  </div>
                  <div className="resume-french-flag">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/french-flag-large.jpg"
                      alt="french"
                    ></img>
                  </div>
                  <div className="resume-italian-flag">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/italian-flag-large.jpg"
                      alt="italian"
                    ></img>
                  </div>
                  <div className="resume-spanish-flag">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/spanish-flag-large.jpg"
                      alt="spanish"
                    ></img>
                  </div>
                  <div className="resume-german-flag">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/german-flag-large.png"
                      alt="german"
                    ></img>
                  </div>

                  <div className="resume-dutch-star">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/Vijf-sterren.gif"
                      alt="dutch"
                    ></img>{" "}
                  </div>
                  <div className="resume-british-star">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif"
                      alt="english"
                    ></img>{" "}
                  </div>
                  <div className="resume-french-star">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif"
                      alt="french"
                    ></img>{" "}
                  </div>
                  <div className="resume-italian-star">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif"
                      alt="italian"
                    ></img>{" "}
                  </div>
                  <div className="resume-spanish-star">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif"
                      alt="spanish"
                    ></img>{" "}
                  </div>
                  <div className="resume-german-star">
                    <img
                      src="http://daanruijter.eu/wp-content/uploads/2015/04/Drie-sterren.gif"
                      alt="german"
                    ></img>{" "}
                  </div>
                </div>
                <div
                  onClick={this.closeLanguageCourses}
                  className="resume-language-courses"
                >
                  <br /> KLIK OM MIJN TAALCURSSUSEN TE SLUITEN
                </div>
              </div>
            ) : null}
            {/* OTHER COURSES */}
            <br /> <br />{" "}
            <div className="resume-green-header">ANDERE CURSUSSEN</div>
            <br />
            <ResumeJobinfoTemplate
              jobdate={"01/2017-04/2017"}
              organisation={"Judith Koelemeijer, Amsterdam"}
              description={
                "Cursus Literaire non-fictie o.l.v. schrijfster Judith Koelemeijer"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"04/2018-07/2018"}
              organisation={"Speer Fotografie, Amsterdam"}
              description={"Fotografiecursus Speer Fotografie Amsterdam"}
            />
            <br />
            <br />
          </div>

          {/* OTHER ACTIVITIES PART */}
          <div className="resume-green-header">ANDERE ACTIVITEITEN</div>
          <div className="resume-other-activities">
            <br />
            <ResumeJobinfoTemplate
              jobdate={"08/2007-06/2008"}
              organisation={"Tennisvereniging De Balk, Zaandam"}
              description={
                "Redacteur van het clubblad bij Tennisvereniging de Balk, Zaandam;"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"10/2009-01/2010"}
              organisation={"Zaanradio, Koog aan de Zaan"}
              description={
                "Redacteur/interviewer bij het sportprogramma Saensport Life van lokale zender Zaanradio (Zaandam & omstreken);"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"04/2012-12/2013"}
              organisation={"Tennisplanet"}
              description={
                "Schrijven van uiteenlopende artikelen en nieuwsberichten over de tennissport voor de websites www.tennishome.nl en www.tennisinfo.be van Tennisplanet;"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"01/2014-present"}
              organisation={
                "FCZSW, Krommenie en Tennisvereniging De Gouw, Zaandam"
              }
              description={
                "Verrichten van redactionele activiteiten voor de Zaanse zaalvoetbalvereniging FCZSW/Lekkervroeg.nl (onder meer publiceren van een magazine voor de club) en de Zaanse Tennisvereniging De Gouw"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"10/2014-heden"}
              organisation={"Mijzelf"}
              description={"Redigeren van masterscripties"}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"05/2017"}
              organisation={"Gemeentearchief Zaanstad"}
              description={
                "Cursus Zelf geschiedenis schrijven Gemeentearchief Zaanstad o.l.v. Mirjam Janssen"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"2006"}
              organisation={"GroenLinks Zaanstad"}
              description={`Vrijwilligerswerk: in de periode rondom de gemeenteraadsverkiezingen van 2006 heb ik voor GroenLinks Zaanstad in de ‘Werkgroep Leefbare Wijken’ gezeten. Doel van deze werkgroep was het contact met de burger te leggen om problemen in Zaanse wijken aan te kaarten bij de gemeenteraad`}
            />
          </div>
        </div>
        <div className="resume-bottom"></div>

        <div className="resume-right-line"></div>
      </div>
    );
  }
}
