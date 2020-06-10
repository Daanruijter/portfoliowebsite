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
import { connect } from "react-redux";

class ResumeDutch extends Component {
  state = {
    moreExperienceOpen: false,
    studyType: false,
    languageCoursesOpen: false,
    contact: [
      {
        image: telephone,
        text: "0615178860",
        link: null,
      },
      { image: email, text: "daan_ruijter@hotmail.com", link: null },
      {
        image: Linkedin,
        text: "in/daan-ruijter-b7514620",
        link: "https://www.linkedin.com/in/daan-ruijter-b7514620",
      },
      {
        image: GitHub,
        text: "Daanruijter",
        link: "https://github.com/Daanruijter",
      },
      {
        image: residence,
        text: "Amsterdam",
        link: null,
      },
    ],
    techSkils: [
      { technologyLeft: "HTML 5", technologyRight: "Vue.js" },
      { technologyLeft: "CSS 3", technologyRight: "Chart.js" },
      { technologyLeft: "Bootstrap", technologyRight: "MongoDB" },
      { technologyLeft: "Materialize", technologyRight: "Git & GitHub" },
      { technologyLeft: "JavaScript", technologyRight: "Express" },
      { technologyLeft: "React.js", technologyRight: "Node" },
      { technologyLeft: "Redux", technologyRight: null },
    ],
    hobbysAndInterests: [
      { image: tennis, text: "Tennis" },
      { image: tabletennis, text: "Tafeltennis" },
      { image: soccer, text: "Voetbal" },
      { image: programming, text: "Programmeren" },
      { image: writing, text: "Schrijven" },
      { image: languages, text: "Taal(uitwisselingen)" },
      { image: photography, text: "Fotografie" },
      { image: music, text: "Muziek" },
      { image: travelling, text: "Reizen" },
      { image: journalism, text: "Journalistiek/Media" },
      { image: nature, text: "Natuur" },
    ],
    workExperience: [
      {
        jobdate: "09/2013-06/2019",
        organisation: "Rodi Media, Purmerend",
        jobtitle: "Redacteur",
        description: `Redigeren en publiceren van diverse lokale nieuws- en webartikelen, waarbij nauwkeurigheid vereist was. Voor de interviews die ik hield met adverteerders en nieuwswaardige personen was het nodig om te beschikken over goede luister- en communicatiecapaciteiten.`,
      },
      {
        jobdate: "01/2014-09/2015",
        organisation: "TENNiS.nl, Sassenheim",
        jobtitle: `Webredacteur (vrijwillig):`,
        description: `Schrijven en publiceren van verschillende nieuwsartikelen over professionele nationale en internationale tenniswedstrijden.`,
      },
      {
        jobdate: "12/2012-04/2013",
        organisation: "Valkering Media, Amsterdam",
        jobtitle: `Stage als webredacteur bij de website Ajax Showtime:`,
        description: `(Her)schrijven van artikelen over Ajax en voetbal in het algemeen
        `,
      },
      {
        jobdate: "07/2012-11/2012",
        organisation: "Internetonderneming User.nl, Purmerend",
        jobtitle: `Stage marketingafdeling:        `,
        description: `Ontwikkelen van een mediaplan om meer zichtbaarheid voor het bedrijf te genereren`,
      },
      {
        jobdate: "12/2014-03/2019",
        organisation: "InDutch/Flowently, Amsterdam",
        jobtitle: `Tutor/Taalcoach:`,
        description: [
          `Met expats, immigranten, studenten en toeristen de Nederlandse taal oefenen tijdens verschillende typen oefensessies, bijvoorbeeld in een café;`,
          <br />,
          `Ontwikkelen van de speciale sessie ‘Met Daan naar de Zaan’:Nederlands oefenen tijdens een bezoek op de Zaanse Schans (Zaandam)`,
        ],
      },
      {
        jobdate: "05/2012-04/2013",
        organisation: "Hilton Meats, Zaandam",
        jobtitle: `Projectassistent`,
        description: [
          "Redigeren en aanvullen van het personeelshandboek;",
          <br />,
          "Schrijven van procedures en werkvoorschriften op het gebied van veiligheid en Arbo;",
          <br />,
          "Schrijven filmscript over veiligheid en hygiëne voor nieuwkomers op het werk;",
          <br />,
          "Verwerken van gegevens met het database-/gegevensverwerkingsprogramma Ultimo;",
          <br />,
          "Adviseren van collega’s over hun scripties voor hun cursus Middelbaar Veiligheidskundige en redigeren van deze scripties",
        ],
      },
      {
        jobdate: "03/2012-05/2012",
        organisation: "BaanStede",
        jobtitle: `Stagiair afdeling marketing & communicatie, Purmerend
        `,
        description: [
          `Allerlei zaken die te maken hebben met de marketing en communicatie:
          ;`,
          <br />,
          `Redigeren van de nieuwe website en (missende) content documenteren en aanvragen bij bedrijfsleiders;
          ;`,
          <br />,
          `Plan voor continu aanleveren van content maken;
          ;`,
          <br />,
          `Plan voor herindelen en verbetering intranet maken
          ;`,
          <br />,
          `Instructiemap schrijven voor het project Alfacheque (=hulp bij Huishouden);
          ;`,
          <br />,
          `Artikelen schrijven en redigeren voor interne blad ‘De BaanStedeling’;
          ;`,
          <br />,
          `Betrokken bij introductie sociale media voor BaanStede;
          ;`,
        ],
      },
      {
        jobdate: "06/2009-07/2009",
        organisation: "Hilton Meats, Zaandam",
        jobtitle: `Vertaler
        `,
        description: ["Machineprotocollen van Nederlands naar Engels vertalen"],
      },
      {
        jobdate: "09/2007-03/2008",
        organisation: "Sandd, Zaandam",
        jobtitle: `Postbezorger`,
        description: ["Bezorgen van post"],
      },
      {
        jobdate: "07/2006-08/2006",
        organisation:
          "Technical and Tactical Soccer Clinics, Loveland, Ohio, USA",
        jobtitle: `Assistent bij voetbalclinics
        `,
        description: [
          "Assisteren bij het geven van voetbalclinics aan jongeren in de leeftijd van 6-16",
        ],
      },
      {
        jobdate: "02/2002-12/2002",
        organisation: "Kaasboerderij Catharina Hoeve, Zaandam",
        jobtitle: `Verkoopmedewerker
        `,
        description: [
          "Kassawerkzaamheden",
          <br />,
          "Aanvullen van de schappen",
        ],
      },
    ],
    languageCourses: [
      {
        jobdate: "08/2009",
        organisation:
          "Spaanse taalcursus in Barcelona, B1-niveau bij CaminoBarcelona (2 weken);",
      },
      {
        jobdate: "09/2010-06/2011",
        organisation: "Cursus Italiaans A2-niveau bij Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2011-06/2012",
        organisation: "Cursus Italiaans B1-niveau bij Studiolingua, Amsterdam;",
      },
      {
        jobdate: "01/2012-02/2012",
        organisation: "Cursus vertalen Italiaans bij Studiolingua, Amsterdam",
      },
      {
        jobdate: "09/2012-06-2013",
        organisation: "Cursus Italiaans B1+-niveau bij Studiolingua, Amsterdam",
      },
      {
        jobdate: "09/2013-04/2014",
        organisation: "Cursus Italiaans B2-niveau bij Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2014-03/2015",
        organisation:
          "Cursus Italiaans B2+-niveau bij Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2015-03/2016",
        organisation: "Cursus Italiaans C1-niveau bij Studiolingua, Amsterdam;",
      },
      {
        jobdate: "11/2016",
        organisation:
          "Cursus Spaans in Valencia, B1 en B2-niveau bij Costa de Valencia (2 weken)",
      },
      {
        jobdate: "10/2017-11/2017",
        organisation: "Cursus Spaans in Málaga, B2-niveau bij Cile (3 weken);",
      },
      {
        jobdate: "11/2018",
        organisation:
          "Cursus Spaans in Málaga, B2-niveau bij Instituto Picasso (3 weken).",
      },
    ],
    languageLevel: [
      {
        languageFlag:
          "http://daanruijter.eu/wp-content/uploads/2015/04/dutch-flag-large.jpg",
        languageFlagClass: "resume-dutch-flag",
        languageStar:
          "http://daanruijter.eu/wp-content/uploads/2015/04/Vijf-sterren.gif",
        languageStarClass: "resume-dutch-star",
      },

      {
        languageFlag:
          "http://daanruijter.eu/wp-content/uploads/2015/04/british-flag-large.jpg",
        languageFlagClass: "resume-british-flag",
        languageStar:
          "http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif",
        languageStarClass: "resume-british-star",
      },
      {
        languageFlag:
          "http://daanruijter.eu/wp-content/uploads/2015/04/french-flag-large.jpg",
        languageFlagClass: "resume-french-flag",

        languageStar:
          "http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif",
        languageStarClass: "resume-french-star",
      },
      {
        languageFlag:
          "http://daanruijter.eu/wp-content/uploads/2015/04/italian-flag-large.jpg",
        languageFlagClass: "resume-italian-flag",
        languageStar:
          "http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif",
        languageStarClass: "resume-italian-star",
      },
      {
        languageFlag:
          "http://daanruijter.eu/wp-content/uploads/2015/04/spanish-flag-large.jpg",
        languageFlagClass: "resume-spanish-flag",
        languageStar:
          "http://daanruijter.eu/wp-content/uploads/2015/04/Vier-sterren.gif",
        languageStarClass: "resume-spanish-star",
      },
      {
        languageFlag:
          "http://daanruijter.eu/wp-content/uploads/2015/04/german-flag-large.png",
        languageFlagClass: "resume-german-flag",
        languageStar:
          "http://daanruijter.eu/wp-content/uploads/2015/04/Drie-sterren.gif",
        languageStarClass: "resume-german-star",
      },
    ],
    otherActivities: [
      {
        jobdate: "08/2007-06/2008",
        organisation: "Tennisvereniging De Balk, Zaandam",
        description:
          "Redacteur van het clubblad bij Tennisvereniging de Balk, Zaandam;",
      },
      {
        jobdate: "10/2009-01/2010",
        organisation: "Zaanradio, Koog aan de Zaan",
        description:
          "Redacteur/interviewer bij het sportprogramma Saensport Life van lokale zender Zaanradio (Zaandam & omstreken);",
      },
      {
        jobdate: "04/2012-12/2013",
        organisation: "Tennisplanet",
        description:
          "Schrijven van uiteenlopende artikelen en nieuwsberichten over de tennissport voor de websites www.tennishome.nl en www.tennisinfo.be van Tennisplanet;",
      },
      {
        jobdate: "01/2014-heden",
        organisation: "FCZSW, Krommenie en Tennisvereniging De Gouw, Zaandam",
        description:
          "Verrichten van redactionele activiteiten voor de Zaanse zaalvoetbalvereniging FCZSW/Lekkervroeg.nl (onder meer publiceren van een magazine voor de club) en de Zaanse Tennisvereniging De Gouw",
      },
      {
        jobdate: "10/2014-heden",
        organisation: "Mijzelf",
        description: "Redigeren van masterscripties",
      },
      {
        jobdate: "05/2017",
        organisation: "Gemeentearchief Zaanstad",
        description:
          "Cursus Zelf geschiedenis schrijven Gemeentearchief Zaanstad o.l.v. Mirjam Janssen",
      },
      {
        jobdate: "2006",
        organisation: "GroenLinks Zaanstad",
        description: `Vrijwilligerswerk: in de periode rondom de gemeenteraadsverkiezingen van 2006 heb ik voor GroenLinks Zaanstad in de ‘Werkgroep Leefbare Wijken’ gezeten. Doel van deze werkgroep was het contact met de burger te leggen om problemen in Zaanse wijken aan te kaarten bij de gemeenteraad
        `,
      },
    ],
  };

  componentDidMount() {
    this.setState({ english: this.props.languages.english });
    this.setState({ dutch: this.props.languages.dutch });
  }
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
    let contact = this.state.contact.map((contactItem, index) => {
      return (
        <div key={index} className="resume-contact-flexer">
          <div className="resume-contact-icon">
            <img src={contactItem.image} alt={contactItem.text} />
          </div>
          <div>
            <a href={contactItem.link}>{contactItem.text}</a>
          </div>
        </div>
      );
    });

    let technologies = this.state.techSkils.map((technologyItem, index) => {
      return (
        <div key={index} className="resume-tech-flexer">
          <div className="resume-tech">{technologyItem.technologyLeft}</div>
          <div>{technologyItem.technologyRight}</div>
        </div>
      );
    });

    let hobbysAndInterests = this.state.hobbysAndInterests.map(
      (hobbyAndInterestItem, index) => {
        return (
          <div key={index} className="resume-hobbies-interests-flexer">
            <div className="resume-hobbies-interests-icon">
              <img
                src={hobbyAndInterestItem.image}
                alt={hobbyAndInterestItem.text}
              />
            </div>
            <div>{hobbyAndInterestItem.text}</div>
          </div>
        );
      }
    );

    let workExperiencePart1 = this.state.workExperience.map(
      (workExperienceItem, index) => {
        return index < 4 ? (
          <div key={index}>
            {" "}
            <ResumeJobinfoTemplate
              jobdate={workExperienceItem.jobdate}
              organisation={workExperienceItem.organisation}
              jobtitle={workExperienceItem.jobtitle}
              description={workExperienceItem.description}
            />
            <br />
          </div>
        ) : null;
      }
    );
    let workExperiencePart2 = this.state.workExperience.map(
      (workExperienceItem, index) => {
        return index > 3 ? (
          <div key={index}>
            {" "}
            <ResumeJobinfoTemplate
              jobdate={workExperienceItem.jobdate}
              organisation={workExperienceItem.organisation}
              jobtitle={workExperienceItem.jobtitle}
              description={workExperienceItem.description}
            />
            <br />
          </div>
        ) : null;
      }
    );

    let languageCourses = this.state.languageCourses.map((language, index) => {
      return (
        <div key={index}>
          {" "}
          <ResumeJobinfoTemplate
            jobdate={language.jobdate}
            organisation={language.organisation}
          />
        </div>
      );
    });

    let languageLevelFlag = this.state.languageLevel.map(
      (languageItem, index) => {
        return (
          <div key={index} className={languageItem.languageFlagClass}>
            <img
              src={languageItem.languageFlag}
              alt={languageItem.languageFlagClass}
            />
          </div>
        );
      }
    );

    let languageLevelStar = this.state.languageLevel.map(
      (languageItem, index) => {
        return (
          <div key={index} className={languageItem.languageStarClass}>
            <img
              src={languageItem.languageStar}
              alt={languageItem.languageStarClass}
            />
          </div>
        );
      }
    );

    let otherActivities = this.state.otherActivities.map(
      (otherActivitiesItem, index) => {
        return (
          <div key={index}>
            {" "}
            <ResumeJobinfoTemplate
              jobdate={otherActivitiesItem.jobdate}
              organisation={otherActivitiesItem.organisation}
              jobtitle={null}
              description={otherActivitiesItem.description}
            />
            <br />
          </div>
        );
      }
    );

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
        <div className="resume-top"></div>
        {/* left side */}
        <div className="resume-left">
          <h1 className="resume-leftside-header">Contact</h1>
          <div className="resume-contact-wrapper">
            {/* RESUME CONTACT FLEXER */} {contact}
            {/* RESUME CONTACT FLEXER */}
          </div>{" "}
          {/* tech skills */}
          <h1 className="resume-leftside-header">Tech skills</h1>
          <div className="resume-tech-wrapper">
            {/* RESUME TECH FLEXER */}
            {technologies}

            {/* RESUME TECH FLEXER */}
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
              Online zelfstudie JavaScript via Code Academy and Scrimba: :
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
              <li>Verschillende contentmanagementsystemen</li>
            </ul>
          </div>
          {/* Hobbies/interests */}
          <h1 className="resume-leftside-header">Hobby's/interesses</h1>
          <div className="resume-hobbies-interests-wrapper">
            {" "}
            {/* RESUME HOBBIES INTERESTS WRAPPER */}
            {hobbysAndInterests}
            {/* RESUME HOBBIES INTERESTS WRAPPER */}
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
              bovendien de mogelijkheid om me continu te ontwikkelen. Gezien
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
              Boekenwinkelapp
            </a>
            <br />
            App die informatie over meerdere boeken vertoont met behulp van mijn
            eigen RESTful API en een boekendataset in de database MongoDB. De
            app heeft een zoekfunctie die de boeken filtert.
            <br />
            <a
              className="resume-project-links"
              href="https://daanruijter.github.io/tgifVUEtodeploy/index.html"
            >
              <br />
              TGIF: Transparent Government In Fact
            </a>
            <br />
            Created a website using Vanilla JavaScript that dynamically shows
            API data of the US Congress and Senate. The data come from an API
            and are processed to display them dy- namically. The project helped
            to improve my capacities to refactor code and to adhere to industry
            convention.
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
            {/* RESUME JOB  */}
            {workExperiencePart1}
            <div
              onClick={this.showMoreExperience}
              className="resume-more-past-experience"
            >
              KLIK HIER OM MEER EERDERE ERVARINGEN TE ZIEN
            </div>{" "}
            <br />
            {this.state.moreExperienceOpen ? (
              <div>
                {workExperiencePart2}
                <br /> {}
                <div
                  onClick={this.closeMoreExperience}
                  className="resume-more-past-experience"
                >
                  KLIK HIER OM MEER EERDERE ERVARINGEN TE ZIEN
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
                    "Master Journalism aan de Vrije Universiteit in Amsterdam"
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
                  </a>
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
                  </a>
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
                  </a>
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
                "Gymnasium with Latin and Greek at Het Zaanlands Lyceum"
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
                te verkopen. <br />
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
            internationaal georiënteerd, dus ik denk dat deze vaardigheden en
            mijn interesse in andere culturen van waarde kunnen zijn.
            <div
              onClick={this.showLanguageCourses}
              className="resume-language-courses"
            >
              <br />
              KLIK OM MIJN TAALCURSUSSEN TE ZIEN <br /> <br />
            </div>
            {/* HIER GEBLEVEN */}
            {this.state.languageCoursesOpen ? (
              <div className="resume-language-courses-list">
                {languageCourses}

                <div className="resume-language-level-wrapper">
                  {" "}
                  {languageLevelFlag}
                  {languageLevelStar}
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
          <div className="resume-other-activities">{otherActivities}</div>
        </div>
        <div className="resume-bottom"></div>

        <div className="resume-right-line"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};
export default connect(mapStateToProps, null)(ResumeDutch);

// {
//     jobdate: "09/2009-01/2010",
//     organisation: "Zaanradio, Koog aan de Zaan",
//     jobtitle: `Editor/Interviewer`,
//     description: [
//       "Editor/Interviewer for a program about local sports in 'the Zaanstreek', called 'Saensport Live'.",
//     ],
//   },
