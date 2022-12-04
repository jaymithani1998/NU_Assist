import styles from "./styles.module.css";
import img1 from './images/first.png'; 
import img2 from './images/second.png'; 
import img3 from './images/third.png'; 
import img4 from './images/forth.png'; 
// import faq1 from './images/faq1.png'; 
// import faq2 from './images/faq2.png'; 
// import faq3 from './images/faq3.png'; 
// import faq4 from './images/faq4.jpg'; 

//IMPORT FOR LINK
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Aboutus Page
const Home = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<html>
			ContactUs
		</html>
	);
};

export default Home;
