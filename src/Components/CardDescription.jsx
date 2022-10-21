import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './CardDescription.css';
import { HashLoader } from "react-spinners";

function CardDescription(){

    let [data, setData] = useState([]);
    let {id} = useParams();


    useEffect(() => {
        const getDetails = async() => {
            try{
                
                const response = await axios.get("https://www.breakingbadapi.com/api/characters/"+id);
                setData(response.data[0]);
                console.log(data);

            } catch(error){
                
                console.log(error);
            }
        }
        getDetails();
    })

    if(data.appearance !== undefined){
        return(
            <div className="CardDescMain">
                <div className="DetailsContainer">
                    <div className="DetailsImage">
                        <img src={data.img} alt="CharacterImage" />
                    </div>
                    <div className="DetailsText">
                        <h1> {data.name} </h1>
                        <p>Appearance:&nbsp; {data.appearance.length>0? data.appearance.join(', ') : 'None'}</p>
                        <p>Better call saul appearance:&nbsp; {data.better_call_saul_appearance.length>0 ? data.better_call_saul_appearance.join(', '): 'None'}</p> 
                        <p>Birthday:&nbsp; {data.birthday}</p>
                        <p>Category:&nbsp; {data.category}</p>
                        <p>Nickname:&nbsp; {data.nickname}</p>
                        <p>Occupation:&nbsp; {data.occupation.length > 0 ? data.occupation.join(', ') : 'None'}</p>
                        <p>Portrayed:&nbsp; {data.portrayed}</p>
                        
                        <p>Status:&nbsp; {data.status}</p>
                    </div>
    
                </div>
            </div>
        );    
    } else{
        
        return(
            <div className="loaderDesc">
                <HashLoader color="#38E54D" size={100} />
            </div>
            
            
        );
    }

    
}

export default CardDescription;