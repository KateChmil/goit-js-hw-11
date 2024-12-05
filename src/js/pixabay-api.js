const APIKEY = "47458933-146f1ea8ad921328f8e999f88";
const BASEURL = "https://pixabay.com/api/";


export function fetchImages(request) {
    return fetch(`${BASEURL}?key=${APIKEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`)
 .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}