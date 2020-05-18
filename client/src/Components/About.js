import React, { Component } from "react";
import "../CSS/About.css";
import LocalArticles from "./LocalArticles";
import TennisNL from "./TennisNL";

export default class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        I started writing being a child. At the age of 2,5 I got behind a
        precursor of the modern computer, a Texas Instruments, to put my first
        little words on the digital screen. When I got older, I kept writing,
        especially diaries. Upcoming web developer, editor and text writer Daan
        Ruijter After attending college at the Zaanlands Lyceum in Zaandam I
        decided to study general economics at the Universiteit van Amsterdam. In
        2007 I got my master's degree. I came to know that also profession wise
        I wanted to write, so I started a master's degree in journalism at the
        Vrije Universiteit in Amsterdam. For this study I graduated in 2011. The
        study was pretty theoretical and therefore I wanted to get more
        experience as a journalist. Among others on the marketing and
        communication department of BaanStede, at Ajaxshowtime.com and Rodi
        Media I learned the finer points of the editor profession. I worked here
        several years as an editor and text writer and the job gave me the
        opportunity to do many rewarding interviews. Unfortunately the write and
        editorial market is in decline. This made me think about my future. I
        was looking for a promising branche in which I could keep developing
        myself within a creative profession. A branche in which I can also make
        use of my knowledge of foreign languages. The IT sector meets al those
        features, so that I'm currently studying hard to launch my career in web
        development. First book Shortly after finishing my study in journalism I
        got an interesting assignment. I had the opportunity to write a book
        about Camping de Duinvoet in holiday village Schoorl, which I visited
        frequently during my youth. I got to know the owners Hans and Ria at
        that time. They ran the campsite for many years, but as always all good
        things come to an end and they sold their company in 2011. At the
        farewell party on the campsite Hans asked me whether I'd like to write a
        book about Camping de Duinvoet. It didn't take me a long time to decide
        what I should do. I started enthusiastically and in march 2014 I
        published the book. During his 70th birthday Hans gave a very nice
        speech, officially presenting the book. Introduction video Below you can
        find an introduction video of myself. Be sure to speak Dutch...
        <div>
          <ul>
            <li>Rodi</li>
            <li>sport</li>
            <ul>
              <li>tennis</li>
              <ul>
                <li>De Gouw</li>
                <li>Tennis.nl</li>
              </ul>
              <li>voetbal</li>
              <ul>
                <li>Ajax</li>
                <li>Fczsw</li>
              </ul>
            </ul>
          </ul>
        </div>{" "}
        <br />
        <TennisNL />
      </div>
    );
  }
}
