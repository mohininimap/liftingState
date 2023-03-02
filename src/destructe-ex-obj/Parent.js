import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [user,setUser]=useState({
        name:"Mohini",
        place:"Virar",
        age:24,
        qualification:"B.E.Computer"
    })
    return(
        <>
  <Child data={user}/>
        </>
    )
}
export default Parent;