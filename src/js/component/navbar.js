import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const [allFavorites,setAllFavorites] = useState([]);
	const {store,actions} = useContext(Context);

	useEffect(()=>{
		
		let favorites = [];
		store.favorites.characters.map((item)=>{
			const characters = store.characters.filter(x => x.uid == item);
            if(characters.length>0){
				favorites.push(["Characters",item,characters[0].name])
            }
		})
		store.favorites.starships.map((item)=>{
			const starships = store.starships.filter(x => x.uid == item);
            if(starships.length>0){
				favorites.push(["Starships",item,starships[0].name])
            }
		})
		store.favorites.planets.map((item)=>{
			const planets = store.planets.filter(x => x.uid == item);
            if(planets.length>0){
				favorites.push(["Planets",item,planets[0].name])
            }
		})
		setAllFavorites(favorites);	

	},[store.favorites])

	return (
		<div className="d-flex justify-content-between w-100">
			<Link to="/" className="p-5">
				<img className="img-fluid logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
			</Link>
			<div className="p-5">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {allFavorites.length}
					</button>
					<ul className="dropdown-menu">
						{allFavorites.length==0?<li className="text-center">Is empty</li>:allFavorites.map((item,index)=>{return <li className="d-flex" key={item[0]+item[1]}><Link to={"/"+item[0].toLowerCase()+"/"+item[1]} className="dropdown-item">{item[0]+" - "+item[2]}</Link> <div onClick={()=>actions.setFavorite(item[0].toLowerCase(),item[1]) }><i className="fa fa-trash" ></i></div></li>})}
					</ul>
				</div>
			</div>
		</div>
	);
};
