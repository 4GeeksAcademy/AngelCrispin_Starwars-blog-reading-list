const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			starships: [],
			planets: [],
			favorites: {characters:[],starships:[],planets:[]},
			detail: null
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people",{method:"GET"})
				.then((response) => response.json())
				.then((data) => {
					setStore({characters:data.results});
					localStorage.setItem('characters', JSON.stringify(data.results));
				})
				.catch((error)=> console.log(error))
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships",{method:"GET"})
				.then((response) => response.json())
				.then((data) => {
					setStore({starships:data.results});
					localStorage.setItem('starships', JSON.stringify(data.results));
				})
				.catch((error)=> console.log(error))
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets",{method:"GET"})
				.then((response) => response.json())
				.then((data) => {
					setStore({planets:data.results});
					localStorage.setItem('planets', JSON.stringify(data.results));
				})
				.catch((error)=> console.log(error))
			},
			getDetail: (url) => {
				fetch(url,{method:"GET"})
				.then((response) => response.json())
				.then((data) => setStore({detail:data.result.properties}))
				.catch((error)=> console.log(error))
			},
			setStore: (data) => {
				setStore(data);
			},
			checkCharacters: () => {
				const characters = JSON.parse(localStorage.getItem('characters'));
				if (characters) {
					setStore({characters:characters})
				} else {
					getActions().getCharacters();
				}
			},
			checkStarships: () => {
				const starships = JSON.parse(localStorage.getItem('starships'));
				if (starships) {
					setStore({starships:starships})
				} else {
					getActions().getStarships();
				}
			},
			checkFavorites: () => {
				const favorites = JSON.parse(localStorage.getItem('favorites')) || {characters:[],starships:[],planets:[]};
				setStore({favorites:favorites})
			},
			checkPlanets: () => {
				const planets = JSON.parse(localStorage.getItem('planets'));
				if (planets) {
					setStore({planets:planets})
				} else {
					getActions().getPlanets();
				}
			},
			setFavorite: (type,uid) => {

				const favorites = JSON.parse(localStorage.getItem('favorites')) || {characters:[],starships:[],planets:[]};
				let favoritesCharacters = favorites.characters;
				let favoritesStarships = favorites.starships;
				let favoritesPlanets = favorites.planets;

				favoritesCharacters = type=="characters"?getActions().changeFavorites(favoritesCharacters,uid):favoritesCharacters;
				favoritesStarships = type=="starships"?getActions().changeFavorites(favoritesStarships,uid):favoritesStarships;
				favoritesPlanets = type=="planets"?getActions().changeFavorites(favoritesPlanets,uid):favoritesPlanets;

				setStore({favorites:{characters:favoritesCharacters,starships:favoritesStarships,planets:favoritesPlanets}})
				localStorage.setItem('favorites', JSON.stringify({characters:favoritesCharacters,starships:favoritesStarships,planets:favoritesPlanets}));
				console.log({characters:favoritesCharacters,starships:favoritesStarships,planets:favoritesPlanets})
			},
			changeFavorites(array,id){
				
				if(array.length>0){
					array.find(x=>x==id)?array.splice(array.indexOf(id), 1):array.push(id);
				} else {
					array.push(id);
				}
				return array;
			},
			getFavorite: (type,id) => {

				let favorite = false;
				const favorites = JSON.parse(localStorage.getItem('favorites')) || {characters:[],starships:[],planets:[]};

				favorites[type].map((item)=>{if(item==id)favorite=true});
				
				return favorite?"favorite"	:"";

			},
		}
	};
};

export default getState;
