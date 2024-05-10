import React from "react"
import Button from "./Button"
const list=["all","gaming","songs","Live","soccer","cricket","cooking","Valentines","kapil sharma"]
const Buttonlist=()=>{

    return(
        <div className="flex">
            {/* <Button name="all"/>
            <Button name="gaming"/>
            <Button name="songs"/>
            <Button name="Live"/>
            <Button name="soccer"/>
            <Button name="cricket"/>
            <Button name="cooking"/> */}

            {list.map((button)=>{
                return <Button key={button} name={button}/>
            })}

        </div>
    )
}
export default Buttonlist