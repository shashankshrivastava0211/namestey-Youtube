import React from "react"
import Sidebar from "./Sidebar"
import Maincontainer from "./Maincontainer"
import { Outlet } from "react-router-dom"
const Body=()=>{

    return(
        <div className="flex p-4 gap-0">
            <Sidebar />
            <Outlet />
        </div>
    )
}
export default Body