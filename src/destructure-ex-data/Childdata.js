function Childdata(props){
    let {name,std,div,age}=props;
    return(
        <>
        <div>Child Data</div>
       <h3>Student name : {name}</h3>
       <h3>Student standard : {std}</h3>
       <h3>Student division : {div}</h3>
       <h3>Student age : {age}</h3>

        </>
    )
}

export default Childdata;

// name={st_name} std={st_std} div={st_div} age={st_age}