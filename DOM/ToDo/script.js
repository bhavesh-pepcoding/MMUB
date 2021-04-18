let input = document.querySelector(".task-input");
console.log(input);
let ul = document.querySelector(".task-list");
let lists = document.querySelectorAll(".task-list li");

function taskDeleter(e) {
    e.currentTarget.remove();
}

for(let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("dblclick", taskDeleter);
}

input.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        let task = input.value;
        if(task == "") {
            alert("Error- Adding Empty task");
            return;
        }
        input.value = "";
        // let li = `<li>${task}</li>`;
        // let mli = ul.innerHTML;
        // let finalHtml = li + mli;
        // ul.innerHTML = finalHtml;

        var li = document.createElement("li");
        li.innerText = task;
        li.classList.add("tasklist-item");
        li.addEventListener("dblclick", taskDeleter);
        ul.insertBefore(li, ul.firstChild);
    }
    
})