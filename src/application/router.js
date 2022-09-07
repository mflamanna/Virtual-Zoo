import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import List from "../pages/List";
import Show from "../pages/Show";


export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/show' element={<Show/>}/>
        </Routes>
        </BrowserRouter>
    )
}

