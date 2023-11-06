const inpudata = document.getElementById("inputDate");
const inputCategorie = document.getElementById("inputCategorie");
const inputTitre = document.getElementById("inputTitre");
const inputDescription = document.getElementById("inputDescription");
const btnAjouter= document.getElementById("btnAjouter");
const data = document.getElementById("Data");
const tbody = document.getElementById("tbody");

inpudata.addEventListener("click",function (e) {
    if (e) {
        data.classList.remove("datacolor");
    }
});

// ========================================== je stoke les value des input dans localStorage=======================================================
 let tableTodolist = [];
 if (!JSON.parse(localStorage.getItem("tableTodolist"))) {
     tableTodolist = JSON.parse(localStorage.getItem("tableTodolist"));
    }
    const datas = {
     categorie: inputCategorie.value,
     titre:inputTitre.value,
     date:inpudata.value,
     description:inputDescription.value
   };
   tableTodolist.push(datas);
   localStorage.setItem("tableTodolist",JSON.stringify(tableTodolist));

 
// ========================================== je stoke les value des input dans localStorage=======================================================






btnAjouter.addEventListener("click",function () {


if (inpudata.value === "" || inputCategorie.value === "" || inputDescription.value === "" || inputTitre.value === "") {
prompt("error");
}else{
    lesElementsDuTables();
}
});

function lesElementsDuTables(event) {
tableTodolist.forEach(element => {
    
    tbody.innerHTML += `<tr>
    <td class="text-center"></td>
    <td class="text-center">${element.date}</td>
    <td class="text-center">${element.titre}</td>
    <td class="text-center">${element.categorie}</td>
    <td class="text-center gap-3"><span class="sapn2 p-2 me-2"><i class="fa-solid fa-eye"></i></span><span class="sapn1 p-2 me-2"><i class="fa-solid fa-pencil me-1"></i></span><span class="sapn3 p-2"><i class="fa-solid fa-trash"></i></span></td>
</tr>`
});
    
    }
  
lesElementsDuTables();

