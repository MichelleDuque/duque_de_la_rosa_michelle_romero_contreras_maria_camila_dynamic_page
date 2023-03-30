console.log("JS is working")

let bioLinks = document.querySelectorAll(".characters div a"),
    theLightBox = document.querySelector("#lightbox"),
    imageProcess = document.querySelector("#imageprocess"),
    closeLightbox = document.querySelector(".lightbox_close")

function getHeroData(){
    //change the lightbox content to match the hero data
    // this is coming from the custom data attribute we added to each anchor tag in the html
    theLightBox.querySelector(".lb_heading").textContent = process[this.dataset.member].name;
    theLightBox.querySelector(".lb_text").textContent = process[this.dataset.member].bio;
    imageProcess.src = process[this.dataset.member].imageprocess;
    
    //change any other elemen's content using the same method - select it, add the object's data to it
    // as textContent, src attributes... whatever you need to change
}

bioLinks.forEach(link => link.addEventListener("click", getHeroData));



function openLightBox(event){
    event.preventDefault();
}