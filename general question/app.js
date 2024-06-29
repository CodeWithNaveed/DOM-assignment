const question = document.querySelector("#question");
const question_text = question.innerHTML;
const answer = document.querySelector("#answer");
const answer_text = answer.innerHTML;
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");
const pluse_sign = document.querySelector("#pluse_sign")
const minus_sign = document.querySelector("#minus_sign")

btn_1.appendChild(pluse_sign);
btn_1.setAttribute ("onclick","pluse()");

const pluse = () => {
    answer.style.display = "block";
    pluse_sign.style.display = "none"
    minus_sign.style.display = "inline-block";
    btn_1.appendChild(minus_sign);
    btn_1.setAttribute("onclick","minus()");
}

const minus = () => {
    answer.style.display = "none";
    minus_sign.style.display = "none"
    pluse_sign.style.display = "inline-block"
    btn_1.appendChild(pluse_sign);
    btn_1.setAttribute("onclick","pluse()");
}


btn_2.appendChild(pluse_sign);
// btn_2.setAttribute ("onclick","pluse()");