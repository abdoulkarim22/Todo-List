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

btnAjouter.addEventListener("click",function (event) {

});
function lesElementsDuTables() {
    tbody.innerHTML = ` <tr>
    <td class="text-center"></td>
    <td class="text-center">20/25/2021</td>
    <td class="text-center">Projet</td>
    <td class="text-center">Academique</td>
    <td class="text-center gap-3"><i class="fa-solid fa-pencil me-1"></i><i class="fa-solid fa-trash"></i></td>
</tr>`
}

