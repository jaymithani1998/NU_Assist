import styles from "./styles.module.css";
import "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Accomodation/style.css";
import { Link } from "react-router-dom";
import topBanner from "/Users/jaymithani/Web_Final/INFO6150_FinalProject/client/src/components/Food/images/foodTop.png"
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




const Accomodation = () => {
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

		{/* Top Section */}

		<section id="home">
		<div class="container-fluid px-0 top-banner" style={{ backgroundImage: `url(${topBanner})`}}>
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-md-6">
						<h1><span>FOOD</span><br/> WE ARE HERE FOR YOU</h1>
						<h2>NEARBY RESTAUTANTS </h2>
					</div>
				</div>
			</div>
		</div>
		</section>
		
		{/* Food Menu */}
		<section class="our-menu p-4">
			<div class="container text-center">
				<h2 class="pb-4">FOOD</h2>
				<div class="row">
					<div class="col-6 col-sm-2 mb-4 mb-lg-0">
						<div class="card">
							<div class="cat-image">
								<a class="link_category_product" href="#">
									<img src="./img/11-removebg-preview.png" class="img-fluid"/>
								</a>
							</div>
							<div class="cat-title">
								<a href="#">Butter Chicken</a>
							</div>
						</div>
					</div>

					<div class="col-6 col-sm-2 mb-4 mb-lg-0">
						<div class="card">
							<div class="cat-image">
								<a class="link_category_product" href="#">
									<img src="./img/png-clipart-indian-cuisine-puri-chole-bhature-vegetarian-cuisine-chana-masala-breakfast-food-breakfast-removebg-preview.png" class="img-fluid"/>
								</a>
							</div>
							<div class="cat-title">
								<a href="#">Chole bhature</a>
							</div>
						</div>
					</div>

					<div class="col-6 col-sm-2 mb-4 mb-lg-0">
						<div class="card">
							<div class="cat-image">
								<a class="link_category_product" href="#">
									<img src="./img/366-3663128_dosa-png-south-indian-food-png-removebg-preview.png" class="img-fluid"/>
								</a>
							</div>
							<div class="cat-title">
								<a href="#">Masala Dosa</a>
							</div>
						</div>
					</div>

					<div class="col-6 col-sm-2 mb-4 mb-lg-0">
						<div class="card">
							<div class="cat-image">
								<a class="link_category_product" href="#">
									<img src="./img/218-2187921_pav-bhaji-images-png-transparent-png-removebg-preview.png" class="img-fluid"/>
								</a>
							</div>
							<div class="cat-title">
								<a href="#">Pav Bhaji</a>
							</div>
						</div>
					</div>

					<div class="col-6 col-sm-2 mb-4 mb-lg-0">
						<div class="card">
							<div class="cat-image">
								<a class="link_category_product" href="#">
									<img src="./img/category1.png" class="img-fluid"/>
								</a>
							</div>
							<div class="cat-title">
								<a href="#">Pizza</a>
							</div>
						</div>
					</div>

					<div class="col-6 col-sm-2 mb-4 mb-lg-0">
						<div class="card">
							<div class="cat-image">
								<a class="link_category_product" href="#">
									<img src="./img/category6.png" class="img-fluid"/>
								</a>
							</div>
							<div class="cat-title">
								<a href="#">Chicken</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>

		</html>


		

		
	);
};

export default Accomodation;
