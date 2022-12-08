import styles from "./styles.module.css";
import { Link } from "react-router-dom";


const Food = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.origin = 'http://localhost:3000';
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
					<Link to="/login" >
						Logout
					</Link>
				</button>
			</nav>
		</div>
		This is Food Page
		</html>
		
	);
};

export default Food;
