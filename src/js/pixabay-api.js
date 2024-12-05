const APIKEY = "47458933-146f1ea8ad921328f8e999f88";
const BASEURL = "https://pixabay.com/api/";


export function fetchImages(request) {
    return fetch(`${BASEURL}?key=${APIKEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true`)
 .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
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
}