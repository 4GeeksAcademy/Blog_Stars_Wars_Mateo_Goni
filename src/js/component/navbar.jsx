import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Star-Wars-Logo-1.png";
import "/workspaces/Blog_Stars_Wars_Mateo_Goni/src/styles/home.css";
import { Context } from "../store/appContext"; 

export const Navbar = () => {
    const { store, actions } = useContext(Context); 

    const Eliminar = (item) => {
        actions.eliminar(item); 
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
            <img src={Logo} className="logo" alt="logo-star-wars" />
            </Link>
            <div className="dropdown ms-auto">
                <button 
                    type="button" 
                    className="btn btn-primary btn-sm dropdown-toggle" 
                    id="dropdownMenuButton" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    Favorites <span>({store.favorites.length})</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((item, index) => (
                            <div key={index}>
                                <li className="dropdown-item">
                                    {item.name}
                                    <button onClick={() => Eliminar(item)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </li>
                            </div>
                        ))
                    ) : (
                        <li className="dropdown-item">empty()</li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
