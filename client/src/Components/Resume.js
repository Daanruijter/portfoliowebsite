import React, { Component } from "react";
import "../CSS/Resume.css";
import daanfoto from "../pictures/daanfoto.jpeg";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-wrapper">
        <div className="resume-top"></div>
        <div className="resume-left"></div>
        <div className="resume-right">
          <div className="resume-name">DAAN LAURENTIUS RUIJTER</div>
          <div className="resume-profession"> FULL STACK WEB DEVELOPER </div>
          <div className="resume-daanfoto-wrapper">
            <img className="resume-daanfoto" src={daanfoto} />
            <div className="resume-introduction">
              I’m very enthusiastic about web development. The combination of
              analytical challenges, creativity and the international
              orientation of the profession makes it very rewarding. Being
              interested in the structure of foreign languages and having worked
              as an editor before, coding is a logical extension of my
              capacities. It gives me the opportunity to continually develop
              myself, which I consider important for my career. I’m open for a
              position in a motivating environment where I can learn more to
              contribute to creating valuable web applications.{" "}
            </div>
          </div>
          <br />
          <div className="resume-career-summary-heading">
            <br />
            CAREER SUMMARY
            <br />
            <br />
            <br />
          </div>
          <div className="resume-career-summary-wrapper">
            <div className="resume-jobinfo-wrapper">
              <div className="resume-bold">12/2019-03/2020</div>
              <div className="resume-jobinfo">
                <div className="resume-bold">Ubiqum Code Academy Amsterdam</div>
                <div className="resume-normal">
                  Full Stack MERN web developer:
                </div>
                <div className="resume-italic">
                  Full-time onsite, with the Agile working methodology.
                  <br /> I did projects on the base of learning-by-doing.
                </div>
              </div>
            </div>
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
            activities in those cities. Us- ers can add the itineraries to their
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
            API data of the US Congress and Senate. Later I repeated it with
            Vue.js. The project helped to improve my capacities to refactor code
            and to adhere to industry convention.
            <br />
            <a
              className="resume-project-links"
              href="https://daanruijter.github.io/WeatherApp/"
            >
              <br />
              NYSL: North Youth League Soccer website
            </a>
            <br />
            Made a youth soccer information website with HTML and CSS, using
            FlexBox and Grid to position elements. Also applied CSS media
            queries for responsiveness.
            <br />
            <br /> 09/2013-06/2019 Rodi Media, Purmerend Editor: Edited and
            published various local news and web articles with a high degree of
            accuracy. In every self written article I used my own language to
            make them unique. The interviews I did required good listening and
            communication skills. 01/2014-09/2015 TENNiS.nl, Sassenheim Web
            editor (voluntary): Wrote and published different news articles
            about professional national and international tennis matches.
            <br />
            <br />
            12/2012-04/2013 Valkering Media, Amsterdam Internship as an editor
            for the website Ajax Showtime: (Re)wrote articles about Ajax and
            soccer in general 07/2012-11/2012 Internet company User.nl,
            Purmerend Internship marketing department: Developed a media plan to
            create more company visibility
            <br /> <br />
            EDUCATION
            <br />
            <br /> 12/2019-03/2020 Full Stack MERN Web development at Ubiqum
            Code Academy 09/2008-11/2011 Master of Journalism at the Vrije
            Universiteit in Amsterdam 09/2005-07/2007 Master of Economics at the
            Universiteit van Amsterdam 09/2002-09/2005 Bachelor of Economics at
            the Universiteit van Amsterdam 08/1996-06/2002 Gymnasium with Latin
            and Greek at Het Zaanlands Lyceum
            <br />
            <br /> ACHIEVEMENTS
            <br />
            11/2011-03/2014 Camping de Duinvoet, Schoorl Wrote a book about
            Campung de Duunvoett a small campsute on the foothulls of the
            Schoorl dunes
            <br />
            <br /> LANGUAGE COURSES
            <br />
            From 2009 I followed Spanish language courses in Barcelona, Valencia
            and Málaga and Italian courses in Amsterdam. In addition I often
            visit language meetups to practice lan- guages and to meet new
            people. Being able to communicate with people, to read, write and
            listen in other languages is very stimulating for me. The IT world
            is internationally ori- ented, so I think my knowledge of foreign
            languages and interest in other cultures could be valuable.
            <br />
            <br /> OTHER COURSES
            <br />
            01/2017-04/2017 Course in literary non fiction with the author
            Judith Koelemeijer 04/2018-07/2018 Photography course Speer
            Fotografie Amsterdam
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
