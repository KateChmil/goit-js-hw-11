import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { clearGallery, toggleLoader, renderGallery } from "./js/render-functions.js"

const searchForm = document.querySelector("#search-form");
const sInput = document.querySelector("#search-input");



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

   fetchImages(request) 
      .then((data) => {
    toggleLoader(false);
    if (!data.hits.length) {
              iziToast.warning({
          title: "No Results",
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
        return;}
          
        renderGallery(data.hits)
        lightbox.refresh();         
    })
      .catch((error) => {
    toggleLoader(false);
    iziToast.error({ title: "Error", message: "Something went wrong. Please try again later." });
    });
})
    






