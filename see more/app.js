const para = document.querySelector("#para");
const text = para.innerHTML;
para.innerText = `${para.innerHTML.slice(0,97)}`;


const button = document.querySelector("#button");
button.innerHTML = "...show more";


const show = () => {
    para.innerHTML = text;
    button.innerHTML = "...Hide";
    button.setAttribute("onclick","hide()");
}


const hide = () => {
    para.innerHTML = `${para.innerHTML.slice(0,97)}`
    button.innerHTML = "...show more";
    button.setAttribute("onclick","show()");
}

button.setAttribute("onclick","show()");

