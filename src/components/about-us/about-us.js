import "./about-us.css";

const AboutUs = (props) => {

    const {CoffeeHouse, OurCoffee, Plesure} = props;
    var Text1, classAboutUsPage, MainText;
    if(CoffeeHouse) {
        Text1 = 'About Us';
        classAboutUsPage = "about-us-page";
 /*         const MainText = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.

              Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.";*/
        MainText = 'Main Text';
    };
    if(OurCoffee) {
        Text1 = 'About our beans';
        classAboutUsPage = "about-us-page";
        MainText = 'Main Text';
    };

    if(Plesure) {
        Text1 = 'About our beans';
        classAboutUsPage = "about-us-page";
        MainText = 'Main Text';
    };
    
    return (
        <div className={classAboutUsPage}>
            <h2 className="black-text">{Text1}</h2>
            <div className="rectangle-logo-about-us"></div>
            <h3 className="black-text-context about-text">{MainText}</h3>
        </div> 
    )
}

export default AboutUs;