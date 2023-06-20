import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTypes } from "./redux/actions";
import './App.css';
import {
	Routes,
	Route
} from 'react-router-dom';


import LandingPage from "./views/Landing/Landing";
import HomePage from './views/Home/Home';
import CreatePage from "./views/CreatePoke/CreatePoke"
import DetailsPage from "./views/Details/Detail";

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTypes());  //llamada de los tipos al iniciar la app
	}, []); //array de dependencia


	return (
		<Routes>
			<Route  path='/'  element={<LandingPage/>} />
			<Route  path='/home' element={<HomePage/>}/>
			<Route  path='/createPoke' element={<CreatePage/>} />
			<Route path='/details/:id'element={<DetailsPage/>} />
		</Routes>
	);
}

export default App;


