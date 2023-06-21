
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTypes } from "./redux/actions";
import './App.css';
import {
	Routes,
	Route,
	Outlet,
	Link
} from 'react-router-dom';


import LandingPage from "./views/Landing/Landing";
import HomePage from './views/Home/Home';
import CreatePage from "./views/CreatePoke/CreatePoke"
import DetailsPage from "./views/Details/Detail";
import About from "./views/Aboutme/About"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTypes());  //llamada de los tipos al iniciar la app
	}, []); //array de dependencia


	return (
		<Routes>
			<Route  path='/'  element={<LandingPage/>} />
			<Route  path='/home' element={<HomePage/>}/>
			<Route  path='/about' element={<About/>}/>
			<Route  path='/createPoke' element={<CreatePage/>} />
			<Route path='/details/:id' element={<DetailsPage/>} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

function NotFound() {
	return (
		<div class="cuatro">
			<h2 class="cuatrot">Error 404: Página no encontrada</h2>
			<p class="cuatroi"> La página que estás buscando no existe.</p>
			<Link to="/home">
			<div class="cuatrob" ></div>
			</Link>
		</div>
	);
}

export default App;
