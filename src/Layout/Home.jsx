import AboutUs from "./AboutUs";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Care from "./Care";
import Faq from "./Faq";
import Health from "./Health";
import Solution from "./Solution";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Care></Care>
            <Solution></Solution>
            <Health></Health>
            <AboutUs></AboutUs>
            <Faq></Faq>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;