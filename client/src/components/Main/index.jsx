import styles from "./styles.module.css";
import img1 from './images/first.png'; 
import img2 from './images/second.png'; 
import img3 from './images/third.png'; 
import img4 from './images/forth.png'; 
import faq1 from './images/faq1.png'; 
import faq2 from './images/faq2.png'; 
import faq3 from './images/faq3.png'; 
import faq4 from './images/faq4.jpg'; 

import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<html>
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
					Logout
				</button>
			</nav>
		</div>
		

		{/* Caruosel */}
		<div>
			<Carousel>
				<Carousel.Item>
				<Link to="/"><img src={img1} alt="logo" width="100%"/></Link>
				</Carousel.Item>  
				<Carousel.Item>
				<Link to="/accomodation"><img src={img2} alt="logo" width="100%"/></Link>
				</Carousel.Item>  
				<Carousel.Item>
				<Link to="/food">
				<img src={img3} alt="logo" width="100%"/>
				</Link>
				</Carousel.Item>  
				<Carousel.Item>
				<Link to="/courses">
				<img src={img4} alt="logo" width="100%"/>
				</Link>
				</Carousel.Item>  
			</Carousel>
		</div>

		</html>
	);
};

export default Main;
