import React, { Component } from "react";
import "../CSS//LocalArticles.css";
import { connect } from "react-redux";
import LocalArticlesDutch from "./LocalArticlesDutch";

class LocalArticles extends Component {
  state = {
    localArticles: [
      {
        title: "Eerste orgelles meteen mijn laatste",
        chapeau: "Freek de Jonge vertelt Zaanse verhalen om te lachen",
        photoDescription: "Foto: Daan Ruijter",
        picture:
          "http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-1Mijn-eerste-orgelles-was-meteen-mijn-laatste1.jpg",
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/54872/p-",
        category: "theatre",
      },
      {
        title: "'Vergrijzen op eigen wijze'",
        chapeau: "Koning op werkbezoek bij ouderenproject in Zaandam",
        photoDescription: "Foto: Daan Ruijter",
        picture:
          "http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-2Vergrijzen-op-eigen-wijze1.jpg",
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/33853/p-",
        category: "politics/society",
      },
      {
        title: "Alberti bezorgt Pennemes grandioze middag",
        chapeau: "Zorgcentrum viert met optreden bestuurlijke fusie",
        photoDescription: "Foto: Daan Ruijter",
        picture:
          "http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-3Willeke-Alberti-bezorgt-bewoners-Pennemes-grandioze-middag1.jpg",
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/28029/p-",
        category: "politics/society",
      },
      {
        title: "'Ga met heel veel energie aan de slag'      ",
        chapeau: "Hamming nieuwe burgemeester van Zaanstad      ",
        photoDescription: "Foto: Daan Ruijter",
        picture:
          "http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-4Ga-met-heel-veel-energie-aan-de-slag1.jpg",
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/48228/p-",
        category: "politics/society",
      },
      {
        title: "'Vioolspelen is zo natuurlijk om te doen'",
        chapeau: `Zaandammer Tim de Vries in finale Prinses Christina Concours`,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-5Vioolspelen-is-zon-natuurlijk-iets-om-te-doen1.jpg`,
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/23205/p-",
        category: "music",
      },
      {
        title: `'Samen nadenken over toekomst in Zaanstad'`,
        chapeau: `Zaanse Geluiden roept Zaankanters op te komen discussiëren`,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-6Samen-nadenken-over-onze-toekomst-in-Zaanstad1.jpg`,
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/17223/p-",
        category: "politics/society",
      },
      {
        title: `Turks international özyakup opent kunstgrasveld      `,
        chapeau: `Oud-burgemeester aanwezig      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-7Turks-international-%C3%B6zyakup-opent-kunstgrasveld-in-geboortewijk-Poelenburg1.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/14-%E2%80%98Veldje-kan-echt-een-functie-hebben%E2%80%99-Jonge-Purmerender-onderzoekt-aanpassing-%E2%80%98Narcissenveldje%E2%80%99.pdf",
        category: "sports",
      },
      {
        title: `Vermakelijke middag met Jacco Eltingh bij TV Elckerlyc     `,
        chapeau: `Voormalig tenniswereldtopper in Purmerend      `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-8Vermakelijke-middag-met-Jacco-Eltingh-bij-TV-Elckerlyc1.jpg`,
        articleLink:
          "https://www.rodi.nl/regio/purmerend/nieuws/49327/vermakelijke-middag-met-jacco-eltingh-bij-tv-elckerlyc",
        category: "sports",
      },
      {
        title: `'Beter duizend dagen praten dan één dag oorlog'      `,
        chapeau: `Schrijversdebuut als tiener gevluchte Mustafa        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-9Beter-duizend-dagen-praten-dan-%C3%A9%C3%A9n-dag-oorlog1.jpg`,
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/38092/p-",
        category: "politics/society",
      },
      {
        title: `'Allereerste les zit bij ons nog steeds in het pakket!'      `,
        chapeau: `Tom Kisjes vertelt over natuurmuseum      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-10Allereerste-les-nog-steeds-in-het-pakket1.jpg        `,
        articleLink:
          "https://www.rodi.nl/regio/zaanstad/algemeen/144534/-allereerste-les-nog-steeds-in-het-pakket-",
        category: "politics/society",
      },
      {
        title: `'Had mijn allereerste openbare optreden in Zaantheater'      `,
        chapeau: `Juvat Westendorp danst in Zaantheater-jubileumvoorstelling      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-11Had-mijn-allereerste-openbare-optreden-in-Zaantheater1.jpg`,
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/35319/span-",
        category: "theatre",
      },
      {
        title: `'Jochem Myjer komt altijd met zijn hengel langs de balie'      `,
        chapeau: `Medewerkers kijken terug op twintig jaar Zaantheater        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina1-12Jochem-Myjer-komt-altijd-met-zijn-hengel-langs-de-balie1.jpg`,
        articleLink: "https://www.rodi.nl/regio/zaanstad/nieuws/35233/p-",
        category: "theatre",
      },
      {
        title: `‘Binnen beginnen om buiten te blijven’      `,
        chapeau: `Koning opent Justitieel Complex Zaanstad        `,
        photoDescription: `Foto: Vincent de Vries/Rodi Media       `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/1-Binnen-beginnen-om-buiten-te-blijven-Koning-opent-Justitieel-Complex-Zaanstad.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/1-Binnen-beginnen-om-buiten-te-blijven-Koning-opent-Justitieel-Complex-Zaanstad.pdf",
        category: "politics/society",
      },
      {
        title: `‘Alles bij elkaar onder één dak’      `,
        chapeau: `Van Gaal opent AFAS Trainingscomplex AZ          `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/2-%E2%80%98Alles-bij-elkaar-onder-%C3%A9%C3%A9n-dak%E2%80%99-Van-Gaal-opent-AFAS-Trainingscomplex-AZ.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/2-%E2%80%98Alles-bij-elkaar-onder-%C3%A9%C3%A9n-dak%E2%80%99-Van-Gaal-opent-AFAS-Trainingscomplex-AZ.pdf",
        category: "sports",
      },
      {
        title: `‘Afvragen wat er aan de hand is’      `,
        chapeau: `Toekomstige samenleving centraal bij opening politieke jaar        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/3-%E2%80%98Gemeente-moet-afvragen-wat-er-aan-de-hand-is%E2%80%99-Toekomstige-samenleving-centraal-bij-opening-politieke-jaar.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/4-Proberen-het-dit-jaar-iets-beter-te-doen-FC-Volendam-wil-dit-seizoen-meer.pdf",
        category: "politics/society",
      },
      {
        title: `’Proberen het dit jaar iets beter te doen’      `,
        chapeau: `FC Volendam wil dit seizoen meer        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/13-FC-Volendam-mikt-op-play-offs-%E2%80%98Altijd-beter-willen-zijn-dan-dag-van-gisteren%E2%80%99.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/4-Proberen-het-dit-jaar-iets-beter-te-doen-FC-Volendam-wil-dit-seizoen-meer.pdf",
        category: "sports",
      },
      {
        title: `‘Iedereen moet zich er prettig door voelen’      `,
        chapeau: `Beeldhouwer Cerneüs vertelt over expositie en werk      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/5-%E2%80%98Iedereen-moet-zich-er-prettig-door-voelen%E2%80%99-Beeldhouwer-Cerne%C3%BCs-vertelt-over-expositie-en-werk.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/5-%E2%80%98Iedereen-moet-zich-er-prettig-door-voelen%E2%80%99-Beeldhouwer-Cerne%C3%BCs-vertelt-over-expositie-en-werk.pdf",
        category: "art",
      },
      {
        title: `‘¡Vamos al campo!’      `,
        chapeau: `FC Barcelona Camps bij OFC geopend      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/6-%E2%80%98%C2%A1Vamos-al-campo%E2%80%99-FC-Barcelona-Camps-bij-OFC-geopend.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/6-%E2%80%98%C2%A1Vamos-al-campo%E2%80%99-FC-Barcelona-Camps-bij-OFC-geopend.pdf",
        category: "sports",
      },
      {
        title: `‘Van plan goed waterpistool aan te schaffen’      `,
        chapeau: `Purmerends duo organiseert watergevecht in Leeghwaterpark      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/7-%E2%80%98Van-plan-goed-waterpistooltje-aan-te-schaffen%E2%80%99-Purmerends-duo-organiseert-watergevecht-in-Leeghwaterpark.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/7-%E2%80%98Van-plan-goed-waterpistooltje-aan-te-schaffen%E2%80%99-Purmerends-duo-organiseert-watergevecht-in-Leeghwaterpark.pdf",
        category: "politics/society",
      },
      {
        title: `Je moet stoppen als je nog plezier hebt`,
        chapeau: `Et Buut-schoolfdirecteur Hoorn na 42 jaar met pensioen`,
        photoDescription: `Nico Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/8-%E2%80%98Je-moet-stoppen-als-je-nog-plezier-hebt%E2%80%99-Et-Buut-schooldirecteur-Hoorn-na-42-jaar-met-pensioen.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/8-%E2%80%98Je-moet-stoppen-als-je-nog-plezier-hebt%E2%80%99-Et-Buut-schooldirecteur-Hoorn-na-42-jaar-met-pensioen.pdf",
        category: "politics/society",
      },
      {
        title: `‘Jaren hiervoor bezig geweest’      `,
        chapeau: `Rapper Derryl uit Krommenie in Grote Prijs van Nederland      `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/9-%E2%80%98Jaren-hiervoor-bezig-geweest%E2%80%99-Rapper-Derryl-uit-Krommenie-in-Grote-Prijs-van-Nederland.jpg        `,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/9-%E2%80%98Jaren-hiervoor-bezig-geweest%E2%80%99-Rapper-Derryl-uit-Krommenie-in-Grote-Prijs-van-Nederland.pdf",
        category: "music",
      },
      {
        title: `‘Je moet altijd voor hoogst haalbare gaan’      `,
        chapeau: `Vv Knollendam wil kampioen worden      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/10-%E2%80%98Je-moet-altijd-voor-hoogst-haalbare-gaan%E2%80%99.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/10-%E2%80%98Je-moet-altijd-voor-hoogst-haalbare-gaan%E2%80%99.pdf",
        category: "sports",
      },
      {
        title: `Je kunt niet om de beurt een stapje achteruit maken`,
        chapeau: `WK touwtrekken in Volendam`,
        photoDescription: `Foto: Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/11-%E2%80%98Je-kunt-niet-om-de-beurt-stapje-achteruit-maken%E2%80%99-WK-touwtrekken-in-Volendam.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/11-%E2%80%98Je-kunt-niet-om-de-beurt-stapje-achteruit-maken%E2%80%99-WK-touwtrekken-in-Volendam.pdf",
        category: "sports",
      },
      {
        title: `’Kijker confronteren met vooroordelen’      `,
        chapeau: `Documentaire over uitgeprocedeerde asielzoekers in EYE        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/12-Kijker-confronteren-met-vooroordelen-Documentaire-over-uitgeprocedeerde-asielzoekers-in-EYE.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2016/09/12-Kijker-confronteren-met-vooroordelen-Documentaire-over-uitgeprocedeerde-asielzoekers-in-EYE.pdf`,
        category: "politics/society",
      },

      {
        title: `'Chronische pijn ernstig onderschat'      `,
        chapeau: `Interview met neuroloog Bas ter Meulen      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-1Chronische-pijn-ernstig-onderschat-fenomeen.jpg`,
        articleLink:
          "https://www.rodi.nl/regio/zaanstad/nieuws/33704/bas-ter-meulen-neuroloog-chronische-pijn-ernstig-onderschat-fenomeen-",
        category: "politics/society",
      },
      {
        title: `‘Beter Besef met kennis eigen omgeving’      `,
        chapeau: `Holocaust Memorial Day in Sint-Bonifatiuskerk      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-2%E2%80%98Besef-komt-beter-binnen-met-kennis-eigen-omgeving%E2%80%99.jpg`,
        articleLink: `http://zondagskrant.nl/widgets/1715-nieuws/nieuws/1392068-beter-besef-met-kennis-eigen-omgeving-holocaust-memorial-day-in-sint-bonifatiuskerk`,
        category: "politics/society",
      },
      {
        title: `'Dit is het hoogst haalbare'      `,
        chapeau: `Zaandammer Edwin debuteert op 55e bij Australian Open      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-3Dit-is-het-hoogst-haalbare.jpg  `,
        articleLink: `https://www.rodi.nl/regio/zaanstad/nieuws/58639/p-`,
        category: "sports",
      },
      {
        title: `'Het volleybal is het kopstuk van het evenement'      `,
        chapeau: `Wijkvolleybaltoernooi op oude plek Sporthal De Sprong      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-4Het-volleybal-is-het-kopstuk-van-het-evenement.jpg`,
        articleLink: `https://www.rodi.nl/regio/zaanstad/nieuws/22076/p-`,
        category: "sports",
      },
      {
        title: `'Op een gegeven moment moet je toch stoppen'      `,
        chapeau: `Beppie neemt na dertig jaar afscheid bij peutersoos in Zaandam      `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-5Op-een-gegeven-moment-moet-je-toch-stoppen.jpg`,
        articleLink: `https://www.rodi.nl/regio/zaanstad/nieuws/28230/p-`,
        category: "politics/society",
      },
      {
        title: `'Ik heb er 's avonds nog steeds energie door'     `,
        chapeau: `Klaas Staal verwisselt politie-uniform voor Zaans kostuum      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-6Ik-heb-er-s-avonds-nog-steeds-energie-door.jpg`,
        articleLink: `https://www.rodi.nl/regio/zaanstad/nieuws/34359/p-`,
        category: "politics/society",
      },
      {
        title: `ZMC behandelt versleten knieën met geavanceerde technologie      `,
        chapeau: `Interview met orthopedisch chirurg Robbert Jan Noorda        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-7ZMC-behandelt-versleten-knie%C3%ABn-met-geavanceerde-technologie.jpg`,
        articleLink: `http://www.medemblikkercourant.nl/nieuws/1495500-zmc-behandelt-versleten-knie-euml-n-met-geavanceerde-technologie`,
        category: "politics/society",
      },
      {
        title: `'Het begon voor mij met de vierdaagse in Nijmegen'      `,
        chapeau: `100 of 105 kilometer wandelen in 24 uur      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-8Het-begon-met-de-vierdaagse-in-Nijmegen.jpg`,
        articleLink: `https://www.rodi.nl/regio/beemster/nieuws/28807/span-`,
        category: "sports",
      },
      {
        title: `'We moeten er echt een vechtmachine van maken'      `,
        chapeau: `Selectie nieuwe fusieclub FC Zaandam wil zich handhaven      `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-9We-moeten-er-echt-een-vechtmachine-van-maken.jpg`,
        articleLink: `https://www.rodi.nl/regio/zaanstad/nieuws/32828/p-`,
        category: "sports",
      },
      {
        title: `'Ik vind het prettig dat het nu zo snel gaat bij het ZMC'      `,
        chapeau: `Interview op de schildklierpoli        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-10Prettig-dat-het-nu-zo-snel-gaat-bij-het-ZMC.jpg`,
        articleLink: `https://www.zaansmedischcentrum.nl/over-zmc/nieuwsberichten/uit-de-media-prettig-dat-het-nu-zo-snel-gaat-bij-het-zmc/`,
        category: "politics/society",
      },
      {
        title: `Voedselbank - 'We kunnen zo meer mensen helpen'      `,
        chapeau: `Meer Zaankanters kunnen gebruikmaken van Voedselbank        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-11Voedselbank-We-kunnen-zo-meer-mensen-helpen.jpg`,
        articleLink: `https://www.rodi.nl/regio/zaanstad/nieuws/15392/p-`,
        category: "politics/society",
      },
      {
        title: `'Bruidsjurken voor lager dan gemiddelde prijs'      `,
        chapeau: `De Bruidsmarkt in Zaandam geopend        `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2019/06/Pagina2-12Bruidsjurken-voor-lager-dan-gemiddelde-prijs.jpg`,
        articleLink: `http://www.zondagskrant.nl/nieuws/1476773-bruidsjurken-voor-lager-dan-gemiddelde-prijs-de-bruidsmarkt-in-zaandam-geopend`,
        category: "commercial",
      },
      {
        title: `FC Volendam mikt op play-offs      `,
        chapeau: `‘Altijd beter willen zijn dan dag van gisteren’      `,
        photoDescription: `Foto: Daan Ruijter        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/13-FC-Volendam-mikt-op-play-offs-%E2%80%98Altijd-beter-willen-zijn-dan-dag-van-gisteren%E2%80%99.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2016/09/13-FC-Volendam-mikt-op-play-offs-‘Altijd-beter-willen-zijn-dan-dag-van-gisteren’.pdf`,
        category: "sports",
      },
      {
        title: `‘Veldje kan echt een functie hebben’      `,
        chapeau: `Jonge Purmerender onderzoekt aanpassing ‘Narcissenveldje’      `,
        photoDescription: `Foto: Daan Ruijter      `,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/14-%E2%80%98Veldje-kan-echt-een-functie-hebben%E2%80%99-Jonge-Purmerender-onderzoekt-aanpassing-%E2%80%98Narcissenveldje%E2%80%99.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2016/09/14-%E2%80%99Veldje-kan-echt-een-functie-hebben%E2%80%99-Jonge-Purmerender-onderzoekt-aanpassing-%E2%80%98Narcissenveldje%E2%80%99.pdf`,
        category: "politics/society",
      },
      {
        title: `‘Willen dat heel Purmerend gaat meedoen’      `,
        chapeau: `Project Ogen en Oren helpt bij inbraakpreventie      `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/15-%E2%80%98We-willen-dat-heel-Purmerend-gaat-meedoen%E2%80%99-Project-Ogen-en-Oren-helpt-bij-inbraakpreventie.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/15-%E2%80%98We-willen-dat-heel-Purmerend-gaat-meedoen%E2%80%99-Project-Ogen-en-Oren-helpt-bij-inbraakpreventie.pdf",
        category: "politics/society",
      },
      {
        title: `‘Totaal niet zien aankomen’        `,
        chapeau: `Metzger Beste Buur van Noord-Holland        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/10/16-%E2%80%98Totaal-niet-zien-aankomen%E2%80%99-Metzger-Beste-Buur-van-Noord-Holland.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/16-%E2%80%98Totaal-niet-zien-aankomen%E2%80%99-Metzger-Beste-Buur-van-Noord-Holland.pdf",
        category: "politics/society",
      },
      {
        title: `‘Super blij met iedereen die is gekomen’        `,
        chapeau: `Kappers knippen in North Sea Venue ten bate van kanker        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/17-%E2%80%98Ik-ben-super-blij-met-iedereen-die-is-komen-opdagen%E2%80%99-Kappers-knippen-in-North-Sea-Venue-ten-bate-van-kanker.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/17-%E2%80%98Ik-ben-super-blij-met-iedereen-die-is-komen-opdagen%E2%80%99-Kappers-knippen-in-North-Sea-Venue-ten-bate-van-kanker.pdf",
        category: "politics/society",
      },
      {
        title: `‘Heeft u nog plek’        `,
        chapeau: `Debuutboek Daan Ruijter over geschiedenis camping        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/18-%E2%80%98Heeft-u-nog-plek%E2%80%99-Debuutboek-Daan-Ruijter-over-geschiedenis-camping-in-Schoorl.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/18-%E2%80%98Heeft-u-nog-plek%E2%80%99-Debuutboek-Daan-Ruijter-over-geschiedenis-camping-in-Schoorl.pdf",
        category: "politics/society",
      },
      {
        title: `‘Eerlijk zullen wij alles delen’        `,
        chapeau: `Heerlijk avondje voor Zaanse gezinnen met kleine beurs        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/19-%E2%80%98Eerlijk-zullen-wij-alles-delen%E2%80%99-Heerlijk-avondje-voor-Zaanse-gezinnen-met-kleine-beurs.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/19-%E2%80%98Eerlijk-zullen-wij-alles-delen%E2%80%99-Heerlijk-avondje-voor-Zaanse-gezinnen-met-kleine-beurs.pdf",
        category: "politics/society",
      },
      {
        title: `‘Goed gevoel als mensen er wat aan hebben’        `,
        chapeau: `Anonieme hulplijn Sensoor zoekt vrijwilligers        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/20-%E2%80%98Goed-gevoel-als-mensen-er-wat-aan-hebben%E2%80%99-Anonieme-hulplijn-Sensoor-zoekt-vrijwilligers.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/20-%E2%80%98Goed-gevoel-als-mensen-er-wat-aan-hebben%E2%80%99-Anonieme-hulplijn-Sensoor-zoekt-vrijwilligers.pdf",
        category: "politics/society",
      },
      {
        title: `‘Vond dat ik niet moest zeuren’        `,
        chapeau: `Zaanse schrijft boek voor vrouwen militairen        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/21-%E2%80%98Vond-dat-ik-niet-moest-zeuren%E2%80%99-Zaanse-schrijft-boek-voor-vrouwen-militairen.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/21-%E2%80%98Vond-dat-ik-niet-moest-zeuren%E2%80%99-Zaanse-schrijft-boek-voor-vrouwen-militairen.pdf",
        category: "politics/society",
      },
      {
        title: `’Elk beeld met warmte en liefde gemaakt’        `,
        chapeau: `Expositie beeldhouwer Rob Cerneüs geopend        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/22-%E2%80%98Elk-beeld-met-warmte-en-liefde-gemaakt%E2%80%99-Expositie-beeldhouwer-Rob-Cerne%C3%BCs-geopend.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/22-%E2%80%98Elk-beeld-met-warmte-en-liefde-gemaakt%E2%80%99-Expositie-beeldhouwer-Rob-Cerne%C3%BCs-geopend.pdf",
        category: "art",
      },
      {
        title: `'Doel is genezing van diabetes type I'        `,
        chapeau: `Stichting Don stijdt tegen diabetes type I        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/23-Doel-is-genezing-van-diabetes-type-I.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/23-Doel-is-genezing-van-diabetes-type-I.pdf",
        category: "politics/society",
      },
      {
        title: `'Het was een schitterende expositie'        `,
        chapeau: `Puck Hulstaert blikt terug op expositie Rob Cerneüs        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2016/09/24-Het-was-een-schitterende-expositie.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/24-Het-was-een-schitterende-expositie.pdf",
        category: "politics/society",
      },
      {
        title: `‘Het moet lukken om de kwartfinale te halen’        `,
        chapeau: `Wolter Kroes zingt Nederland naar de overwinning        `,
        photoDescription: `Foto: Vincent de Vries/Rodi Media`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Wolter-Kroes.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2015/03/Het-moet-lukken-om-de-kwartfinale-te-halen-Wolter-Kroes-zingt-Nederland-naar-de-overwinning.pdf",
        category: "sports",
      },
      {
        title: `Öztürk (VI): ‘Wie betaalt, bepaalt en regeert’        `,
        chapeau: `Hoofd- of Topklassevoetbal mogelijk in de Zaanstreek        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/10/S%C3%BCleyman-%C3%96zt%C3%BCrk.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2020/05/Öztürk-VI-Wie-betaalt-bepaalt-en-regeert-Hoofd-of-Topklassevoetbal-mogelijk-in-de-Zaanstreek.pdf",
        category: "sports",
      },
      {
        title: `‘Ik dacht dat het een grapje was’        `,
        chapeau: `Venema treedt op met Joss Stone        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Melissa-Venema.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/%E2%80%98Ik-dacht-dat-het-een-grapje-was%E2%80%99-Venema-treedt-op-met-Joss-Stone.pdf",
        category: "music",
      },
      {
        title: `Rada (17) wint landelijke speechwedstrijd        `,
        chapeau: `‘Leuk te praten over onderwerpen die mij interesseren’        `,
        photoDescription: `Foto: Esther Schenk        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Rada-Ruijter-wint-speechwedstrijd.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2015/03/Rada-17-wint-landelijke-speechwedstrijd-Leuk-voor-een-publiek-te-praten-over-onderwerpen-die-mij-interesseren.pdf",
        category: "politics/society",
      },
      {
        title: `Lieke van Lexmond opent boerenseizoen        `,
        chapeau: `Koeien springen van vreugde in lentezon        `,
        photoDescription: `Foto: Esther van der Linden/Rodi Media`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Lieke-van-Lexmond.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2015/03/Lieke-van-Lexmond-opent-boerenseizoen-Koeien-springen-van-vreugde-in-lentezon.pdf",
        category: "politics/society",
      },
      {
        title: `Olthof: ‘Iedereen moet kunnen sporten’        `,
        chapeau: `Wethouder van Sport Zaanstad`,
        photoDescription: `Foto: Aangeleverd        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Jeroen-Olthof.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/Olthof-%E2%80%98Iedereen-moet-kunnen-sporten%E2%80%99.pdf",
        category: "politics/society",
      },
      {
        title: `‘Elk nummer begint in mijn hoofd’        `,
        chapeau: `Hoeke uitgeroepen tot beste Bluesgitarist Benelux        `,
        photoDescription: `Foto: Ron Koffeman        `,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Ruben-Hoeke.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/03/Elk-nummer-begint-in-mijn-hoofd-Hoeke-uitgeroepen-tot-beste-Bluesrockgitarist-Benelux.pdf`,
        category: "music",
      },
      {
        title: `Orkesten in de rij om mee te doen`,
        chapeau: `Zaterdag 17 mei Muziek op de Gracht in Zaandam`,
        photoDescription: `Foto:Aangeleverd`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Muziek-op-de-gracht.jpg`,
        articleLink: `http://daanruijter.eu/wp-content/uploads/2015/03/Orkesten-in-de-rij-om-mee-te-doen-Zaterdag-17-mei-Muziek-op-de-Gracht-in-Zaandam.pdf`,
        category: "music",
      },
      {
        title: `‘Mensen gaan er anders naar kijken’`,
        chapeau: `Ed Visser opent openluchtexpositie over de Saentower`,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/03/Ed-Visser.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2015/03/Mensen-gaan-er-anders-naar-kijken-Ed-Visser-opent-openluchtexpositie-over-de-Saentower.pdf",
        category: "art",
      },
      {
        title: `‘Trots op meest duurzame warmtebedrijf’        `,
        chapeau: `Koning Willem-Alexander opent BioWarmteCentrale        `,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/10/%E2%80%98Trots-op-meest-duurzame-warmtebedrijf%E2%80%99.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/%E2%80%98Trots-op-meest-duurzame-warmtebedrijf%E2%80%99.pdf",
        category: "politics/society",
      },
      {
        title: `We grijpen alles aan wat we kunnen doen`,
        chapeau: `Paraplu's moeten beschermen tegen agressieve oehoe`,
        photoDescription: `Foto:Aangeleverd`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/10/%E2%80%98We-grijpen-alles-aan-wat-we-kunnen-doen%E2%80%99.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/%E2%80%98We-grijpen-alles-aan-wat-we-kunnen-doen%E2%80%99.pdf",
        category: "politics/society",
      },
      {
        title: `‘Voedsel verbindt en verbroedert’`,
        chapeau: `Kennismaking House of Food tijdens Foodmarkt`,
        photoDescription: `Foto:Daan Ruijter`,
        picture: `http://daanruijter.eu/wp-content/uploads/2015/10/%E2%80%98Voedsel-verbindt-en-verbroedert%E2%80%99.jpg`,
        articleLink:
          "http://daanruijter.eu/wp-content/uploads/2016/09/%E2%80%98Voedsel-verbindt-en-verbroedert%E2%80%99.pdf",
        category: "politics/society",
      },
    ],
    searchInput: "",
    selectInput: "All",
  };
  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  listenToCategoryChange = (e) => {
    this.setState({ selectInput: e.target.value });
  };
  render() {
    let searchKey = this.state.searchInput;

    let localArticlesDisplay = this.state.localArticles.map((article) => {
      if (
        article.category === this.state.selectInput.toLowerCase() ||
        this.state.selectInput === "All"
      ) {
        if (
          article.title.toLowerCase().includes(searchKey.toLowerCase()) ||
          article.chapeau.toLowerCase().includes(searchKey.toLowerCase())
        ) {
          return (
            <div key={article.title}>
              <div className="localArticles-cards">
                <div className="localArticles-header">{article.title}</div>
                <div className="localArticles-chapeau">{article.chapeau}</div>
                <a href={article.articleLink}>
                  <img alt={article.title} src={article.picture} />
                </a>
              </div>
            </div>
          );
        }
      }
    });

    let i = 0;
    let j = 0;
    for (i = 0; i < localArticlesDisplay.length; i++) {
      if (localArticlesDisplay[i] === undefined) {
        j = j + 1;
      }
    }
    console.log(j);
    if (j === 60) {
      localArticlesDisplay = (
        <div className="localarticles-no-articles">
          <div className="localarticles-no-articles-text">
            No articles found!
          </div>
        </div>
      );
    }

    let localArticlesEnglish = (
      <div className="localArticles-wrapper">
        <div className="searchbar-and-selectbar-wrapper">
          <div className="localArticles-searchbar">
            <div>Search an article</div>
            <label htmlFor="searchfield">
              <input
                onChange={(e) => this.handleChange(e)}
                name="searchfield"
                value={this.state.searchInput}
              />
            </label>{" "}
          </div>
          <div className="localArticles-selectbar">
            <div>Choose category</div>
            <select
              onChange={this.listenToCategoryChange}
              value={this.state.selectInput}
            >
              <option>All</option>
              <option>Politics/Society</option>
              <option>Sports</option>
              <option>Art</option>
              <option>Theatre</option>
              <option>Music</option>
            </select>
          </div>
        </div>

        <div className="localArticles-flexer">{localArticlesDisplay}</div>
      </div>
    );
    let localArticlesDutch = (
      <div>
        <LocalArticlesDutch />
      </div>
    );
    if (
      this.props.languages.english === "english" ||
      this.props.languages.english === "nodutch"
    ) {
      return localArticlesEnglish;
    }
    if (
      this.props.languages.dutch === "dutch" ||
      this.props.languages.english === "noenglish"
    ) {
      return localArticlesDutch;
    }
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    languages: state.language,
  };
};
export default connect(mapStateToProps, null)(LocalArticles);
