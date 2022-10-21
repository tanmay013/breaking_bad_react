import React from "react";
import HeadSection from "./HeadSection";
import "./HomePage.css"; 
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import HashLoader from "react-spinners/HashLoader";
import Card from "./Card";

function HomePage(){

    const [data,setData]=useState([]);
    const [load,setLoad]=useState(true);
    const [off,setOff]=useState(12);

    useEffect(()=> {
        async function getData(){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=12&offset=0");
            setData(res.data);
        }
        getData();
    },[]);

    const [stopLoad, setStopLoad] = useState(false);

    async function changeData(e){
        const text=e.target.value;
        if(text.length>=3){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?name="+text);
            setData(res.data);
            setStopLoad(true);
        }
        if(text===""){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=12&offset=0");
            setData(res.data);
            setStopLoad(false);
        }
    }

    const fetchData= async()=>{
        setOff(off+6);
        if(off>60 || stopLoad){
            setLoad(false);
        }else{
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=6&offset="+off);
            const arr=res.data;
            setData([...data,...arr]);
        }
    }


    return(
        <div className="homePageMain">
            <HeadSection searchFunc={changeData} />
            <h1 className='CharacterHeading'> All Characters of Breaking Bad</h1>
            <InfiniteScroll dataLength={data.length} next={fetchData} hasMore={load} 
            loader={<div className="LoaderHashCard"> 
                        <HashLoader color="#38E54D" size={100} />
                    </div>}>
                <div className='CardContainer'>
                    {
                        data.map((dat, index)=> <Card key={dat.char_id} id={dat.char_id} actorName={dat.name} imageUrl={dat.img} />)     
                    }
                </div>
            </InfiniteScroll>

        </div>
    );
}

export default HomePage;