

    
let box = document.querySelector(".box");
let box_2 = document.querySelector(".box_2");


window.addEventListener(`scroll`, function(){

    let height = document.documentElement.scrollHeight;
    let clientheight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let subheight = height - clientheight;
    let result = Math.round(fromtop * 100 / subheight);
    box.style.width = `${result}%`;
    box_2.innerHTML = result;
    console.log(result)


});

