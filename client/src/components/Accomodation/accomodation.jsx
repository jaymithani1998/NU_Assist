import styles from "./styles.module.css";
import "./style.css";
import { Link } from "react-router-dom";
import topBanner from "./images/accmodationTop.png"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import imgHuntington from "./images/about/huntingtonAvenue.png"
import imgboylston from "./images/about/boylston.png"
import imgmissionHill from "./images/about/missionHill.png"
import imgmissionMain from "./images/about/missionMain.png"
import imgparkDrive from "./images/about/parkDrive.png"
import imgpeter from "./images/about/peter.png"

import imgApartments from "./images/about/huntingtonAvenue.png"
import imgbostonPads from "./images/about/boylston.png"
import imgcraglist from "./images/about/missionHill.png"
import imgoffcampus from "./images/about/missionMain.png"
import imgrombae from "./images/about/parkDrive.png"
import imgzillow from "./images/about/peter.png"




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
					Food
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
		
			<section id="home">
				<div class="container-fluid px-0 top-banner" style={{ height:'100vh',backgroundImage: `url(${topBanner})`}}>
					<div class="container" >
						<div class="row">
							<div class="col-lg-5 col-md-6">
								<h1><span>ACCOMODATION</span><br/> WE ARE HERE FOR YOU</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
		
			{/* Section - About */}
			<section id="about">
				<div class="about-section wrapper">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-7 col-md-12 mb-lg-0 mb-5">
								<div class="card border-0">
									<img src={imgHuntington} class="img-fluid"/>
								</div>
							</div>
							<div class="col-lg-5 col-md-12 text-sec">
								<h2>Huntington Avenue</h2>
								<p>Huntington Avenue is located within 0.8 Miles from NEU It takes around 4 minutes to reach
									NEU. It is Red Eye accessible. It is a safe neighbourhood in Boston for NEU students. It's a
									bustling street full of students, locals, shops, etc. Indian Kitchen, Punjabi Palace adn
									Masala Square Indian Kitchen are few popular Indian restaurants. College Convenience and
									Star Market are very close to go grocery shopping in Huntington</p>

							</div>
						</div>
					</div>
					<div class="container food-type">
						<div class="row align-items-center">
							<div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
								<h2>Mission Main</h2>
								<p>Mission Main is located within 0.8 Miles from NEU. It takes around 4 minutes to reach NEU. It
									is Red Eye accessible. Safe neighborhood with many college students and is very peaceful.
									Mission City Pizza, Ocean Pizza Planet and Sangam Restarant are few popular restaurants
									here.</p>

							</div>
							<div class="col-lg-7 col-md-12">
								<div class="card border-0">
									<img src={imgmissionMain} class="img-fluid"/>
								</div>
							</div>
						</div>
					</div>
					<br/>
					<br/>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-7 col-md-12 mb-lg-0 mb-5">
								<div class="card border-0">
									<img src={imgparkDrive} class="img-fluid"/>
								</div>
							</div>
							<div class="col-lg-5 col-md-12 text-sec">
								<h2>Park Drive</h2>
								<p>Park Drive is located within 1 Mile from NEU. It takes around 7 minutes to reach NEU. It is
									Red Eye accessible. Madras Dosa, India Quality Restaurant and D'Guru Restaurant are few
									Indian restaurant options available</p>

							</div>
						</div>
					</div>
					<div class="container food-type">
						<div class="row align-items-center">
							<div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
								<h2>Peterborough Street & Jersey Street</h2>
								<p>Peterborough St. Jersey St is located within 0.7 Miles from NEU. It takes around 4 minutes to
									reach NEU. It is Red eye accessible. It is Red Eye accessible. Singh's Dhaba, India Quality
									Restaurant and Indian Kitchen are few Indian restaurants in Peterborough St. Tran's World
									Food Market and Himalayas General Store are the nearest shops to buy groceries.</p>

							</div>
							<div class="col-lg-7 col-md-12">
								<div class="card border-0">
									<img src={imgpeter}class="img-fluid"/>
								</div>
							</div>
						</div>
					</div>
					<br/>
					<br/>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-7 col-md-12 mb-lg-0 mb-5">
								<div class="card border-0">
									<img src={imgmissionHill} class="img-fluid"/>
								</div>
							</div>
							<div class="col-lg-5 col-md-12 text-sec">
								<h2>Mission Hill</h2>
								<p>Mission Hill is located within 1.3 Miles from NEU. It takes around 6 minutes to reach NEU. It
									is Red Eye accessible. Halal Indian Cusine, Mela and Ashur Restaurant are few popular
									restaurant options. Whole Foods Market and Stop & Shop are just a few minutes away to buy
									groceries.</p>
							</div>
						</div>
					</div>

					<div class="container food-type">
						<div class="row align-items-center">
							<div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
								<h2>Boylston Street</h2>
								<p>
								<p>Boylston St is located within 2.2 Miles from NEU. It takes around 12 minutes to reach NEU.
									Boylston street is a popular shopping street in Boston's Back Bay neighborhood. It is one of
									the safest neighborhoods in Boston. Many of the most wealthiest residents live there.
									There’s a large presence of police because its a top tourist destination and surrounded by
									the top restuarants and attractions the city has to offer.</p>
								</p>
							</div>
							<div class="col-lg-7 col-md-12">
								<div class="card border-0">
									<img src={imgboylston} class="img-fluid"/>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>

			{/* Section - Find Accomodation */}
			<section id="explore-food">
				<div class="explore-food wrapper">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<div class="text-content text-center">
									<h2>Find Your Accomodation Here!</h2>
									<p>Let's Start Your Hunt</p>
								</div>
							</div>
						</div>
						<div class="row pt-5">
							<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
								<div class="card border">
									<img src={imgrombae} class="img-fluid"/>
									<div class="p-3">

										<h3>ROOMBAE</h3>
										<p>Simplify the house hunting experience. Find houses you like and people ready to
											move-in. Once you're ready, instantly schedule a meeting with us. All in a few
											clicks! </p>

										
										<a href="tel:(617) 547-7463">
											<button class="main-btn mt-4">Call</button>
										</a>
										-
										<a href="https://roombae.com/">
											<button class="main-btn mt-4">Click Me</button>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
								<div class="card border">
									<img src={imgzillow} class="img-fluid"/>
									<div class="p-3">
										<h3>ZILLOW</h3>
										<p>Zillow is a great resource for shopping for Real Estate. The prices tend to be full
											blown retail but now the once exclusive multiple listing service is now at your disposal thanks to Zillow.</p>

										
										
										<a href="tel:877-313-8601">
											<button class="main-btn mt-4">Call</button>
										</a>
										-
										<a href="https://www.zillow.com/">
											<button class="main-btn mt-4">Click Me</button>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
								<div class="card border">
									<img src={imgApartments} class="img-fluid"/>
									<div class="p-3">
										<h3>APARTMENTS.COM</h3>
										<p>Apartments.com works hard to ensure that you have a positive experience using our
											site, but we cannot guarantee that our sites are 100 percent free from false or
											fraudulent listings. </p>
										
										<a href="tel:(888) 658-7368">
											<button class="main-btn mt-4">Call</button>
										</a>
										-
										<a href="https://www.apartments.com/">
											<button class="main-btn mt-4">Click Me</button>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
								<div class="card border">
									<img src={imgoffcampus} class="img-fluid"/>
									<div class="p-3">
										<h3>OFFCAMPUSCRIBS.COM</h3>
										<p>Browse our rental listings for off campus housing, apartments, terraces, near Boston,
											MA. Real estate for rent, college students, off campus housing.Save your favorite properties and get
											price drop alerts.</p>
										<a href="tel:(617) 714-5051">
											<button class="main-btn mt-4">Call</button>
										</a>
										-
										<a href="https://www.offcampuscribs.com/rental-listings/">
											<button class="main-btn mt-4">Click Me</button>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
								<div class="card border">
									<img src={imgbostonPads} class="img-fluid"/>
									<div class="p-3">
										<h3>BOSTONPADS</h3>
										<p>Make your search for a Boston apartment, home, condo, or investment property
											effortless with a free account on Boston Pads! Save your favorite properties and get
											price drop alerts.</p> 
										<a href="tel:(617) 208 2121">
											<button class="main-btn mt-4">Call</button>
										</a>
										-
										<a href="https://bostonpads.com/">
											<button class="main-btn mt-4">Click Me</button>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
								<div class="card border">
									<img src={imgcraglist} class="img-fluid"/>
									<div class="p-3">
										<h3>CRAIGLIST</h3>
										<p>Craiglist is a classified advertisements websites, where users can buy and sell
											products or services. There are a whole host of categories, from jobs to house and
											items for sale. </p>

										
										<a href="tel:(617) 547-4121">
											<button class="main-btn mt-4">Call</button>
										</a>
										-
										<a href="https://boston.craigslist.org/">
											<button class="main-btn mt-4">Click Me</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section - Reviews */}
			<section id="testimonial">
				<div class="wrapper testimonial-section">
					<div class="container text-center">
						<div class="text-center pb-4">
							<h2>REVIEWS</h2>
						</div>
						<div class="row">
							<div class="col-sm-12 col-lg-10 offset-lg-1">
								<div id="" class="carousel slide" data-bs-ride="carousel">
									{/* <div class="carousel-indicators">
										<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
											class="active" aria-current="true" aria-label="Slide 1"></button>
										<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
											aria-label="Slide 2"></button>
										<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
											aria-label="Slide 3"></button>
										<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
											aria-label="Slide 4"></button>
										<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
											aria-label="Slide 5"></button>
									</div> */}
									<div class="carousel-inner">
										<Carousel>
											<Carousel.Item>
											<p>Spacious apartments near Northeastern university. Very helpful staff,
													specially Mr. Gilberto who is amicable and provide us smooth transition to
													get suitable house according to our requirements. I would recommend people
													to live in the Mission main apartments. </p>
											<h5>SpongBob</h5>
											</Carousel.Item>  
											<Carousel.Item>
											<p> Compared to my other apartment this place is a dream. I don't have
													complaints about heat or hot water, if someone else turns on their shower
													while you're in yours you'll get a blast of hot or cold water. </p>
											<h5>Shinchan</h5>
											</Carousel.Item> 
											<Carousel.Item>
											<p> <p>Located in a convenient location to be able to get to classes on time.
													Quality of the rooms could be better, especially compared to other locations
													but the price point is more competitive than the other places. Overall it is
													not a bad choice for a student.</p> </p>
											<h5>Goku</h5>
											</Carousel.Item>  
											<Carousel.Item>
											<p>A great row house format housing colony next to Northeastern university and
													Wentworth university. I have personally lived here and cannot get tired of
													living here. It’s just a great vibe and comfort. The leasing office replies
													promptly and will cater to all your needs. They have personal security for
													your safety.</p>
												<h5>Doraemon</h5>
											</Carousel.Item>
										</Carousel> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section-Footer */}
			<footer id="footer">
				<div class="footerc pt-5">
					<div class="container">
						<div class="row">
							<p class="text-light"><h2>Contact us:</h2></p>
							<div class="col-md-6">
							<p class="text-light"><b>Email:</b>  customercare@nuassist.com</p>	
							<p class="text-light"><b>Phone:</b>  +1 (123)-567-8907</p>	
								
							</div>
							<div class="col-sm-12">
								<div class="footer-copy">
									<div class="copy-right text-center pt-5">
										<p class="text-light">&copy; 2022. All rights reserved.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</html>
		

		
	);
};

export default Accomodation;
