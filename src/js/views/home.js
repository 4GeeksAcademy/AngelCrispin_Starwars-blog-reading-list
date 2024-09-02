import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import ListCard from '../component/listCard'
import {Context} from '../store/appContext'


export const Home = () => {

	const {store,actions} = useContext(Context)

	useEffect(()=>{
		
	},[store.favorites]);

	return (
	
	<div className="text-center mt-5">
		<ListCard type="Characters" data={store.characters}/>
		<ListCard type="Starships" data={store.starships}/>
		<ListCard type="Planets" data={store.planets}/>
	</div>

	);
}
