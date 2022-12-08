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




const Food = () => {
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

		 {/* section-3 about --> */}
		<section id="about">
		<div class="about-section wrapper">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-7 col-md-12 mb-lg-0 mb-5">
						<div class="card border-0">
							<img src="img/dguru.webp" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-5 col-md-12 text-sec">
						<h2>Dguru</h2>
						<p> Indian Restaurant with wide range of options to choose from the menu which includes Appetizers, Vegetarian, chicken, meat, seafood, bread, desserts.
							<br/>
							<a href="https://www.guruthecaterer.com">guruthecaterer.com</a>
							</p>
							<p>
								Address:92 Bedford St 43 Kingston St. Corner, Boston, MA 02110
							</p>
							<a href="tel:(617) 331-5138">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="https://www.guruthecaterer.com/bostonmenu.html">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
					</div>
				</div>
			</div>
			<div class="container food-type">
				<div class="row align-items-center">
					<div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
						<h2>Halal Indian Cuisine</h2>
						<p>Homestyle Indian cooking, including seafood, tandoori & vegetarian options, in a modest storefront.
							<a href="https://www.halalindiancuisineboston.com">halalindiancuisineboston.com</a>
							</p>
							
							<p>
							Address:736 Huntington Ave, Boston, MA 02115
							</p>
						
						<a href="tel:(617) 232-5000">
							<button class="main-btn mt-4" >Call</button>
							</a>
						<a href="https://www.halalindiancuisineboston.com/">
						<button class="main-btn mt-4" >Click Me</button>
						</a>
					</div>
					<div class="col-lg-7 col-md-12">
						<div class="card border-0">
							<img src="img/halal.jpeg" class="img-fluid"/>
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
							<img src="img/mumbai.jpeg" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-5 col-md-12 text-sec">
						<h2>Mumbai Spice</h2>
						<p> Indian tandoori fare & Indo-Chinese dishes are served in sleek, airy surrounds.<br/>
							<a href="https://www.mumbaispicebostonma.com/#menu">mumbaispicebostonma.com</a>
							</p>
							<p>
								Address:251 Massachusetts Ave, Boston, MA 02115
								</p>
							
							<a href="tel:(857) 350-4305">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="https://www.mumbaispicebostonma.com/#menu">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
					</div>
				</div>
			</div>
			<div class="container food-type">
				<div class="row align-items-center">
					<div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
						<h2>Indian Quality Restaurant </h2>
						<p> Long-standing, no-nonsense Indian outpost for a wide range of classic Indian dishes.
							Located in:Commonwealth Avenue Mall
							<br/>
							<a href="https://indiaquality.com/">indiaquality.com</a>
							</p>
							<p>
								Address:484 Commonwealth Ave, Boston, MA 02215
								</p>
							
							<a href="tel:(617) 267-4499">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="https://indiaquality.com/">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
					</div>
					<div class="col-lg-7 col-md-12">
						<div class="card border-0">
							<img src="img/quality.jpg" class="img-fluid"/>
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
							<img src="img/img-1.png" class="img-fluid"/>
						</div>
					</div>
					<div class="col-lg-5 col-md-12 text-sec">
						<h2>Mela Modern Indian Cuisine</h2>
						<p> Classic curries, tandoori specialties & Indian-themed cocktails in elegant environs.
	
							<br/>
							<a href="https://melainboston.com/">melainboston.com</a>
							</p>
							<p>
								Address: 578 Tremont St suite1, Boston, MA 02118
								</p>
							
							<a href="tel:((617) 859-4805">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="https://melainboston.com/">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
					</div>
				</div>
			</div>
		</div>				
		</section>

		<section id="explore-food">
			<div class="explore-food wrapper">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="text-content text-center">
								<h2>Some More Food Resturants</h2>
								<p>EAT GOOD BE HEALTHY</p>
							</div>
						</div>
					</div>
					<div class="row pt-5">
						<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
							<div class="cardaa border">
								<img src="img/4 india-pavilion-photo-1.jpg" class="img-fluid"/>
								<div class="p-3">
									
									<h3>INDIAN PAVILION</h3>
									<p>unassuming Indian spot for regional staples, lunch buffet, take-out & delivery.

								
										</p>
										<a href="https://direct.chownow.com/order/3722/locations/4818">ordering.chownow.com</a>
									<p>
										Address: 17 Central Square, Cambridge, MA 02139
									</p>
									<a href="tel:(617) 547-7463">
										<button class="main-btn mt-4" >Call</button>
										</a>
									<a href="https://direct.chownow.com/order/3722/locations/4818	">
									<button class="main-btn mt-4" >Click Me</button>
									</a>
								</div>
							</div>	
						</div>
						<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
						<div class="cardaa border">
							<img src="img/7 vaanga boston.jpg" class="img-fluid"/>
							<div class="p-3">
								<h3>VAANGA BOSTON</h3>
								<p>Eclectic counter serve dishing up classic & creative South Indian dishes from dosas to fusion tacos.

								
								</p>
								<a href="http://places.singleplatform.com/vaanga/menu?ref=google">places.singleplatform.com</a>
							<p>
								Address: 102 Water St, Boston, MA 02109
							</p>
							<a href="tel:(617) 624-0300">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="http://places.singleplatform.com/vaanga/menu?ref=google">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
						</div>
						</div>
					</div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
						<div class="cardaa border">
							<img src="img/Harvest-of-India.avif" class="img-fluid"/>
							<div class="p-3">
								<h3>HARVEST OF INDIA</h3>
								<p>A vast Punjabi & South Indian menu plus a lunch buffet in a simple, colorful space.
									
									</p>
									<a href="https://www.harvestofindiacambridge.com/">harvestofindiacambridge.com</a>
							
								<p>
									Address: 18 Eliot St, Cambridge, MA 02138
								</p>
								<a href="tel:(617) 441-4034">
									<button class="main-btn mt-4" >Call</button>
									</a>
								<a href="https://www.harvestofindiacambridge.com/">
								<button class="main-btn mt-4" >Click Me</button>
								</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
						<div class="cardaa border">
							<img src="img/9 shanti.jpg" class="img-fluid"/>
							<div class="p-3">
								<h3>SHANTI RESTAUTANT</h3>
								<p>Indian & Bangladeshi dishes & a lunch buffet in an old-world setting with traditional accents.
									
									</p>
									<a href="https://www.shantiboston.com/menus">shantiboston.com</a>
							
								<p>
									Address: 7 Broad Canal Way, Cambridge, MA 02142
								</p>
								<a href="tel:(617) 714-5051">
									<button class="main-btn mt-4" >Call</button>
									</a>
								<a href="https://www.shantiboston.com/menus">
								<button class="main-btn mt-4" >Click Me</button>
								</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
						<div class="cardaa border">
							<img src="img/10 indain kitchen.jpg" class="img-fluid"/>
							<div class="p-3">
								<h3>INDIAN KITCHEN ALLSTON</h3>
								<p>An Indian Restaurant famous for its Punjabi cuisines.
									
								</p>
								<a href="https://www.indiankitchen450.com/order/">indiankitchen450.com</a>
						
							<p>
								Address: 450 Cambridge St, Allston, MA 02134
							</p>
							<a href="tel:(617) 254-1019">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="https://www.indiankitchen450.com/order/">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
						</div>
						</div>
					</div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
						<div class="cardaa border">
							<img src="img/11 desi_dhaba.jpeg" class="img-fluid"/>
							<div class="p-3">
								<h3>DESI DHABA</h3>
								<p>A leading Restaurant that has been serving authentic cuisine for years.
									
								</p>
								<a href="https://www.cambridgedesidhaba.net/">cambridgedesidhaba.net</a>
							
							<p>
								Address: 401 Massachusetts Ave, MA 02139
							</p>
							<a href="tel:(617) 547-4121">
								<button class="main-btn mt-4" >Call</button>
								</a>
							<a href="https://www.cambridgedesidhaba.net/">
							<button class="main-btn mt-4" >Click Me</button>
							</a>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</section>

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
											<p>The Halal Guys do a great job in dressing up those platters and chicken kebabs!

											I was in love at the first bite with the quality of their dressing and that is one of the most important thing in this cuisine.</p>
											<h5>SpongBob</h5>
											</Carousel.Item>  
											<Carousel.Item>
											<p>As someone whose never tasted Indian food before, I can say that this was the place where my love for it began. The taste was something special with a beautiful blend of spice and texture that melts in your mouth.</p>
											<h5>Shinchan</h5>
											</Carousel.Item> 
											<Carousel.Item>
											<p>Desi Dabha is definitely the best Indian food that I have had in the Boston/Cambridge area. The food is amazing and the servers have been very nice to us every time we come. I look forward to going back again and again. Highly recommend trying them out!</p>
											<h5>Goku</h5>
											</Carousel.Item>  
											<Carousel.Item>
											<p>Classic Indian cuisine, well made, and the prices haven't gone up that much since I was last there many years ago, making this one of the rare affordable places to get a great meal! Also, they are the only place I know of here that carries Old Monk beer, a wonderful, strong ale! </p>
											<h5>Tom</h5>
											</Carousel.Item>
											<Carousel.Item>
											<p>This is one of the best Indian restaurants available here in Boston.
											You will love their vegetarian food.
											If you don't want to wait there for your order make sure to order online and just visit there for pick up.</p>
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

		{/* Section - Footer							 */}
		<footer id="footer">
			<div class="footerc pt-5">
				<div class="container">
					<div class="row">
						<div class="col-md-6 text-center">
							<div class="footer-social pb-4 text-center">
								<a href="#"><i class="fab fa-facebook-f"></i></a>
								<a href="#"><i class="fab fa-twitter"></i></a>
								<a href="#"><i class="fab fa-youtube"></i></a>
								<a href="#"><i class="fab fa-dribbble"></i></a>
								<a href="#"><i class="fab fa-linkedin"></i></a>
								<a href="#"><i class="fab fa-instagram"></i></a>
							</div>
						</div>
						<div class="col-md-6">
							<form class="newsletter">
								<div class="d-flex">
									<input type="email" class="form-control" placeholder="Email US"/>
									<a href="mailto:mithani.jay98@gmail.com?cc=mithani.jay98@gmail.com&subject=Reg:Feedback"> <button class="main-btn" >Send Message</button></a>
								</div>
							</form>
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

export default Food;
