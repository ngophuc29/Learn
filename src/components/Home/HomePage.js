import videoHomepage from "../../assests/video-homepage.mp4"
const HomePage = () => {
    return (<div className="homepage-container">
        <video   autoPlay muted loop>
            <source src={videoHomepage} type="" />
        </video>
    </div>
    );
}

export default HomePage;