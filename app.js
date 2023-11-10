const inpudata = document.getElementById("inputDate");
const inputCategorie = document.getElementById("inputCategorie");
const inputTitre = document.getElementById("inputTitre");
const inputDescription = document.getElementById("inputDescription");
const btnAjouter= document.getElementById("btnAjouter");
const data = document.getElementById("Data");
const tbody = document.getElementById("tbody");
const inputStatut = document.getElementById("inputStatut");
const feedback = document.getElementById("feedbackID");
const tableClick = document.getElementById("tableClick");
const textareaID = document.getElementById("textareaID");
const idNu = document.getElementById("idNu");

const titre = document.getElementById("titre");
const diveye = document.getElementById("Diveye");


inpudata.addEventListener("click",function (e) {
    if (e) {
        data.classList.remove("datacolor");
    }
});


// ========================================== je stoke les value des input dans localStorage=======================================================
 let tableTodolist = [];
 if (!JSON.parse(localStorage.getItem("tableTodolist"))) {
    tableTodolist = localStorage.setItem("tableTodolist",JSON.stringify(tableTodolist));
    }
    tableTodolist = JSON.parse(localStorage.getItem("tableTodolist"));


 

 
// ========================================== je stoke les value des input dans localStorage=======================================================





btnAjouter.addEventListener("click",function (event) {
event.preventDefault();
if (inpudata.value === "" || inputCategorie.value === "" || inputDescription.value === "" || inputTitre.value === "" || inputStatut.value === "") {
alert("Veuillez mettre une valeur please");
}

else{
    feedback.classList.add("feedback-none");
    setTimeout(() =>{
        feedback.classList.remove("feedback-none");
       },2000);
    data.classList.add("datacolor");
    const datas = {
        categorie: inputCategorie.value,
        titre:inputTitre.value,
        date:inpudata.value,
        description:inputDescription.value,
        statut: inputStatut.value
      };
   
    tableTodolist.push(datas);
    localStorage.setItem("tableTodolist",JSON.stringify(tableTodolist));

    inpudata.value = "";
    inputTitre.value = "";
    inputCategorie.value = "";
    inputDescription.value = "";
    inputStatut.value= "";

    lesElementsDuTables();
   
}


});


function lesElementsDuTables(event) {
event?.preventDefault();
tbody.innerHTML = "";
tableTodolist.forEach((element,index) => {
    tbody.innerHTML += `<tr class= "hover">
    <td class="text-center">${index}</td>
    <td class="text-center">${element.date}</td>
    <td class="text-center">${element.titre}</td>
    <td class="text-center ">${element.categorie}</td>
    <td class="text-center  py-3 gap-3"><span class="sapn2 p-2 me-2" onclick = "showEye(${index})"><button class="btneye btnEye" ><i id="btneye" class="fa-solid fa-eye"></i></button></span><span class="sapn1 p-2 me-2"><i class="fa-solid fa-pencil me-1"></i></span><span class="sapn3 p-2"><i class="fa-solid fa-trash"></i></span></td>
</tr>`
});

 }
lesElementsDuTables();

  const iconEye = document.querySelectorAll(".btnEye");
  const btneye = document.getElementById("btneye");
 

//   btneye.addEventListener('click',function (event) {
//     diveye.innerText = "codeloccol";


// });


function showEye(index) {
    diveye.classList.remove("disparu");
    tableTodolist.forEach(element => {
         diveye.innerHTML = ` 
         <div class="divbgeye p-1">
           <span class="spaneye d-flex justify-content-center ms-5"><p class="text-center me-5">Information tache</p><p><i id="idNu" class="bi bi-x-lg fs-2  text-dark" onclick="idicon()"></i></p></span>
         </div> 
         <div class="d-flex flex-column-reverse mt-4 gap-3 ms-3">
              <span id="spanStatu" class="d-flex gap-5" >Statu: <p>${element.statut}</p></span>
              <span id="spanDescriptions" class="d-flex gap-5" >Descriptions:<p>${element.description}</p></span>
              <span id="spanCategorie" class="d-flex gap-5" >Categorie:<p>${element.categorie}</p></span>
              <span id="spanTitre" class="d-flex gap-5" >Titre:<p>${element.titre}</p></span>
              <span id="spanDate" class="d-flex gap-5" >Date:<p>${element.date}</p></span>
          </div> 
    `
    });
}
function idicon() {
    diveye.classList.add("disparu")
}



