let btn = document.querySelector('.btn');

btn.onclick = () =>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    document.body.style.background=`rgb(${red}, ${green}, ${blue})`;
    if (red == 0 && green == 0 && blue == 0){
        alert("Black reached");
    }
}