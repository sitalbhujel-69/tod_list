let input = document.querySelector("#text")
let button = document.querySelector("button")
let task = document.querySelector("#task")

function addtask(){
    if(input.value===' '){
        alert('please write Something')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= input.value
        task.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    save()
}

button.addEventListener('click',addtask)

task.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked')
        save()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        save()
    }
})
function save(){
    localStorage.setItem('data',task.innerHTML)
}
function showlist(){
    task.innerHTML = localStorage.getItem("data")
}
showlist()
