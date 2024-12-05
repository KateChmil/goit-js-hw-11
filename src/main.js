import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector("#search-form");
const sInput = document.querySelector("#search-input");
const loader = document.querySelector("#toggle-div");
const gallery = document.querySelector("#gallery");

const APIKEY = "47458933-146f1ea8ad921328f8e999f88";
const BASEURL = "https://pixabay.com/api/";

const lightbox = new SimpleLightbox("#gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const request = sInput.value.trim();
    if (!request) {
        iziToast.error({ title: "Error", message: "Search field cannot be empty!" });
    return;}
     
    clearGallery();
    toggleLoader(true);

    fetchImages(request);
})    






function renderGallery(images) {
    const markup = images
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `
                 <li> <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}"/>
                </a>
                <div class = "info">
                <div class="info-div"> <p class="section"> Likes: </p> <p class="result" > ${likes} </p> </div>
                <div class="info-div"> <p class="section"> Views: </p> <p class="result"> ${views} </p> </div>
                <div class="info-div"> <p class="section"> Comments: </p> <p class="result"> ${comments} </p> </div>
                <div class="info-div"> <p class="section"> Downloads: </p> <p class="result"> ${downloads} </p> </div>
                 </div>
                </li>
               `
            }
    )
        .join("")
    gallery.insertAdjacentHTML("beforeend", markup);
}

function clearGallery() {
    gallery.innerHTML = "";
}

function toggleLoader(show) {
    loader.classList.toggle("hidden", !show)
}