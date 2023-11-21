 const notesCont = document.querySelector(".notes-container");
 const createBtn = document.querySelector(".btn");
 let notes = document.querySelector(".input-box");

function showNotes() {
    notesCont.innerHTML = localStorage.getItem("notes");
}
 showNotes();

 function updateStorage() {
    localStorage.setItem("notes", notesCont.innerHTML);
 }

 createBtn.addEventListener("click", function() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Img.png/delete.png";
    notesCont.appendChild(inputBox).appendChild(img);
 })

 notesCont.addEventListener("click", function(e){
     
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
 })

 document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
       
    }
 })