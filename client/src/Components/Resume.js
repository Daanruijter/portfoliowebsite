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
import ResumeDutch from "./ResumeDutch";

class Resume extends Component {
  state = {
    closeOrOpenArray: [],
    studyType: false,
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
      { technologyLeft: "HTML 5", technologyRight: "Redux" },
      { technologyLeft: "CSS 3", technologyRight: "Chart.js" },
      { technologyLeft: "Bootstrap", technologyRight: "MongoDB" },
      { technologyLeft: "Materialize", technologyRight: "Git & GitHub" },
      { technologyLeft: "JavaScript", technologyRight: "Express" },
      { technologyLeft: "React.js", technologyRight: "Node" },
      { technologyLeft: "Vue.js", technologyRight: "FireBase" },
      { technologyLeft: "Angular.js", technologyRight: "RESTful APIs" },
      { technologyLeft: "TypeScript", technologyRight: "Agile/Scrum" },
    ],
    hobbysAndInterests: [
      { image: tennis, text: "Tennis" },
      { image: tabletennis, text: "Table tennis" },
      { image: soccer, text: "Soccer" },
      { image: programming, text: "Programming" },
      { image: writing, text: "Writing" },
      { image: languages, text: "Language (exchanges)" },
      { image: photography, text: "Photography" },
      { image: music, text: "Music" },
      { image: travelling, text: "Travelling" },
      { image: journalism, text: "Journalism/Media" },
      { image: nature, text: "Nature" },
    ],
    workExperience: [
      {
        jobdate: "09/2013-06/2019",
        organisation: "Rodi Media, Purmerend",
        jobtitle: "Editor",
        description: `Edited 
    and published various local news and web articles with a high degree of accuracy. The interviews I did with advertisers and other stakeholders required good listening and communication               
      skills.`,
      },
      {
        jobdate: "01/2014-09/2015",
        organisation: "TENNiS.nl, Sassenheim",
        jobtitle: `Web editor (voluntary):`,
        description: `Wrote and published different news articles about professional,
      national and international tennis matches.`,
      },
      {
        jobdate: "12/2012-04/2013",
        organisation: "Valkering Media, Amsterdam",
        jobtitle: `Internship as an editor,
      for the website Ajax Showtime:`,
        description: `(Re)wrote articles about Ajax and
      soccer in general 07/2012-11/2012 Internet company User.nl,
      Purmerend Internship marketing department: Developed a media plan to
      create more company visibility
      `,
      },
      {
        jobdate: "07/2012-11/2012",
        organisation: "Internet company User.nl, Purmerend",
        jobtitle: `Internship marketing department:`,
        description: `Developed a media plan to create more company visibility
      `,
      },
      {
        jobdate: "12/2014-03/2019",
        organisation: "InDutch/Flowently, Amsterdam",
        jobtitle: `Tutor/Language coach:`,
        description: [
          "Practiced the Dutch language with expats, immigrants, students and tourists.",
          <br key={Math.random()} />,
          "Developed a special practice session: practicing Dutch during a visit to the Zaanse Schans (Zaandam).",
        ],
      },
      {
        jobdate: "05/2012-04/2013",
        organisation: "Hilton Meats, Zaandam",
        jobtitle: `Project assistent`,
        description: [
          "Checked manuals and protocols on content and language errors;",
          <br key={Math.random()} />,
          "Introduced protocols regarding health and safety at work;",
          <br key={Math.random()} />,
          "   Produced a new scene for the Hilton Safety Film which is made for new personnel;",
          <br key={Math.random()} />,
          "Processed data with the database/data processing program Ultimo;",
          <br key={Math.random()} />,
          "  Advised colleagues about their theses for their ‘Middelbaar Veiligheidskundige’(a safety class) course and edited those theses",
        ],
      },
      {
        jobdate: "03/2012-05/2012",
        organisation: "BaanStede",
        jobtitle: `Internship Communication & Marketing department BaanStede, Purmerend`,
        description: [
          "Activities concerning communication and marketing of BaanStede.;",
          <br key={Math.random()} />,
          "Edited the new website (correcting textual, language and layout errors, finding dead links and looking for missing content);",
          <br key={Math.random()} />,
          "Made a plan for a continuous delivery of (missing) content;",
          <br key={Math.random()} />,
          "Made a plan to reclassify and improve the intranet environment;",
          <br key={Math.random()} />,
          "Wrote an instruction for the project ‘Alfacheque’ (help in housekeeping);",
          <br key={Math.random()} />,
          "Did interviews and wrote articles for the internal magazine BaanStedeling;",
          <br key={Math.random()} />,
          "With the team and the external internet company User.nl assisted in setting up Social Media for BaanStede;",
        ],
      },
      {
        jobdate: "09/2009-01/2010",
        organisation: "Zaanradio, Koog aan de Zaan",
        jobtitle: `Editor/Interviewer`,
        description: [
          "Editor/Interviewer for a program about local sports in 'the Zaanstreek', called 'Saensport Live'.",
        ],
      },
      {
        jobdate: "06/2009-07/2009",
        organisation: "Hilton Meats, Zaandam",
        jobtitle: `Translator`,
        description: ["Translated machine protocols from Dutch to English"],
      },
      {
        jobdate: "09/2007-03/2008",
        organisation: "Sandd, Zaandam",
        jobtitle: `Mail carrier`,
        description: ["Carried mail"],
      },
      {
        jobdate: "07/2006-08/2006",
        organisation:
          "Technical and Tactical Soccer Clinics, Loveland, Ohio, USA",
        jobtitle: `Soccer clinics assistant`,
        description: [
          "Assisted with soccer clinics for children in the age of 6-14",
        ],
      },
      {
        jobdate: "02/2002-12/2002",
        organisation: "Kaasboerderij Catharina Hoeve, Zaandam",
        jobtitle: `Shop assistant`,
        description: ["Worked the register", <br key={Math.random()} />, "Restocked the shelves"],
      },
    ],
    languageCourses: [
      {
        jobdate: "08/2009",
        organisation:
          "Spanish course in Barcelona, B1 level at CaminoBarcelona (2 weeks);",
      },
      {
        jobdate: "09/2010-06/2011",
        organisation: "Italian course A2 level at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2011-06/2012",
        organisation: "Italian course B1 level at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "01/2012-02/2012",
        organisation: "Italian translation course at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2012-06-2013",
        organisation: "Italian course B1+ level at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2013-04/2014",
        organisation: "Italian course B2 level at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2014-03/2015",
        organisation: "Italian course B2+ level at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "09/2015-03/2016",
        organisation: "Italian course C1 level at Studiolingua, Amsterdam;",
      },
      {
        jobdate: "11/2016",
        organisation:
          "Spanish course in Valencia, B1 and B2 level at Costa de Valencia (2 weeks);",
      },
      {
        jobdate: "10/2017-11/2017",
        organisation: "Spanish course in Málaga, B2 level at Cile (3 weeks);",
      },
      {
        jobdate: "11/2018",
        organisation:
          "Spanish course in Málaga, B2 level at Instituto Picasso (3 weken)",
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
          "Editor of the club magazine at Tennis Club de Balk, Zaandam;",
      },
      {
        jobdate: "10/2009-01/2010",
        organisation: "Zaanradio, Koog aan de Zaan",
        description:
          "Every two weeks active as an editor/interviewer with the sports program Saensport Life from the local broadcasterZaanradio (Zaandam & region);",
      },
      {
        jobdate: "04/2012-12/2013",
        organisation: "Tennisplanet",
        description:
          "Writing different articles and news items about the sport of tennis for the web sites www.tennishome.nl andwww.tennisinfo.be of Tennisplanet;",
      },
      {
        jobdate: "01/2014-present",
        organisation: "FCZSW, Krommenie and Tennis club De Gouw, Zaandam",
        description:
          "Active as an editor for the ‘Zaanse’ futsal club FCZSW (among other things publishing a club magazine) and the ‘Zaanse’ Tennis club De Gouw",
      },
      {
        jobdate: "10/2014-present",
        organisation: "Myself",
        description: "Editing of master theses",
      },
      {
        jobdate: "05/2017",
        organisation: "Gemeentearchief Zaanstad",
        description:
          "Course 'Zelf geschiedenis schrijven Gemeentearchief Zaanstad' (writing about history at the community archive) with Mirjam Janssen",
      },
      {
        jobdate: "2006",
        organisation: "GroenLinks Zaanstad",
        description: `Volunteer work: in anticipation of the council elections in 2006
      I’ve participated in the “Working Group Quality of Lives in
      Quarters” for Groenlinks Zaanstad, the regional department of this
      political party. Goal of the working group was to come into contact
      with the citizen in order to notice problems in quarters in Zaanstad
      and to report them to the council.`,
      },
    ],
    projectInformation: [{
      title: "World News App",
      techStack: "Vue.js | TypeScript | Express.js | Node.js | RESTful APIs | HTML5 | CSS3",
      description: `This app presents the world news to a user. The app has a functionality enabling users to
      get news data from an API to get their preferred news. They can search on countries, categories and randomly. The data come from the NewsAPI.`,
      url: "https://worldnews-app.herokuapp.com/"
    },
    {
      title: "Mytinerary app",
      techStack: "React.js | Node.js | Express | MongoDB | Redux | RESTful APIs | HTML5 | CSS3 | Materialize",
      description: `Travel application that shows touristy cities, itineraries and activities in those cities. Users
      can add the itineraries to their favourites. The app is secured with authentication through
      Json Web Tokens (JWT). Therefore users can use certain functionalities only when they
      are logged in. It concerns the option to add itineraries to their favourites and the possibility to comment on activities at itineraries`,
      url: "https://myitinerariestravelapp.herokuapp.com"
    }, {
      title: "Weather app",
      techStack: "Vue.js | Chart.js | RESTful APIs | HTML5 | CSS3",
      description: `Weather app, making use of the library Chart.js and a weather API to display weather
      information. Users can look for a specific city. The app then displays the current weather
      for that particular location. Users can also select different weather data to generate forecast charts.`,
      url: "https://daanruijter.github.io/WeatherApp/"
    }, {
      title: "Ganzenbord",
      techStack: "Java",
      description: `Commandline version of the Dutch board game Ganzenbord. Players can enter their
      names and then play this game through the terminal, throwing their digital dice.`,
      url: "https://github.com/Daanruijter/GanzenbordJava"
    }, {
      title: "TGIF: Transparent Government In Fact",
      techStack: "Vue.js | RESTful APIs | HTML5 | CSS3 | Bootstrap4",
      description: `Web app that dynamically shows API data of the US Congress and Senate. The data
      come from the ProPublica Congress API and are processed to display them dynamically.
      The project helped to improve my capacities to refactor code and to adhere to industry
      convention. An important technique behind this app was to generate tables dynamically.`,
      url: "https://daanruijter.github.io/tgifVUEtodeploy/index.html"
    }, {
      title: "Personal website",
      techStack: "React.js | Node.js | Express | MongoDB | Redux | RESTful APIs | HTML5 | CSS3",
      description: `Personal website with my projects, a digital resume and several articles of my
      previous career as an editor.`,
      url: "http://daanruijter.herokuapp.com"
    }, {
      title: "Todo app ",
      techStack: "Angular.js | TypeScript | RESTful APIs | HTML5 | CSS3 | SASS",
      description: `App created with an Angular.js tutorial. A user can create a todo list by adding items and
      also has the opportunity to remove them. The data come from JSON placeholder, a fake
      online RESTful API for testing and prototyping.`,
      url: "https://github.com/Daanruijter/todoAppAngular"
    }, {
      title: "Grocery store list",
      techStack: `TypeScript | React.js | Node.js | Express | MongoDB | Redux | RESTful APIs |
      HTML5 | CSS3`,
      description: `Digital grocery store list. With a user interface users can add grocery items, modify, remove them and indicate whether they have picked an item.`,
      url: "https://github.com/Daanruijter/groceryList"
    }, {
      title: "Book store app",
      techStack: "Vue.js | Node.js | Express.js | MongoDB | RESTful APIs | HTML5 | CSS3 | Bootstrap4",
      description: `Upp that displays information about multiple books with my own RESTful UPI and a
      book dataset in the database MongoDB. The app also has a search function that filters out
      books on the base of a user’s input.`,
      url: "https://ruijterbookstoreapp.herokuapp.com"
    }, {
      title: "NYSL: North Youth League Soccer website",
      techStack: "HTML5 | CSS3",
      description: `Website with information about the fictional US youth soccer competition NYSL, created with HTML and CSS. To position elements on several pages, CSS FlexBox and
      Grid are used. CSS media queries are applied for responsiveness.`,
      url: "daanruijter.github.io/soccerproject"
    }

    ]
  };


  open = (itemToOpen) => {
    if (!this.state.closeOrOpenArray.includes(itemToOpen)) {
      this.setState({ closeOrOpenArray: [...this.state.closeOrOpenArray, itemToOpen] });
    }

    const arrayCopy = [...this.state.closeOrOpenArray]
    const index = arrayCopy.indexOf(itemToOpen)

    if (index !== -1) {
      arrayCopy.splice(index, 1);
      this.setState({ closeOrOpenArray: arrayCopy });
    }
  };

  close = (itemToClose) => {

    const arrayCopy = [...this.state.closeOrOpenArray]
    const index = arrayCopy.indexOf(itemToClose)

    if (index !== -1) {
      arrayCopy.splice(index, 1);
      this.setState({ closeOrOpenArray: arrayCopy });
    }
  };
  setStudyType = (studyType) => {
    this.setState({ studyType: studyType });
  };
  clearStudyType = () => {
    this.setState({ studyType: false });
  };

  render() {
    let contact = this.state.contact.map((contactItem) => {
      return (
        <div key={contactItem.text} className="resume-contact-flexer">
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
        <div key={technologyItem.technologyLeft} className="resume-tech-flexer">
          <div className="resume-tech">{technologyItem.technologyLeft}</div>
          <div key={technologyItem.technologyRight}>
            {technologyItem.technologyRight}
          </div>
        </div>
      );
    });

    let hobbysAndInterests = this.state.hobbysAndInterests.map(
      (hobbyAndInterestItem) => {
        return (
          <div
            key={hobbyAndInterestItem.text}
            className="resume-hobbies-interests-flexer"
          >
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
          <div key={otherActivitiesItem.organisation}>
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

    let projects = this.state.projectInformation.map(
      (project) => {
        return (
          <div key={project.title}>
            <a
              className="resume-project-links"
              href={project.url}
            >
              {project.title}
            </a>
            <br />
            {project.techStack}
            <br /><br />
            {project.description}
            <br />
            <br />
            <br />
          </div>
        );
      }
    );

    let resumeEnglish = (
      <div
        className="resume-wrapper"
      // {
      //   this.state.moreExperienceOpen && this.state.languageCoursesOpen
      //     ? "resume-wrapper-extralarge"
      //     : this.state.moreExperienceOpen
      //     ? "resume-wrapper-large"
      //     : this.state.languageCoursesOpen
      //     ? "resume-wrapper-large"
      //     : "resume-wrapper-small"
      // }
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
              {" "}
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
              jobdate={"4/2020-current"}
              organisation={"Myself"}
              jobtitle={
                "Full Stack MERN web developer at Myself, open to new opportunities. JavaScript | React.js | Vue.js | Angular.js | Node.js"
              }
              description={[
                `Working on various projects, among other things my personal
                website, a world news app, commandline game, digital grocery
                list and a todo app`, <br/>, `Everything is visible on my `,
                <a key={Math.random()} href="https://github.com/Daanruijter/">
                  GitHub page.
                </a>,
              ]}
            />
            <br />
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
            <br />{" "}
            <div className="resume-coding-projects">CODING PROJECTS </div>
            <br />
            <br />
            {/* PROJECT DESCRIPTIONS */}
            <div>{projects}</div>



            <div
              onClick={() => this.open("previousWorkExperience")}
              className="resume-open"
            >
              OTHER EXPERIENCES
            </div>{" "}
            {this.state.closeOrOpenArray.includes("previousWorkExperience") ? (
              <div>
                <br />
                {/* RESUME JOB  */}
                {workExperiencePart1}
                {workExperiencePart2}
                <div

                  onClick={() => this.close("previousWorkExperience")}
                  className="resume-close"
                >
                  close previous work experience
                </div><hr />
              </div>
            ) : null}
            <br />

            <div onClick={() => this.open("education")} className="resume-open">EDUCATION</div>
            {this.state.closeOrOpenArray.includes("education") ? (<div>
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
                      ? { color: "coral" }
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
                      ? { color: "coral" }
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
                    ? { color: "coral" }
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
              <div className="resume-close" onClick={() => this.close("education")} ><br />close education <hr /></div>
              {" "}</div>) : null}<br />
            <div className="resume-open" onClick={() => this.open("achievements")}>ACHIEVEMENTS</div>
            <br />
            {this.state.closeOrOpenArray.includes("achievements") ? (<div>
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
              <div className="resume-book-and-bookinfo-wrapper">
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


                  <br />

                </div><br />
                <div className="resume-book-know-more">

                  <br />
          Pictures, stories and more information on the book on the {" "}
                  <a href="https://www.facebook.com/Heeftunogplek">
                    Facebook page.
          </a>
                </div><br />
                <div onClick={() => this.close("achievements")} className="resume-close">close achievements</div><hr /><br /></div></div>) : null}

                <div className="resume-open"
              onClick={() => this.open("languageCourses")}

            >
           LANGUAGE COURSES    <br /><br />
            </div>
            {this.state.closeOrOpenArray.includes("languageCourses") ? (
           <div className="resume-language-courses-list">
            From 2009 I followed Spanish language courses in Barcelona, Valencia
            and Málaga and Italian courses in Amsterdam. In addition I often
            visit language meetups to practice languages and to meet new people.
            Being able to communicate with people, to read, write and listen in
            other languages is very stimulating for me. The IT world is
            internationally oriented, so I think my knowledge of foreign
            languages and interest in other cultures could be valuable.
            <br /><br />

<div>{languageCourses}</div><br />

<div className="resume-language-level-wrapper">
  {" "}
  {languageLevelFlag}
  {languageLevelStar}
                </div>
                <div
                  onClick={() => this.close("languageCourses")}
                  className="resume-close"
                >
                  <br /> close language courses
                </div><hr /><br />
              </div>
            ) : null}
            {/* OTHER COURSES */}
            {" "}
            <div className="resume-open"
              onClick={() => this.open("otherCourses")}>OTHER COURSES</div>
            <br />
            {this.state.closeOrOpenArray.includes("otherCourses") ? (<div>
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

<div className="resume-close" onClick={() => this.close("otherCourses")}>close other courses<hr /></div><br />
</div>) : null}</div>

          {/* OTHER ACTIVITIES PART */}

       
          <div onClick={() => this.open("otherActivities")} className="resume-open">OTHER ACTIVITIES</div><br />

          {this.state.closeOrOpenArray.includes("otherActivities") ? <div className="resume-other-activities">{otherActivities}
            <div className="resume-close" onClick={() => this.close("otherActivities")}>close other activities<hr /></div>
          </div> : null}</div>
        <div className="resume-bottom"></div>

        <div className="resume-right-line"></div>
      </div>
    );

    let resumeDutch = (
      <div>
        <ResumeDutch />
      </div>
    );
    if (
      this.props.languages.english === "english" ||
      this.props.languages.english === "nodutch"
    ) {
      return resumeEnglish;
    }
    if (
      this.props.languages.dutch === "dutch" ||
      this.props.languages.english === "noenglish"
    ) {
      return resumeDutch;
    }
    return <div>test</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};
export default connect(mapStateToProps, null)(Resume);
