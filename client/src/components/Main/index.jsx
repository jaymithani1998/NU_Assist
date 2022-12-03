import styles from "./styles.module.css";
import img1 from './images/first.png'; 
import img2 from './images/second.png'; 
import img3 from './images/third.png'; 
import img4 from './images/forth.png'; 
import faq1 from './images/faq1.png'; 
import faq2 from './images/faq2.png'; 
import faq3 from './images/faq3.png'; 
import faq4 from './images/faq4.jpg'; 

//IMPORT FOR LINK
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
			{/* code for adding navlinks */}
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>NU Assist</h1>
				<Link to="/" className={styles.navbar_element}>
						Home
				</Link>
				<Link to="/" className={styles.navbar_element}>
					Accomodation
				</Link>
				<Link to="/" className={styles.navbar_element}>
					Food Joints
				</Link>
				<Link to="/" className={styles.navbar_element}>
					Courses
				</Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		{/* code for carousel */}
		<div>
			<Carousel>
				<Carousel.Item>
				<img src={img1} alt="logo" width="100%"/>
				</Carousel.Item>  
				<Carousel.Item>
				<img src={img2} alt="logo" width="100%"/>
				</Carousel.Item>  
				<Carousel.Item>
				<img src={img3} alt="logo" width="100%"/>
				</Carousel.Item>  
				<Carousel.Item>
				<img src={img4} alt="logo" width="100%"/>
				</Carousel.Item>  
			</Carousel>
		</div>
		<div>
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="0">
				<Accordion.Header><h1>DISCOVER</h1></Accordion.Header>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Websites for housing and accomodation</Accordion.Header>
				<Accordion.Body>
				<ul>
					<li>Facebook groups of Northeastern</li>
					<li>Housing group(s)</li>
					<li><a href="https://boston.craigslist.org/search/hhh?query=Northeastern#search=1~gallery~0~0">Craigslist</a></li>
					<li><a href="https://bostonpads.com/boston-apartments/">Bostonpads</a> </li>
					<li><a href="http://offcampuscribs.com">OffCampusCribs.com</a></li>
					<li><a href="https://www.zillow.com">Zillow</a> </li>
				</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header>Recommended Locations</Accordion.Header>
				<Accordion.Body>
				<ul>
					<li><strong>Huntington Avenue →</strong>Closest to the NEU Campus but it's quite expensive. Depends upon the location as well in Huntington Avenue.</li>
					<li><strong>Mission Main →</strong>Best area to stay for NEU students, 2 people can easily share the room given the room and no. of people sharing. Also, preferred destination by Red Eye Drivers for First Drop off.</li>
					<li><strong>Peterborough St, Jersey St →</strong> Best area to stay and most students reside in this area.
						Close to Target, Star, Restaurants, Movie Theatre etc.
						</li>
					<li><strong>Hemenway street →</strong> Good Locality and affordable as well. Apartments are spacious as
						well.
						</li>
					<li><strong>Park Drive →</strong> Convenient and reliable. Fits in the budget but rooms are not spacious.</li>
					<li><strong>City View apartments →</strong> Rooms have best view of Boston, but little expensive.</li>
					<li><strong>Malden (30 mins from NEU) →</strong> Rooms are Spacious, and rent is also convenient for one
						person to share a room.
						</li>
					<li><strong>Malden (30 mins from NEU) →</strong>≈ Rooms are Spacious, and rent is also
						convenient for one person to share a room
						</li>
					<li><strong>Mission Hill (25 - 30 mins from NEU) →</strong> Rooms are Spacious and affordable as well</li>
					<li><strong>Boylston St →</strong> Happening area and affordable rent but room size is quite small</li>
				</ul> 
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header>Grocery Stores</Accordion.Header>
				<Accordion.Body>
				<ul>
					<li><strong>Huntington Avenue →</strong>Closest to the NEU Campus but it's quite expensive. Depends upon the location as well in Huntington Avenue.</li>
					<li><strong>Mission Main →</strong>Best area to stay for NEU students, 2 people can easily share the room given the room and no. of people sharing. Also, preferred destination by Red Eye Drivers for First Drop off.</li>
					<li><strong>Peterborough St, Jersey St →</strong> Best area to stay and most students reside in this area.
						Close to Target, Star, Restaurants, Movie Theatre etc.
						</li>
					<li><strong>Hemenway street →</strong> Good Locality and affordable as well. Apartments are spacious as
						well.
						</li>
					<li><strong>Park Drive →</strong> Convenient and reliable. Fits in the budget but rooms are not spacious.</li>
					<li><strong>City View apartments →</strong> Rooms have best view of Boston, but little expensive.</li>
					<li><strong>Malden (30 mins from NEU) →</strong> Rooms are Spacious, and rent is also convenient for one
						person to share a room.
						</li>
					<li><strong>Malden (30 mins from NEU) →</strong>≈ Rooms are Spacious, and rent is also
						convenient for one person to share a room
						</li>
					<li><strong>Mission Hill (25 - 30 mins from NEU) →</strong> Rooms are Spacious and affordable as well</li>
					<li><strong>Boylston St →</strong> Happening area and affordable rent but room size is quite small</li>
				</ul> 
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
		</div>
		<div class="container mt-10" >
			<div class="row">
				<div className='col-3'>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={faq1} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
					</Card>
				</div>
				<div className='col-3'>
					<Card style={{ width: '18rem'}}>
						<Card.Img variant="top" src={faq2} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
					</Card>
				</div>
				<div className='col-3'>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={faq4} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
					</Card>
				</div>
			</div>
		</div>
		</html>
	);
};

export default Main;
