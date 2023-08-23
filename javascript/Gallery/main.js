const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = {
    "pic1.jpg": "Blue eye",
    "pic2.jpg": "Painting",
    "pic3.jpg": "Flowers",
    "pic4.jpg": "Pharaons",
    "pic5.jpg": "Butterfly",
}
function displayImage(event){
const currentImage = event.target;
const currentImageSrc= currentImage.getAttribute("src")
displayedImage.setAttribute("src",currentImageSrc );


}
/* Looping through images */
for (const image of images) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altTexts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",displayImage);

}


/* Wiring up the Darken/Lighten button */
 function darkenImage(event){
    const btnClass=btn.getAttribute("class")
    if(btnClass === "dark"){
        btn.setAttribute("class","light")
        btn.textContent ="Lighten"
        overlay.style.backgroundColor= "rgba(0,0,0,0.5)";

    } else {
        btn.setAttribute("class","Dark")
        btn.textContent ="Darken"
        overlay.style.backgroundColor= "rgba(0,0,0,0)";
    }
 } 

btn.addEventListener("click",darkenImage)


