import styles from "./styles.module.css";
import "./style.css";
import { Link } from "react-router-dom";
import topBanner from "./images/courseTop.png"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import cs from "./images/courses/cs.png";
import ece from "./images/courses/ece.png";
import is from "./images/courses/is.png";
import reg from "./images/courses/reg.png";


const Courses = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.origin = 'http://localhost:3000';
	};

	const accTopBannerStyle =`
	.top-banner {
		width: 100%;
        height:100vh;
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
		<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100">
		<section id="home">
        <div class="container-fluid px-0 top-banner" style={{ backgroundImage: `url(${topBanner})`}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6">
                        <h1><span>COURSES</span><br/> WE ARE HERE FOR YOU</h1>
                        <h2>GET TO KNOW YOUR INTREST </h2>
                    </div>
                </div>
            </div>
        	</div>
    	</section>

		{/* Section - About  */}
		<section id="about">
        	<div class="about-section wrapper">
            <div class="row">
                {/* <div class="col-4">
                    <div id="list-example" class="list-group">
                        <a class="list-group-item list-group-item-action" href="#list-item-1">Master of Science in Computer Science</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-2">Master of Science in Electrical & Computer Engineering</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-3">Master of Science in Information Systems</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-4">Master of Science in Regulatory Affairs</a>
						<a class="list-group-item list-group-item-action" href="https://catalog.northeastern.edu/graduate/">More Courses - Course Catalog</a>
						
                    </div>
                </div> */}
                <div class="col-12">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
                        class="scrollspy-example" tabindex="0">
                        <h4 id="list-item-1" style={{textAlign:"center"}}>Master of Science in Computer Science</h4>
                        <img src={cs} class="img-fluid"/>                        
                        <p style={{padding:"25px"}}>
                            Northeastern University’s Master of Science in Computer Science is designed to prepare
                            students for a variety of careers in computer science. The program combines both computing
                            and important application domains—enabling you to increase your broad-based knowledge in the
                            field while allowing you to delve deeper in specific areas through elective courses.
                            Master of Science in Computer Science—Align students come from a wide variety of
                            backgrounds, with undergraduate majors including math, biology, history, engineering, and
                            classics. In this program, students have an opportunity to acquire both the knowledge needed
                            to transition into a new career and the practical skills to build the next great app.
                            <br/>
                            <br/>
                            Core Requirements :
                            <br/>
                            Programming : Programming Design Paradigm
                            Algorithms : Algorithms
                            <br/>
                            Breadth Areas:
                            <br/>
                            Complete three courses from two of the three following breadth areas:
                            Systems and Software , Theory and Security , Artificial Intelligence and Data Science.
                            <br/>
                            Electives:
                            <br/>
                            Complete 12 semester hours from the following:
                            Mixed Reality , Master’s Project , Readings , Thesis , Foundations of Information Assurance
                            , Computer System Security , Software Security Practices , Introduction to Data Management
                            and Processing , Unsupervised Machine Learning and Data Mining.
                            <br/>
                            Program Credit/GPA Requirements:
                            <br/>
                            32 total semester hours required Minimum 3.000GPA required
						</p>
                        <h4 id="list-item-2" style={{textAlign:"center"}}>Master of Science in Electrical & Computer Engineering </h4>
                        <img src={ece} class="img-fluid"/>

                        <p style={{padding:"25px"}}>
                            As an MS in Electrical and Computer Engineering (Master of Science) student, you have the
                            flexibility to specialize in an area of interest with eight concentrations , research areas,
                            and experiential learning options. You will receive deep fundamental and practical knowledge
                            in the various disciplines of electrical and computer engineering through a strong
                            curriculum and research opportunities.
                            Research ranges from the design, analysis, and optimization of high-performance computing
                            systems, to the fabrication of cutting-edge microelectromechanical actuators, to new
                            research frontiers on smart power grids, metamaterials, biomedical signal processing, and
                            communication systems. Students also have the opportunity to gain up to eight months of
                            professional experience as part of the academic curriculum though our top-ranked cooperative
                            education program. Located in Boston, a hub of high tech, biotech, academia, the department
                            has strong ties to local industry and the world-famous hospitals and medical centers, and is
                            involved in many joint research projects with them, others across the nation, and has
                            significant government-funded research.
                            The department educates the next generation of highly skilled engineers and researchers with
                            necessary skills to address the future needs of industry, government, and humanity.
                            <br/>
                            <br/>
                            Concentrations :
                            <br/>
                            At the time of applying to the MS in Electrical and Computer Engineering program, the
                            applicants select their preferred track as well as their concentration of study from the
                            eight concentrations offered by the ECE department.
                            <br/>
                            COMMUNICATIONS, CONTROL, AND SIGNAL PROCESSING
                            COMPUTER NETWORKS AND SECURITY
                            COMPUTER SYSTEMS AND SOFTWARE
                            COMPUTER VISION, MACHINE LEARNING, AND ALGORITHMS
                            ELECTROMAGNETICS, PLASMA, AND OPTICS
                            HARDWARE AND SOFTWARE FOR MACHINE INTELLIGENCE
                            MICROSYSTEMS, MATERIALS, AND DEVICES
                            POWER SYSTEMS
                            <br/>
                            Program Credit/GPA Requirements:
                            <br/>
                            32 total semester hours required Minimum 3.000 GPA required
                        </p>
                        <h4 id="list-item-3" style={{textAlign:"center"}}>Master of Science in Information Systems </h4>
                        <img src={is} class="img-fluid"/>
                        <p style={{padding:"25px"}}>
                            We offer cutting-edge expertise in a variety of courses that combine technological advances
                            and business practices. We stress creative and inventive approaches to problem solving,
                            which necessitates empowering students so that they can take charge of their own software
                            projects to become originally productive. Our information systems program is as much an art
                            as a science. It bypasses mechanical learning and highlights the value and excitement of
                            engineering thinking that gets things done efficiently as well as imaginatively. We balance
                            theory and practice, on the premise that they are always intertwined and interdependent.
                            We seek to provide a basic foundation for our students and then seek to push them to new
                            heights to advance their information technology skills in a way that keeps up and, better
                            yet, exceeds the necessarily fast pace of this progressive field. It is not for us just a
                            question of not being left behind; we strive to be at the forefront of software innovation
                            in an effort to transform contemporary society even more radically than technology has
                            already done—to take gigantic strides in business, medicine, education, and security. 
                            <br/>
                            <br/>
                            The program offers a wide range of courses that reflect current and future industry trends:
                            <br/>
                            Cryptocurrency and Smart Contract Engineering
                            Engineering of Big-Data Systems
                            Business Intelligence and Data Analytics
                            Cyber-Security Engineering and Development
                            Digital Business
                            Full-Stack Software Engineering
                            User Experience Design
                            Data Science and Machine Learning Systems Engineering
                            <br/>
                            <br/>
                            Core Requirements:
                            <br/>
                            Application Engineering and Development
                            Concentrations
                            Complete one of the following concentrations:
                            Big Data Systems and Analytics
                            General Information Systems
                            Intelligent Systems
                            Smart Contracts
                            User Experience
                            <br/>
                            Program Credit/GPA Requirements:
                            <br/>
                            32 total semester hours requiredMinimum 3.000 GPA required
                        </p>
                        <h4 id="list-item-4" style={{textAlign:"center"}}>Master of Science in Regulatory Affairs</h4>
                        <img src={reg} class="img-fluid"/>
                        <p style={{padding:"25px"}}>
                            The rapid advancement of technology within healthcare and other sectors has driven the
                            evolution of a complex global regulatory landscape and concurrently created the need for
                            professionals with the skills necessary to facilitate the commercialization of products used
                            therein. In response to this demand, Northeastern University’s College of Professional
                            Studies offers the Master of Science in Regulatory Affairs degree.
                            This unique graduate degree is designed to both broaden and deepen the student’s
                            understanding of current global compliance requirements and their practical application in
                            the design, development, approval, and postmarketing of products utilized within regulated
                            industries. Courses within this degree program provide students with the opportunity to
                            integrate scientific and technical knowledge and engineering and regulatory perspectives
                            within the larger context of global product commercialization. From research and discovery
                            through the postmarket phase of product utilization, the Master of Science in Regulatory
                            Affairs degree examines the processes required for stakeholders to maintain compliance to
                            product standards and regulations throughout the global marketplace.
                            <br/>
                            <br/>
                            Required Courses:
                            <br/>
                            Human Experimentation: Methodological Issues Fundamentals
                            Introduction to Regulatory Compliance and Practice
                            Pharmaceutical and Medical Device Law: Topics and Cases
                            Legal Issues in International Food, Drug, and Medical Device Regulation
                            Introduction to Safety Sciences
                            Regulatory Strategy for Product Development and Life-Cycle Management
                            <br/>
                            Capstone
                            Practical Applications in Global Regulatory Affairs
                            <br/>
                            Concentrations:
                            <br/>
                            Biopharmaceutical Regulatory Affairs
                            Clinical Research Regulatory Affairs
                            Medical Device Regulatory Affairs
                            Nonclinical Biomedical Product Regulation
                            Quality Assurance and Compliance
                            <br/>
                            Elective Courses
                            General Electives
                            Regulatory Affairs of Food
                            International Regulatory Affairs
                            <br/>
                            Program Credit/GPA Requirements:
                            <br/>
                            45 total quarter hours required Minimum 3.000 GPA required
                        </p>
                    </div>
                </div>
            </div>
        </div>
   		 </section>

		{/* Section - Professor's  */}
		<section id="explore-food">
        <div class="explore-food wrapper">
			<div class="container">
				<div class="row">
						<div class="col-sm-12">
							<div class="text-content text-center">
								<h2>Professors</h2>
								
							</div>
						</div>
					</div>
				</div>
				<div class="row pt-5">
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
                        <div class="card border">
                            {/* <img src="img/goku-base-download-son-goku-base-comics-book-manga-clothing-transparent-png-638787-removebg-preview.png" class="img-fluid"/> */}
                            <div class="p-3">
                                <h3>Prof.Vishal Chawla</h3>
                                <p>Professor Information Systems</p>
                                
                                <a href="https://www.coursicle.com/neu/professors/Vishal+Chawla/">
                                    <button class="main-btn mt-4">Learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
                        <div class="card border">
                            {/* <img src="img/SHIN.webp" class="img-fluid"/> */}
                            <div class="p-3">
                                <h3>Prof.Khaled Bugrara</h3>
                                <p>MS Information System Dean</p>

                                <a href="https://www.northeastern.edu/graduate/bio/khaled-bugrara/">
                                    <button class="main-btn mt-4">Learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
                        <div class="card border">
                            {/* <img src="img/goku-base-download-son-goku-base-comics-book-manga-clothing-transparent-png-638787-removebg-preview.png" class="img-fluid"/> */}
                            <div class="p-3">
                                <h3>Prof.Deniz Erdogmus</h3>
                                <p>Professor and Vice Chair of Research, ECE</p>
                                <a href="https://www.northeastern.edu/graduate/bio/deniz-erdogmus/">
                                    <button class="main-btn mt-4">Learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
                        <div class="card border">
                            {/* <img src="img/tom-5158824_1280.webp" class="img-fluid"/> */}
                            <div class="p-3">
                                <h3>Prof. Stephen Amato</h3>
                                <p>Professor </p>
                                
                                <a href="https://www.northeastern.edu/graduate/program/master-of-science-in-regulatory-affairs-boston-18359/">
                                    <button class="main-btn mt-4">Learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
                        <div class="card border">
                            {/* <img src="img/goku-base-download-son-goku-base-comics-book-manga-clothing-transparent-png-638787-removebg-preview.png" class="img-fluid"/> */}
                            <div class="p-3">
                                <h3>Prof.Amit Shesh</h3>
                                <p>Professor Computer Science</p>
                                
                                <a href="https://www.northeastern.edu/graduate/bio/amit-shesh/">
                                    <button class="main-btn mt-4">Learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
					<div class="col-lg-4 colmd-6 mb-lg-0 mb-5">
                        <div class="card border">
                            {/* <img src="img/goku-base-download-son-goku-base-comics-book-manga-clothing-transparent-png-638787-removebg-preview.png" class="img-fluid"/> */}
                            <div class="p-3">
                                <h3>Prof.Tejas Parikh</h3>
                                <p>Professor CSYE</p>
                                
                                <a href="https://tejasparikh.com/">
                                    <button class="main-btn mt-4">Learn more</button>
                                </a>
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
											<p>Northeastern University has developed a reputation for its strong cooperative programs and commitment to practical learning, and its computer science department is no exception. Many aspiring CS students lean towards the most prestigious schools–those traditional paragons of education.</p>
                                        	<h5>SpongBob</h5>
											</Carousel.Item>  
											<Carousel.Item>
											<p>Thanks a lot guys for your interesting answers!! It has been two months here now at Northeastern University for my MS in Information Systems. I will never regret for my choice as Northeastern University(NEU) .</p>
                                        	<h5>Shinchan</h5>
											</Carousel.Item> 
											<Carousel.Item>
											<p>Northeastern's signature experiential program, cooperative education (coop) enables students, starting as early as their second year, to integrate periods of classroom study with up to three six-month periods of full-time employment. </p>
                                        	<h5>Goku</h5>
											</Carousel.Item>  
											<Carousel.Item>
											<p>I am currently studying at this institution. What I heard from any professionals that I spoke to prior to choosing Northeastern is that their companies love the coops. The coops are generally smart and capable. Coop at Northeastern is one of the factors that make this university shine compared to others </p>
                                        	<h5>Tom</h5>
											</Carousel.Item>
											<Carousel.Item>
											<p>I can only speak about the Computer Science program. The professors are really smart. Most of them do research in their respective fields. Northeastern is world-renowned, many international students from all over the world come here to study.</p>
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

		</body>
		</html>
		

		
	);
};

export default Courses;
