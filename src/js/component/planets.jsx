import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "/workspaces/Blog_Stars_Wars_Mateo_Goni/src/styles/home.css"
  
const Planets = () => {

  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const addToFavorites = (planet) => {
    actions.addFavorite(planet); 
  };

    return (
      <div className="d-flex carrousel">
      {store.planets && store.planets.map((elem, index) => (
        <div key={index} className="card mx-3" style={{ width: "18rem",flex: "0 0 auto" }}>
          <img onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} className="firstImg" src={`https://starwars-visualguide.com/assets/img/planets/${elem.id}.jpg`} />
          <div className="card-body">
            <h5 className="card-title">{elem.name}</h5>
            <ul><li>Population: {elem.population}</li>
            <li>Terrain: {elem.terrain}</li>
           
         
           </ul>
            <div className="container d-flex justify-content-between">
              <Link to={"/single/planet/"+ elem.id} className="btn btn-outline-primary">
                Learn More
              </Link>
              <button className="btn btn-outline-warning text-warning">
                <i className="far fa-heart" onClick={()=>{addToFavorites(elem)}}></i>
              </button>
            </div>
          </div>
        </div>
      ))}
       ))
        </div>
    )
}

export default Planets;