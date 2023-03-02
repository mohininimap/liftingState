function Child(props){
    const {name,place,age,qualification}=props.data
    return(
      
        <>
        <h2>Name is {name}</h2>
        <h2>Candidates place is {place}</h2>
        <h2>Candidates age is {age}</h2>
        <h2>Candidates qualification is {qualification}</h2>
        </>
    )
}

export default Child;