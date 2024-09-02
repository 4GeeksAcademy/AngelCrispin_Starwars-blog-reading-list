import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const Card = (props) => {

    const {store,actions} = useContext(Context);

    return(

            <div className="card">
                <Link to={"/"+props.type+"/"+props.data.uid}>
                    <img src={"https://starwars-visualguide.com/assets/img/"+props.type+"/"+props.data.uid+".jpg"} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}/>
                </Link>
                    <div className="card-body d-flex justify-content-center gap-2">
                        <p className="card-text">{props.data.name}</p>
                        <div className={actions.getFavorite(props.type,props.data.uid)} onClick={()=>{actions.setFavorite(props.type,props.data.uid)}}><i className={"fa-solid fa-heart "}></i></div>
                    </div>
                
            </div>
    );
}

export default Card;
