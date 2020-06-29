import React, { Component } from "react";
import "../CSS/About.css";
import { connect } from "react-redux";
import AboutDutch from "./AboutDutch";

class About extends Component {
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

    let aboutEnglish = (
      <div className="about-wrapper">
        {this.state.extraInformationOpen ? (
          <div className="about-information">
            <div className="about-information-extra">
              <p>
                I started working with computers and writing being a child. At
                the age of 2,5 I got behind a precursor of the modern computer,
                a Texas Instruments, to put my first little words on the digital
                screen. When I got older, I kept writing, especially diaries.
                After attending college at the Zaanlands Lyceum in Zaandam I
                decided to study general economics at the Universiteit van
                Amsterdam. In 2007 I got my master's degree. I came to know that
                also profession wise I wanted to write, so I started a master's
                degree in journalism at the Vrije Universiteit in Amsterdam. For
                this study I graduated in 2011.
              </p>
              <p>
                {" "}
                The study was pretty theoretical and therefore I wanted to get
                more experience as a journalist. Among others on the marketing
                and communication department of BaanStede, at Ajaxshowtime.com
                and Rodi Media. I learned the finer points of the editor
                profession. I worked for Rodi several years as an editor and
                text writer and the job gave me the opportunity to do many
                rewarding interviews.
              </p>
              <p>
                Nevertheless I wanted to make steps in my career. The write and
                editorial market however is in decline. This made me think about
                my future. I was looking for a promising branche in which I
                could keep developing myself within a creative profession. A
                branche in which I can also make use of my knowledge of foreign
                languages. The IT sector meets al those features, so that I'm
                currently working hard to launch my career in web development.
              </p>

              <div
                className="about-close-more-on-editorial-portfolio"
                onClick={this.showExtraInformation}
              >
                Close
              </div>
            </div>
          </div>
        ) : (
          <div className="about-information">
            <p>
              In my previous career I worked as an editor. I did several
              editorial internships before working as an editor at Rodi Media, a
              local editorial house. Like so I wrote various articles. Below you
              can find some of them.
            </p>{" "}
            <div
              className="about-more-on-editorial-portfolio"
              onClick={this.showExtraInformation}
            >
              Read about my career
            </div>
          </div>
        )}{" "}
        {/* <div className="about-editorial-portfolio-header">
          Editorial portfolio
        </div> */}
        <div className="about-rodi-media">
          <h2>Rodi Media</h2>{" "}
          {this.state.rodiOpen ? (
            <div>
              {" "}
              <p>
                As an editor at Rodi Media, a company that publishes around 23
                weekly local newspapers in the province of Noord-Holland, I
                wrote and edited various front page and shorter{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localarticles"
                      : "https://daanruijter.herokuapp.com/localarticles"
                  }
                >
                  articles
                </a>
                . I also edited many texts. The subjects varied from music and
                concerts to politics, art/culture, local activities or sport.
                Besides, I wrote multiple articles for advertising clients.
              </p>{" "}
              <div
                onClick={this.showRodiExtraInformation}
                className="about-articles-more"
              >
                Close
              </div>
            </div>
          ) : (
            <div>
              <p>
                I wrote and edited many{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localarticles"
                      : "https://daanruijter.herokuapp.com/localarticles"
                  }
                >
                  articles
                </a>{" "}
                as an editor at Rodi Media, a company that publishes around 23
                weekly local newspapers in the province of Noord-Holland,
              </p>
              <div className="about-link"></div>
              <div
                onClick={this.showRodiExtraInformation}
                className="about-articles-more"
              >
                More about my Rodi Media articles
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
                I've been a tennis lover for many years now. The sport got me
                for the first time during a marathon match that Sjeng Schalken
                played in 2000. The Dutchman, also called "the wall", because he
                hit so many balls back, fought out a tough battle against Mark
                Philippoussis. It was the third round of Wimbledon and the big
                serving Australian came out as the winner, beating Schalken
                after five thrilling sets and in five hours and five minutes.
                The final set score: 20-18. Philippoussis ended up losing in his
                quarter final match against good old American Andre Agassi.
              </p>
              Since then I started to follow national and international tennis.
              With the rise of Roger Federer at the end of the nineties my
              interest only got bigger. Unfortunately in 2013 Schalken got
              beaten at the quarter finals of Wimbledon, not by a big serving
              Australian, but by an unleashed Swiss maestro. After this match
              the probably best male tennis player ever went on to win the
              tournament, his maiden Grand Slam. I had the honour to see him in
              action at the Rotterdam ATP World Tournament three times.
              <p>
                In 2004 I picked up a racket and discovered how nice it also is
                to play the game by myself. Ten years later, January 2014, I
                started to write{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/internationaltennis"
                      : "https://daanruijter.herokuapp.com/internationaltennis"
                  }
                >
                  articles{" "}
                </a>
                for the Dutch tennis website www.tennis.nl, doing that for about
                1,5 years. In 2015 I became member of my current tennis club De
                Gouw and wrote and edited some articles for them.
              </p>{" "}
              <div
                onClick={this.showTennisExtraInformation}
                className="about-tennis-articles-more"
              >
                Close
              </div>
            </div>
          ) : (
            <div className="about-tennis-text ">
              <p>
                January 2014, I started to write{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/internationaltennis"
                      : "https://daanruijter.herokuapp.com/internationaltennis"
                  }
                >
                  articles
                </a>{" "}
                for the Dutch tennis website www.tennis.nl, doing that for about
                1,5 years. In 2015 I became member of my current tennis club De
                Gouw and wrote and edited some{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localtennis"
                      : "https://daanruijter.herokuapp.com/localtennis"
                  }
                >
                  articles{" "}
                </a>
                for them.
              </p>{" "}
              <div
                onClick={this.showTennisExtraInformation}
                className="about-tennis-articles-more"
              >
                More about my passion for tennis
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
              My passion for soccer came when I started to practice with the
              ball at the square in front of my parents' house. That was the
              start sign for me to go and play more and more. As a coincidence,
              or maybe not, it was the period when Ajax conquered the soccer
              world: the nineties. I went to the ancient stadium "De Meer" on a
              regular base with my father and uncle. My father at the time had
              an important role in the fan policy of the club and in 1995
              organized a big congress to work towards a national fan policy. As
              a little child of 10 years old I had the honour to open it.
              <img
                alt="Daan with Louis van Gaal"
                src="http://daanruijter.eu/wp-content/uploads/2015/04/DSCF7251-Large.jpg"
              ></img>
              <p>
                During my student time I exchanged the play square for the hall.
                I started to play indoor soccer. Every sunday morning I still
                play with a nice group in Amsterdam. Besides that, many times I
                watch the matches of Ajax or the Dutch national team with a
                group of friends.
              </p>
              <p>
                After finishing my journalism degree I wanted to get extra
                editorial experience. So I did an internship at the Ajax news
                platform Ajax Showtime, writing and editing various{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/ajax"
                      : "https://daanruijter.herokuapp.com/ajax"
                  }
                >
                  articles
                </a>
                . I also wrote{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localsoccer"
                      : "https://daanruijter.herokuapp.com/localsoccer"
                  }
                >
                  articles{" "}
                </a>
                for the local indoor soccer club FCZSW, owned by a former
                colleague.
              </p>{" "}
              <div
                onClick={this.showSoccerExtraInformation}
                className="about-soccer-articles-more"
              >
                Close
              </div>
            </div>
          ) : (
            <div className="about-soccer-text">
              <p>
                After finishing my journalism degree I wanted to get extra
                editorial experience. So I did an internship at the Ajax news
                platform Ajax Showtime, writing and editing various{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/ajax"
                      : "https://daanruijter.herokuapp.com/ajax"
                  }
                >
                  articles
                </a>
                . I also wrote{" "}
                <a
                  className="about-link"
                  href={
                    dev
                      ? "http://localhost:3000/localsoccer"
                      : "https://daanruijter.herokuapp.com/localsoccer"
                  }
                >
                  articles
                </a>{" "}
                for the local indoor soccer club FCZSW, owned by a former
                colleague.
              </p>{" "}
              <div
                onClick={this.showSoccerExtraInformation}
                className="about-soccer-articles-more"
              >
                More about my passion for soccer
              </div>
            </div>
          )}
        </div>
        {/*FLIPPING BOOK */}
        <div className="about-book-wrapper">
          {" "}
          <hr />
          <h2>First book</h2>
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
                Shortly after finishing my study in journalism I got an
                interesting assignment. I had the opportunity to write a book
                about Camping de Duinvoet in holiday village Schoorl, which I
                visited frequently during my youth. I got to know the owners
                Hans and Ria at that time. They ran the campsite for many years,
                but as always all good things come to an end and they sold their
                company in 2011.{" "}
              </p>
              At the farewell party on the campsite Hans asked me whether I'd
              like to write a book about Camping de Duinvoet. It didn't take me
              a long time to decide what I should do. I started enthusiastically
              and in march 2014 I published the book. During his 70th birthday
              Hans gave a very nice speech, officially presenting the book.{" "}
              <p>
                <strong>
                  {" "}
                  Hover over the book cover to watch the book presentation (in
                  Dutch). <br />
                  <br />
                  You can find pictures, stories and more information on the{" "}
                  <br />
                  <a href="https://www.facebook.com/Heeftunogplek">
                    Facebook page of the book
                  </a>{" "}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    let aboutDutch = <AboutDutch />;

    if (
      this.props.languages.english === "english" ||
      this.props.languages.english === "nodutch"
    ) {
      return aboutEnglish;
    }
    if (
      this.props.languages.dutch === "dutch" ||
      this.props.languages.english === "noenglish"
    ) {
      return aboutDutch;
    }
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};

export default connect(mapStateToProps, null)(About);
