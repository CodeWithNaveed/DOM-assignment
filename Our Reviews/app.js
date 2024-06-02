const reviews = [
    {
        name: "susan smith",
        designation: "web developer",
        imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman taiyaki fashion axe hella. Salvia hot chicken lablebrus.ESBR"
    },
    {
        name: "anna johnson",
        designation: "web designer",
        imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",    
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen authentic 8-bit yr. Art party scenester raw denim. "
    },
    {
        name: "peter jones",
        designation: "intern",
        imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "VHS farm-to-table trust fund Shoreditch. PBR&amp;B keffiyeh High Life dreamcatcher. Fanny pack portland."
    },
    {
        name: "bill anderson",
        designation: "the boss",
        imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz yr, vexillologist. "
    },
];

let reviewsCounter = 0
document.querySelector("#img").src = reviews[reviewsCounter].imgUrl
document.querySelector("#name").innerHTML = reviews[reviewsCounter].name
document.querySelector("#designation").innerHTML = reviews[reviewsCounter].designation
document.querySelector("#text").innerHTML = reviews[reviewsCounter].text

const previousHandler = () => {
    if(reviewsCounter > 0){
        reviewsCounter--
        document.querySelector("#img").src = reviews[reviewsCounter].imgUrl
        document.querySelector("#name").innerHTML = reviews[reviewsCounter].name
        document.querySelector("#designation").innerHTML = reviews[reviewsCounter].designation
        document.querySelector("#text").innerHTML = reviews[reviewsCounter].text
    }
}
const nextHandler = () =>{
    if(reviewsCounter < reviews.length-1){
        reviewsCounter++
        document.querySelector("#img").src = reviews[reviewsCounter].imgUrl
        document.querySelector("#name").innerHTML = reviews[reviewsCounter].name
        document.querySelector("#designation").innerHTML = reviews[reviewsCounter].designation
        document.querySelector("#text").innerHTML = reviews[reviewsCounter].text
    }
}