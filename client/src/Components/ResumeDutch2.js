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
    let contact = this.state.contact.map((contactItem) => {
      return (
        <div className="resume-contact-flexer">
          <div className="resume-contact-icon">
            <img src={contactItem.image} alt={contactItem.text} />
          </div>
          <div>
            <a href={contactItem.link}>{contactItem.text}</a>
          </div>
        </div>
      );
    });

    let technologies = this.state.techSkils.map((technologyItem) => {
      return (
        <div className="resume-tech-flexer">
          <div className="resume-tech">{technologyItem.technologyLeft}</div>
          <div>{technologyItem.technologyRight}</div>
        </div>
      );
    });

    let hobbysAndInterests = this.state.hobbysAndInterests.map(
      (hobbyAndInterestItem) => {
        return (
          <div className="resume-hobbies-interests-flexer">
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
          <div>
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
          <div>
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

    let languageCourses = this.state.languageCourses.map((language) => {
      return (
        <div>
          {" "}
          <ResumeJobinfoTemplate
            jobdate={language.jobdate}
            organisation={language.organisation}
          />
        </div>
      );
    });

    let languageLevelFlag = this.state.languageLevel.map((languageItem) => {
      return (
        <div className={languageItem.languageFlagClass}>
          <img
            src={languageItem.languageFlag}
            alt={languageItem.languageFlagClass}
          />
        </div>
      );
    });

    let languageLevelStar = this.state.languageLevel.map((languageItem) => {
      return (
        <div className={languageItem.languageStarClass}>
          <img
            src={languageItem.languageStar}
            alt={languageItem.languageStarClass}
          />
        </div>
      );
    });

    let otherActivities = this.state.otherActivities.map(
      (otherActivitiesItem) => {
        return (
          <div>
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
        <div className="resume-top">
          <div className="resume-english">
            {/* Hier gebleven */}
            {/* Hier gebleven */}
            {/* Hier gebleven */}
            <a href="http://localhost:3000/resume">English</a>
          </div>
          <div className="resume-dutch">
            <a href="http://localhost:3000/resume/dutch">Dutch</a>
          </div>
        </div>
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
              <li>Eager to learn</li>
              <li>Communicative</li>
              <li>Accurate</li>
              <li>Creative</li>
              <li>Analytical</li>
              <li>Perseverant</li>
            </ul>
          </div>
          {/* Tech Courses */}
          <h1 className="resume-leftside-header">Courses</h1>
          <div className="resume-courses-wrapper">
            <u>2019</u>
            <br />
            <strong>
              Online self study JavaScript through Code Academy and Scrimba:
            </strong>
            <ul>
              <li>
                Created a birthday invitation webpage with input form through
                Firebase database for reactions;
              </li>
              <li>Studied ‘Eloquent JavaScript’ from Marijn Haverbeke;</li>
              <li>
                Thoroughly studied the book ‘JavaScript’ from Peter Kassenaar.
              </li>
            </ul>
          </div>
          <div className="resume-courses-wrapper">
            <u>2015</u>
            <br />
            <strong>
              Self study HTML, CSS and JavaScript through online courses:
            </strong>
            <ul>
              <li>JavaScript - Khan Academy;</li>
              <li>HTML, CSS - Khan Academy;</li>
            </ul>
          </div>{" "}
          {/* Computer knowledge */}
          <h1 className="resume-leftside-header">Computer knowledge</h1>
          <div className="resume-computer-knowledge-wrapper">
            <ul>
              <li>Microsoft Office Suite</li>
              <li>Different content management systems</li>
            </ul>
          </div>
          {/* Hobbies/interests */}
          <h1 className="resume-leftside-header">Hobbies/interests</h1>
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
              Web development makes me very enthusiastic. The combination of
              analytical challenges, creativity and the international orien-
              tation of the profession makes it very rewarding. Moreover, it
              gives me the opportunity to continually develop myself, which I
              consider important for my career. Being interested in the
              structure of foreign languages and having worked as (web) editor
              before, coding is a logical extension of my capacities. I’m ready
              for a position in a motivating environment where I can learn more
              contribute to creating valuable web applications.{" "}
            </div>
          </div>

          <div className="resume-career-summary-heading">
            CAREER SUMMARY
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
                "Full-time onsite, with the Agile working methodology.",
                <br key={Math.random()} />,
                "I did projects on the base of learning-by-doing.",
              ]}
            />
            <br />
            <div className="resume-coding-projects">CODING PROJECTS </div>
            <br />
            <br />
            <a
              className="resume-project-links"
              href="https://myitinerariestravelapp.herokuapp.com/"
            >
              Mytinerary app (best viewed on a mobile device){" "}
            </a>
            <br />
            Travel application that shows touristy cities, itineraries and
            activities in those cities. Users can add the itineraries to their
            favourites. I set up the backend for this app with Node, Express and
            for the data MongoDB. For the frontend I used React,js, Redux,
            combining plain CSS and Materialize.
            <br />
            <a
              className="resume-project-links"
              href="       https://daanruijter.github.io/WeatherApp/"
            >
              <br />
              Weather app
            </a>
            <br />
            Weather app in Vue.js using the library Chart.js and a weather API.
            Users can look for a specific city. The app then displays the
            current weather for that particular location. Users can also select
            different weather data to generate forecast charts.
            <br />
            <br />
            <a
              className="resume-project-links"
              href="https://ruijterbookstoreapp.herokuapp.com/"
            >
              Bookstore app
            </a>
            <br />
            App that displays information about multiple books with my own
            RESTful API and a book dataset in the database MongoDB. The app has
            a search filter function.
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
            Website with information about the youth soccer competition NYSL,
            created with HTML and CSS. I used CSS FlexBox and Grid to position
            elements on several pages. I also applied CSS media queries for
            responsiveness.
            <br />
            <br />
            {/* RESUME JOB  */}
            {workExperiencePart1}
            <div
              onClick={this.showMoreExperience}
              className="resume-more-past-experience"
            >
              CLICK TO SEE MORE PAST EXPERIENCE
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
                  CLICK TO CLOSE MORE PAST EXPERIENCE
                </div>
              </div>
            ) : null}
            <br /> <br />
            <div className="resume-green-header">EDUCATION</div>
            <br />
            <ResumeJobinfoTemplate
              jobdate={"12/2019-03/2020 "}
              organisation={
                "Full Stack MERN Web development at Ubiqum Code Academy"
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
                    "Master of Journalism at the Vrije Universiteit in Amsterdam"
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
                  <h3>Master Thesis</h3>
                  For my journalism master I wrote a master thesis ‘But just
                  answer the question…!’ -a conversation analytical study
                  concerning question evasion tactics of the Dutch Prime
                  Ministers Ruud Lubbers, Wim Kok, Jan-Peter Balkenende and Mark
                  Rutte
                  <br />
                  If you can read Dutch, feel free to see my thesis.
                  <br />
                  <br />
                  You can open the thesis by clicking{" "}
                  <a href="http://daanruijter.eu/wp-content/uploads/2015/03/Maar-beantwoordt-u-nu-toch-eens-de-vraag-Masterscriptie-Journalistiek-Daan-Ruijter.pdf">
                    here
                  </a>
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
                    "Master of Economics at the Universiteit van Amsterdam"
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
                  <h3>Master Thesis</h3>
                  For my economics master I wrote a thesis about the research
                  question: ‘Is the United Kingdom ready to introduce the Euro?’
                  To answer that question I used the{" "}
                  <a href="https://en.wikipedia.org/wiki/Optimum_currency_area">
                    optimum currency area theory.
                  </a>{" "}
                  <br />
                  If you can read Dutch, feel free to see my thesis.
                  <br />
                  <br />
                  You can open the thesis by clicking{" "}
                  <a href="http://daanruijter.eu/wp-content/uploads/2015/03/Is-het-Verenigd-Koninkrijk-klaar-om-de-Euro-te-introduceren-Masterscriptie-Algemene-Economie-Daan-Ruijter.pdf">
                    here
                  </a>
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
                    "Bachelor of Economics at the Universiteit van Amsterdam"
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
                  <h3>Bachelor Thesis</h3>
                  For my economics bachelor I wrote a thesis about the economic
                  growth in China. The main question was: ‘What made it possible
                  that China’s economy grew so rapidly over the last decades?’
                  <br />
                  If you can read Dutch, feel free to see my thesis.
                  <br />
                  <br />
                  You can open the thesis by clicking{" "}
                  <a href="http://daanruijter.eu/wp-content/uploads/2020/05/China’s-economische-groei-Bachelorscriptie-Algemene-Economie-Daan-Ruijter.pdf">
                    here
                  </a>
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
            <br /> <div className="resume-green-header">ACHIEVEMENTS</div>
            <br />
            {/* BOOK INFO PART */}
            <ResumeJobinfoTemplate
              jobdate={"11/2011-03/2014"}
              organisation={"Camping de Duinvoet, Schoorl "}
              jobtitle={`Author`}
              description={[
                "Wrote a book about Camping de Duinvoet, a small campsite on the foothills of the Schoorl dunes",
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
                When I was a little child, my parents went to a small campsite
                'Camping de Duinvoet', which means 'campsite on the foothills of
                the dunes'. They liked the place, kept coming and got a good
                friendship with the owners Hans and Ria. I've enjoyed a part of
                my youth at this nice little campsite. Hans and Ria got older
                and in 2011 they got the chance to sell Camping de Duinvoet.{" "}
                <br />
                <br />
                They held a big goodbye party in a tent, on one of the fields.
                Then Hans came to me and to my surprise asked me to write a
                book. That was a honor and just done with my journalism study, I
                definitly wanted to do that.
                <br />
                <br />I wrote about the big decisions Hans and Ria needed to
                make to run Camping de Duinvoet, the anecdotes and good times of
                the campsite and the goodbye. I published the book in 2014.
                Hover over the book at the left side and click to see the book
                presentation.
                <br />
                <br />
                You can find pictures, stories and more information on the{" "}
                <br />
                <a href="https://www.facebook.com/Heeftunogplek">
                  Facebook page of the book.
                </a>
              </div>
            </div>
            <br />
            <div className="resume-green-header">LANGUAGE COURSES</div>
            <br />
            From 2009 I followed Spanish language courses in Barcelona, Valencia
            and Málaga and Italian courses in Amsterdam. In addition I often
            visit language meetups to practice languages and to meet new people.
            Being able to communicate with people, to read, write and listen in
            other languages is very stimulating for me. The IT world is
            internationally oriented, so I think my knowledge of foreign
            languages and interest in other cultures could be valuable.
            <div
              onClick={this.showLanguageCourses}
              className="resume-language-courses"
            >
              <br />
              CLICK TO SEE MY LANGUAGE COURSES <br /> <br />
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
                  <br /> CLICK TO CLOSE MY LANGUAGE COURSES
                </div>
              </div>
            ) : null}
            {/* OTHER COURSES */}
            <br /> <br />{" "}
            <div className="resume-green-header">OTHER COURSES</div>
            <br />
            <ResumeJobinfoTemplate
              jobdate={"01/2017-04/2017"}
              organisation={"Judith Koelemeijer, Amsterdam"}
              description={
                "Course in literary non fiction with the author Judith Koelemeijer"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"04/2018-07/2018"}
              organisation={"Speer Fotografie, Amsterdam"}
              description={"Photography course Speer Fotografie Amsterdam"}
            />
            <br />
            <br />
          </div>

          {/* OTHER ACTIVITIES PART */}

          <div className="resume-green-header">OTHER ACTIVITIES</div>
          <div className="resume-other-activities">{otherActivities}</div>
        </div>
        <div className="resume-bottom"></div>

        <div className="resume-right-line"></div>
      </div>
    );
  }
}

// {
//     jobdate: "09/2009-01/2010",
//     organisation: "Zaanradio, Koog aan de Zaan",
//     jobtitle: `Editor/Interviewer`,
//     description: [
//       "Editor/Interviewer for a program about local sports in 'the Zaanstreek', called 'Saensport Live'.",
//     ],
//   },
