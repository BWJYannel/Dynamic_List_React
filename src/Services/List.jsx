import { Link} from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import './List.css';


export default function List(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div className="Main">
            <div className="first_div_child">
                <h1>Authentification</h1>
                <button><Link to="/Add">Ajouter</Link></button>
            </div>
            <div className="container_header">
                <h2>NOM</h2>
                <h2 className="modified_h2">PRENOMS</h2>
                <h2 className="age_h2">ÂGE</h2>
                <h2 className="sexe_h2">SEXE</h2>
            </div>
            {
                data.map((item,index)=>{
                    return(
                        <div className="Element" key={index}>
                            <div><h3>{item.first_name}</h3></div>
                            <div><p>{item.last_name}</p></div>
                            <div> <p>{item.age}</p></div>
                            <div><p>{item.sexe}</p></div>
                            <button ><Link to={`/Update/${item.id}`}>Modifier</Link></button>
                            <button onClick={()=>handleDelete(item.id)}>Supprimer</button>
                        </div>
                    );
                    function handleDelete(id){
                        const confirmation = window.confirm("Voulez vous vraiment Supprimer?");
                        if(confirmation){
                            axios.delete(`http://localhost:3000/users/${id}`)
                            .then(()=>{
                                alert("Suppression réussie")
                                window.location.reload(true)
                            })
                        }
                    }
                })
            }
        </div>
    );
}