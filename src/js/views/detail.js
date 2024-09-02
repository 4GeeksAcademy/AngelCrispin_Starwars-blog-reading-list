import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';


const Detail = (props) => {

    const {store,actions} = useContext(Context);
	const { id=0 } = useParams();

    useEffect(()=>{
        actions.setStore({detail:null});
        if(props.type=="characters"){
            const characters = store.characters.filter(x => x.uid == id);
            if(characters.length>0){
                actions.getDetail(characters[0].url);
            }
        }
        if(props.type=="starships"){
            const starships = store.starships.filter(x => x.uid == id);
            if(starships.length>0){
                actions.getDetail(starships[0].url);
            }
        }
        if(props.type=="planets"){
            const planets = store.planets.filter(x => x.uid == id);
            if(planets.length>0){
                actions.getDetail(planets[0].url);
            }
        }
        console.log(store.detail);
    },[store.characters,store.starships,store.planets,id]);

    return store.detail==null?(<h1 className='text-center py-auto'>Sin informacion</h1>):(
        <div className="detail row">
            <img className='image-detail col-12 col-lg-6' src={"https://starwars-visualguide.com/assets/img/"+props.type+"/"+id+".jpg"} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}/>
            <div className="information-detail text-center py-auto col-12 col-lg-6">
                {props.type=="characters"?(<>
                    <h1 className="card-title m-5">{store.detail.name}</h1>
                    <p className="card-text">Birth Year: {store.detail.birth_year}</p>
                    <p className="card-text">Eye color: {store.detail.eye_color}</p>
                    <p className="card-text">Gender: {store.detail.gender}</p>
                    <p className="card-text">Hair color: {store.detail.hair_color}</p>
                    <p className="card-text">Height: {store.detail.height}</p>
                    <p className="card-text">Mass: {store.detail.mass}</p>
                    <p className="card-text">Skin color: {store.detail.skin_color}</p>
                </>):(<></>)}
                {props.type=="starships"?(<>
                    <h1 className="card-title m-5">{store.detail.name}</h1>
                    <p className="card-text">Model: {store.detail.model}</p>
                    <p className="card-text">Starship class: {store.detail.starship_class}</p>
                    <p className="card-text">Manufacturer: {store.detail.manufacturer}</p>
                    <p className="card-text">Cost in credits: {store.detail.cost_in_credits}</p>
                    <p className="card-text">Length: {store.detail.length}</p>
                    <p className="card-text">Crew: {store.detail.crew}</p>
                    <p className="card-text">Passengers: {store.detail.passengers}</p>
                    <p className="card-text">Max atmosphering speed: {store.detail.max_atmosphering_speed}</p>
                    <p className="card-text">Hyperdrive rating: {store.detail.hyperdrive_rating}</p>
                    <p className="card-text">MGLT: {store.detail.MGLT}</p>
                    <p className="card-text">Cargo capacity: {store.detail.cargo_capacity}</p>
                    <p className="card-text">Consumables: {store.detail.consumables}</p>
                </>):(<></>)}
                {props.type=="planets"?(<>
                    <h1 className="card-title m-5">{store.detail.name}</h1>
                    <p className="card-text">Diameter: {store.detail.diameter}</p>
                    <p className="card-text">Rotation period: {store.detail.rotation_period}</p>
                    <p className="card-text">Orbital period: {store.detail.orbital_period}</p>
                    <p className="card-text">Gravity: {store.detail.gravity}</p>
                    <p className="card-text">Population: {store.detail.population}</p>
                    <p className="card-text">Climate: {store.detail.climate}</p>
                    <p className="card-text">Terrain: {store.detail.terrain}</p>
                    <p className="card-text">Surface water: {store.detail.surface_water}</p>
                </>):(<></>)}
            </div>
        </div>
    );
}

export default Detail;
