import Childdata from "./Childdata"

function Parentdata(){
    let st_name="Ankita Gupta"
    let st_std="3rd" 
    let st_div="B"
    let st_age="9"
    return(
     <>
     <div>Parent data</div>
     <Childdata name={st_name} std={st_std} div={st_div} age={st_age}/>
     </>
    )
}
export default Parentdata;