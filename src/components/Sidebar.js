import React from "react"
const Sidebar=()=>{

    return(
        <div className="w-48 shadow-lg">
             
            <ul>
                <li> home</li>
                <li> Shorts</li>
                <li> Videos</li>
                <li> Live</li>

            </ul>
            
            <h1 className="font-bold">subscription</h1>
            <ul>
                <li> Music</li>
                <li> Sports</li>
                <li> Gaming</li>
                <li> Movies</li>

            </ul>
            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li> </li>
                <li> Sports</li>
                <li> Gaming</li>
                <li> Movies</li>

            </ul>
            

        </div>
    )
}
export default Sidebar