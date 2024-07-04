import AboutUs from "./AboutUs";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Faq from "./Faq";
import Health from "./Health";
import Solution from "./Solution";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Solution></Solution>
            <Health></Health>
            <AboutUs></AboutUs>
            <Faq></Faq>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;