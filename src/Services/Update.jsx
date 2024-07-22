import Person from '../Model/Person';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import React, { useState } from "react";
import './style.css';

export default function Update (){  
    const {id}=useParams();
    const [values,setValues]=useState(new Person (id,"","","",""))
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res=>{
            setValues(new Person(id, res.data.first_name, res.data.last_name, res.data.age, res.data.sexe))
        })
        .catch(err=>console.log(err))
    },[id])
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        values.sexe=document.getElementById('List_sexe').value
        if(values.first_name!=="" && values.last_name!=="" && values.age!=="" && values.sexe!==""){
            axios.put(`http://localhost:3000/users/${id}`, values)
            .then(()=>{
                alert("Modification réussie")
                navigate('/Home');
            })
            .catch(err=>console.log(err))
        }else{
            navigate('/Home');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Modification</h2>
            <input type="text" placeholder='Nom' name='nom2' value={values.first_name} onChange={e=>setValues({...values,first_name:e.target.value})}/>
            <input type="text" placeholder='Prenom' name='prenom2' value={values.last_name} onChange={e=>setValues({...values,last_name:e.target.value})}/>
            <input type="text" placeholder='Âge' name='age2' value={values.age} onChange={e=>setValues({...values,age:e.target.value})}/>
            <select id="List_sexe">
                <option value="Sexe">Sexe</option>
                <option value="Masculin">Masculin</option>
                <option value="Féminin">Féminin</option>
            </select>
            <button >Valider</button>
        </form>
    );
}

