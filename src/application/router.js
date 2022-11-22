import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import List from "../pages/List";
import ListFixed from "../pages/ListFixed";
import Show from "../pages/Show";


export default function Router (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/show' element={<Show/>}/>
            <Route path='/listfixed' element={<ListFixed/>}/>
        </Routes>
        </BrowserRouter>
    )
}

