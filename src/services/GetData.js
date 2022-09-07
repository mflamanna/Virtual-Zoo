import axios from "axios";
import { useEffect, useState } from "react";


export default function GetData (){
    const [animalsData, setAnimalsData] = useState([]);
    useEffect (()=>{
        axios.get("https://zoo-animal-api.herokuapp.com")
        .then ((res)=> {
            setAnimalsData(res.data)
        })

    },[animalsData])
}