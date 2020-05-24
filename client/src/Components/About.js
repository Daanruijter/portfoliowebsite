import React, { Component } from "react";
import "../CSS/About.css";
import ResumeJobinfoTemplate from "./ResumeJobinfoTemplate";
export default class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <div className="about-information">
          <p>
            I started writing and working with computers being a child. At the
            age of 2,5 I got behind a precursor of the modern computer, a Texas
            Instruments, to put my first little words on the digital screen.
            When I got older, I kept writing, especially diaries. After
            attending college at the Zaanlands Lyceum in Zaandam I decided to
            study general economics at the Universiteit van Amsterdam. In 2007 I
            got my master's degree. I came to know that also profession wise I
            wanted to write, so I started a master's degree in journalism at the
            Vrije Universiteit in Amsterdam. For this study I graduated in 2011.
          </p>
          <p>
            {" "}
            The study was pretty theoretical and therefore I wanted to get more
            experience as a journalist. Among others on the marketing and
            communication department of BaanStede, at Ajaxshowtime.com and Rodi
            Media I learned the finer points of the editor profession. I worked
            for Rodi several years as an editor and text writer and the job gave
            me the opportunity to do many rewarding interviews.
          </p>
          <p>
            Unfortunately the write and editorial market is in decline. This
            made me think about my future. I was looking for a promising branche
            in which I could keep developing myself within a creative
            profession. A branche in which I can also make use of my knowledge
            of foreign languages. The IT sector meets al those features, so that
            I'm currently working hard to launch my career in web development.
          </p>
        </div>
        <div>
          As an editor at Rodi Media, a company that publishes 23 weekly local
          newspapers in the province of Noord-Holland, I wrote and edited
          various front page and shorter articles. I also edited many texts. The
          subjects varied from music and concerts to politics, art/culture,
          local activities or sport. Besides, I wrote multiple articles for
          advertising clients. You can see some articles here.
        </div>
        <br />
        <div className="about-tennis-information">
          <div className="about-tennis-Daan-picture">
            <img
              alt="daan"
              src="http://daanruijter.eu/wp-content/uploads/2015/04/Daantennis.jpg"
            />
          </div>
          <div className="about-tennis-text">
            <p>
              I've been a tennis lover for many years now. The sport got me for
              the first time during a marathon match that Sjeng Schalken played
              in 2000. The Dutchman, also called "the wall", because he hit so
              many balls back, fought out a tough battle against Mark
              Philippoussis. It was the third round of Wimbledon and the big
              serving Australian came out as the winner, beating Schalken after
              five thrilling sets and in five hours and five minutes. The final
              set score: 20-18. Philippoussis ended up losing in his quarter
              final match against good old American Andre Agassi.
            </p>
            Since then I started to follow national and international tennis.
            With the rise of Roger Federer at the end of the nineties my
            interest only got bigger. Unfortunately in 2013 Schalken got beaten
            again at the quarter finals of Wimbledon, but now by an unleashed
            Swiss maestro. After this match the probably best male tennis player
            ever went on to win the tournement, his maiden Grand Slam. I had the
            honour to see him in action at the Rotterdam ATP World Tournement
            three times.
            <p>
              In 2004 I picked up a racket and discovered how nice it also is to
              play the game by myself. Ten years later, January 2014, I started
              to write for the Dutch tennis website www.tennis.nl, doing that
              for about 1,5 years.
            </p>
          </div>
        </div>
        <br />
        <div>
          My passion for soccer came when I started to practice with the ball at
          the square in front of my parents' house. That was the start sign for
          me to go and play more and more. As a coincidence, or maybe not, it
          was the period when Ajax conquered the soccer world: the nineties. I
          went to the ancient stadium "De Meer" on a regular base with my father
          and uncle. My father at the time had an important role in the fan
          policy of the club and in 1995 organized a big congress to work
          towards a national fan policy. As a little child of 10 years old I had
          the honour to open it.
          <p>
            During my student time I exchanged the play square for the hall. I
            started to play indoor soccer. Every sunday morning I still play
            with a nice group in Amsterdam. Besides that, many weekends I watch
            the matches of Ajax with a group of friends.
          </p>
          <p>
            After finishing my journalism degree I wanted to get extra editorial
            experience. So I did an internship at the Ajax news platform Ajax
            Showtime. I also wrote articles for the local indoor soccer club
            FCZSW, owned by a former colleague
          </p>
        </div>
        <br />
        First book Shortly after finishing my study in journalism I got an
        interesting assignment. I had the opportunity to write a book about
        Camping de Duinvoet in holiday village Schoorl, which I visited
        frequently during my youth. I got to know the owners Hans and Ria at
        that time. They ran the campsite for many years, but as always all good
        things come to an end and they sold their company in 2011. At the
        farewell party on the campsite Hans asked me whether I'd like to write a
        book about Camping de Duinvoet. It didn't take me a long time to decide
        what I should do. I started enthusiastically and in march 2014 I
        published the book. During his 70th birthday Hans gave a very nice
        speech, officially presenting the book. Introduction video Below you can
        find an introduction video of myself. Be sure to speak Dutch...
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
        </div>
        <div className="resume-book-more-info">
          When I was a little child, my parents went to a small campsite
          'Camping de Duinvoet', which means 'campsite on the foothills of the
          dunes'. They liked the place, kept coming and got a good friendship
          with the owners Hans and Ria. I've enjoyed a part of my youth at this
          nice little campsite. Hans and Ria got older and in 2011 they got the
          chance to sell Camping de Duinvoet. <br />
          <br />
          They held a big goodbye party in a tent, on one of the fields. Then
          Hans came to me and to my surprise asked me to write a book. That was
          a honor and just done with my journalism study, I definitly wanted to
          do that.
          <br />
          <br />I wrote about the big decisions Hans and Ria needed to make to
          run Camping de Duinvoet, the anecdotes and good times of the campsite
          and the goodbye. I published the book in 2014. Hover over the book at
          the left side and click to see the book presentation.
          <br />
          <br />
          You can find pictures, stories and more information on the <br />
          <a href="https://www.facebook.com/Heeftunogplek">
            Facebook page of the book.
          </a>
        </div>
      </div>
    );
  }
}
