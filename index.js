let category = document.querySelector("#category")
let list1 = document.querySelector("#list1")

category.addEventListener('click', function(){
    if (list1.classList.contains("hidden")){
        list1.classList.remove("hidden")
        list1.classList.add("fade-in")
        list1.classList.remove("fade-out")
    }
    else{
        list1.classList.remove("fade-in")
        list1.classList.add("fade-out")
        setTimeout(()=>{
            list1.classList.add("hidden")
        }, 150)
    }
})

let shop = document.querySelector("#shopping")
let list2 = document.querySelector("#list2")

shop.addEventListener('click', function(){
    if (list2.classList.contains("hidden")){
        list2.classList.remove("hidden")
        list2.classList.add("fade-in")
        list2.classList.add("grid")
        list2.classList.remove("fade-out")
    }
    else{
        list2.classList.remove("fade-in")
        list2.classList.add("fade-out")
        setTimeout(()=>{
            list2.classList.add("hidden")
            list2.classList.remove("grid")
        }, 150)
    }
})