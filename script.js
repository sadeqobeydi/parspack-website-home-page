let btnMnue = document.getElementById('btn-mnue')
let menue = document.querySelector('.open-menue')



btnMnue.addEventListener('click' , function(){
    btnMnue.classList.toggle('active')

    if(btnMnue.classList.contains('active')){
        menue.style.right="-40px"
        btnMnue.innerHTML='&times'
    }
    else{
        btnMnue.innerHTML='&#9776;'
        menue.style.right="-110%" 
    }
})

let listDrop = document.getElementsByClassName('listdrop')
let dropDown = document.getElementsByClassName('dropdown')
let iconDown = document.getElementsByClassName('fas fa-angle-down')



for(let i = 0 ; i< listDrop.length ; i++){
    listDrop[i].onclick= function(){
        dropDown[i].classList.toggle('active')
        if(dropDown[i].classList.contains('active')){
            dropDown[i].style.height = `${dropDown[i].scrollHeight}px` 
            iconDown[i].style.transform = "rotate(180deg)";
        }
        else{
            dropDown[i].style.height = '0px'
            iconDown[i].style.transform = "rotate(0deg)";
        }
    }
}

