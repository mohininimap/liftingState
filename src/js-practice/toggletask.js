let a = [
    {
      id: 1,
      name: "Mohini",
      place: "Virar",
    },
    {
      id: 2,
      name: "Snehal",
      place: "Aambadi",
    },
    {
      id: 3,
      name: "Mohan",
      place: "Chembur",
    },
    {
      id: 4,
      name: "Ankita",
      place: "Thane",
    },
  ];


function showMore(){
    var getbtn1=document.getElementById("btn1")
    var div1=document.getElementById("showmsg")
    if(getbtn1.value=="more"){
        getbtn1.value="Less"
        div1.innerHTML="Less"


        
        
    }
    else if(getbtn1.value=="Less"){
        getbtn1.value="more"
        div1.innerHTML="More"
    }

}
