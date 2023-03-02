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

// function showLess() {}

var ans = a
  .filter((item) => item.id == a[0].id || item.id == a[1].id)
  .map(
    (k) =>
      (document.getElementById("result2").innerHTML +=
        k.id + " " + k.name + " " + k.place + " " + "<br/>")
  );



var flag = false;
var btnname;
function showMore2() {
  btnname = document.getElementById("showmorebtn");
  // btnname.value = "Show less..";
  btnname.style.display="none"
  if (flag) {
    return;
  }
  //  document.getElementById("showmorebtn").disabled="true"

  
  document.getElementById("result2").style.display = "none";
  let ans = a.map(
    (k) =>
      (document.getElementById("result3").innerHTML +=
        k.id + " " + k.name + " " + k.place + " " + "<br/>")
  );
  flag = true;
}
console.log(ans);
