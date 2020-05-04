import React, { Component } from "react";
import "../CSS/Resume.css";
import ResumeJobinfoTemplate from "./ResumeJobinfoTemplate";

import daanfoto from "../pictures/daanfoto.jpeg";

export default class Resume extends Component {
  state = { moreExperienceOpen: false, studyType: false };
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

  render() {
    return (
      <div
        className={
          this.state.moreExperienceOpen
            ? "resume-wrapper-large"
            : "resume-wrapper-small"
        }
      >
        <div className="resume-top"></div>
        <div className="resume-left"></div>
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
              href="https://daanruijter.github.io/tgifVUEtodeploy/index.html"
            >
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
            <ResumeJobinfoTemplate
              jobdate={"09/2013-06/2019"}
              organisation={"Rodi Media, Purmerend"}
              jobtitle={"Editor"}
              description={`Edited 
              and published various local news and web articles with a high degree of accuracy. The interviews I did with advertisers and other stakeholders required good listening and communication               
                skills.`}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"01/2014-09/2015"}
              organisation={"TENNiS.nl, Sassenheim"}
              jobtitle={`Web editor (voluntary):`}
              description={`Wrote and published different news articles about professional
              national and international tennis matches.              `}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"12/2012-04/2013"}
              organisation={"Valkering Media, Amsterdam"}
              jobtitle={`Internship as an editor
              for the website Ajax Showtime:`}
              description={`(Re)wrote articles about Ajax and
              soccer in general 07/2012-11/2012 Internet company User.nl,
              Purmerend Internship marketing department: Developed a media plan to
              create more company visibility
              `}
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"07/2012-11/2012"}
              organisation={"Internet company User.nl, Purmerend"}
              jobtitle={`Internship marketing department:`}
              description={`Developed a media plan to create more company visibility
              `}
            />
            <br></br>
            <div
              onClick={this.showMoreExperience}
              className="resume-more-past-experience"
            >
              CLICK TO SEE MORE PAST EXPERIENCE
            </div>
            {this.state.moreExperienceOpen ? (
              <div>
                <br />{" "}
                <ResumeJobinfoTemplate
                  jobdate={"12/2014-03/2019"}
                  organisation={"InDutch/Flowently, Amsterdam"}
                  jobtitle={`Tutor/Language coach:`}
                  description={[
                    "Practiced the Dutch language with expats, immigrants, students and tourists.",
                    <br />,
                    "Developed a special practice session: practicing Dutch during a visit to the Zaanse Schans (Zaandam).",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"05/2012-04/2013"}
                  organisation={"Hilton Meats, Zaandam"}
                  jobtitle={`Project assistent`}
                  description={[
                    "Checked manuals and protocols on content and language errors;",
                    <br />,
                    "Introduced protocols regarding health and safety at work;",
                    <br />,
                    "   Produced a new scene for the Hilton Safety Film which is made for new personnel;",
                    <br />,
                    "Processed data with the database/data processing program Ultimo;",
                    <br />,
                    "  Advised colleagues about their theses for their ‘Middelbaar Veiligheidskundige’(a safety class) course and edited those theses",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"03/2012-05/2012"}
                  organisation={"BaanStede"}
                  jobtitle={`Internship Communication & Marketing department BaanStede, Purmerend`}
                  description={[
                    "Activities concerning communication and marketing of BaanStede.;",
                    <br />,
                    "Edited the new website (correcting textual, language and layout errors, finding dead links and looking for missing content);",
                    <br />,
                    "Made a plan for a continuous delivery of (missing) content;",
                    <br />,
                    "Made a plan to reclassify and improve the intranet environment;",
                    <br />,
                    "Wrote an instruction for the project ‘Alfacheque’ (help in housekeeping);",
                    <br />,
                    "Did interviews and wrote articles for the internal magazine BaanStedeling;",
                    <br />,
                    "With the team and the external internet company User.nl assisted in setting up Social Media for BaanStede;",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"09/2009-01/2010"}
                  organisation={"Zaanradio, Koog aan de Zaan"}
                  jobtitle={`Editor/Interviewer`}
                  description={[
                    "Editor/Interviewer for a program about local sports in 'the Zaanstreek', called 'Saensport Live'.",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"06/2009-07/2009"}
                  organisation={"Hilton Meats, Zaandam"}
                  jobtitle={`Translator`}
                  description={[
                    "Translated machine protocols from Dutch to English",
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
                  jobtitle={`Soccer clinics assistant`}
                  description={[
                    "Assisted with soccer clinics for children in the age of 6-14",
                  ]}
                />
                <br />
                <ResumeJobinfoTemplate
                  jobdate={"02/2002-12/2002"}
                  organisation={"Kaasboerderij Catharina Hoeve, Zaandam"}
                  jobtitle={`Shop assistant`}
                  description={[
                    "Worked the register",
                    <br />,
                    "Restocked the shelves",
                  ]}
                />
                <br />
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
                ssssssssssssssssssssss sssssssssss sssssssssss ss ss ss ss ss
                ssssssssssssssssssssss
              </div>
            </div>
            <br />
            <div className="resume-green-header">LANGUAGE COURSES</div>
            <br />
            From 2009 I followed Spanish language courses in Barcelona, Valencia
            and Málaga and Italian courses in Amsterdam. In addition I often
            visit language meetups to practice lan- guages and to meet new
            people. Being able to communicate with people, to read, write and
            listen in other languages is very stimulating for me. The IT world
            is internationally ori- ented, so I think my knowledge of foreign
            languages and interest in other cultures could be valuable.
            <br />
            <br /> <div className="resume-green-header">OTHER COURSES</div>
            <br />
            <ResumeJobinfoTemplate
              jobdate={"01/2017-04/2017"}
              organisation={
                "Course in literary non fiction with the author Judith Koelemeijer"
              }
            />
            <br />
            <ResumeJobinfoTemplate
              jobdate={"04/2018-07/2018"}
              organisation={"Photography course Speer Fotografie Amsterdam"}
            />
            <br />
            <br />
          </div>
        </div>
        <div className="resume-bottom"></div>
        <div className="resume-right-line"></div>
      </div>
    );
  }
}
