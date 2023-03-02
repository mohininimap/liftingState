function StateliftChild(props){
    const data="Mohini"
return(

    <>
    <h6>I am in now child...</h6>
    <button onClick={()=>{props.alert("from child   "+data)}}>Child</button>
    </>
)
}
export default StateliftChild;