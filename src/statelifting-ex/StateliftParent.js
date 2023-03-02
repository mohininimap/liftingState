import StateliftChild from "./StateliftChild";

export default function StateliftParent(){
    function showAlert(a){
        alert("parent...   "+a)
      }
    return(
       <>
       <div>I am i Paraent Class</div>
       
       <StateliftChild alert={showAlert}/>
       </> 
    )
}