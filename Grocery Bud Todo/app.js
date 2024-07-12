let ul = document.querySelector("#ul");
function addTask() {
    let input = document.getElementById("input").value;
    if(input == ""){
        return;
    }
    else{
        let li = document.createElement("li");
        li.classList.add("li");
        let li_text = document.createElement("li");
        li_text.classList.add("li_text");
        li_text.textContent = input.slice(0, 1).toUpperCase() + input.slice(1);
        let li_button = document.createElement("span");
        li_button.classList.add("li_button");
        let editBtn = document.createElement("button");
        let delBtn = document.createElement("button");
        editBtn.addEventListener("click",function(e){
            let editedText = prompt('Enter Edit value',e.target.parentElement.previousSibling.innerText);
            e.target.parentElement.previousSibling.innerText = editedText.slice(0, 1).toUpperCase() + editedText.slice(1)
        })
        delBtn.addEventListener("click",function(){
            li.remove();
        })
        editBtn.innerText = "Edit";
        delBtn.innerText = "Delete";
        li_button.appendChild(editBtn);
        li_button.appendChild(delBtn);
        li.appendChild(li_text);
        li.appendChild(li_button);
        ul.appendChild(li);
    }
    document.getElementById("input").value = "";
}

function deleteAll(){
    ul.innerHTML = "";
}




