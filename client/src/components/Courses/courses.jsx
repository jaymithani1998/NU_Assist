import styles from "./styles.module.css";
import "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/style.css";
import { Link } from "react-router-dom";
import topBanner from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/accmodationTop.png"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import imgHuntington from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/huntingtonAvenue.png"
import imgboylston from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/boylston.png"
import imgmissionHill from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/missionHill.png"
import imgmissionMain from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/missionMain.png"
import imgparkDrive from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/parkDrive.png"
import imgpeter from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/peter.png"

import imgApartments from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/huntingtonAvenue.png"
import imgbostonPads from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/boylston.png"
import imgcraglist from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/missionHill.png"
import imgoffcampus from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/missionMain.png"
import imgrombae from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/parkDrive.png"
import imgzillow from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/images/about/peter.png"




const Courses = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.origin = 'http://localhost:3000';
	};

	const accTopBannerStyle =`
	.top-banner {
		width: 100%;
	 	background-size: cover;
	 	padding: 16.875rem 0 9.375rem;
 	}

	.top-banner{
		color: var(--white-color);
	}
	`;



	return (
		<html>
		<style>
			{accTopBannerStyle}
		</style>
		{/* NavBar */}
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>NU Assist</h1>
				<Link to="/" className={styles.navbar_element}>
						Home
				</Link>
				<Link to="/accomodation" className={styles.navbar_element}>
					Accomodation
				</Link>
				<Link to="/food" className={styles.navbar_element}>
					Food Joints
				</Link>
				<Link to="/courses" className={styles.navbar_element}>
					Courses
				</Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					<Link to="/login" >
						Logout
					</Link>
				</button>
			</nav>
		</div>
		This is Course Page
		</html>
		

		
	);
};

export default Courses;
