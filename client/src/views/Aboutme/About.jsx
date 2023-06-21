import { Link } from "react-router-dom";
import "./about.css"

const About = () => {
    return(
        <div class="about">
            <div class="aboutboton">
                <Link to={"/home"}>
                     <button>Home</button>
                </Link>
            </div>
            <div class="aboutname">
                <h2>Tobias Gonzalez</h2>
            </div>
            <div class="aboutgit">
                <h3>github</h3>
            </div>
            <div class="aboutlink">
                <h3>Linkledin</h3>
            </div>
        </div>
    )
}


export default About;