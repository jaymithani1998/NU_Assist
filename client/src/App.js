import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import About from "./pages/About/About";

function App() {
	const user = localStorage.getItem("token");
{/* adding routes */}
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/accomodation" exact element={<Main />} />
			<Route path="/food" exact element={<Main />} />
			<Route path="/courses" exact element={<Main />} />
		</Routes>
	);
}

export default App;
