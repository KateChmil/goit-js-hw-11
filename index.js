import{S as a,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="47458933-146f1ea8ad921328f8e999f88",u="https://pixabay.com/api/";function f(o){return fetch(`${u}?key=${l}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(toggleLoader(!1),!t.hits.length){iziToast.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}renderGallery(t.hits),lightbox.refresh()}).catch(t=>{toggleLoader(!1),iziToast.error({title:"Error",message:"Something went wrong. Please try again later."})})}const d=document.querySelector("#search-form"),g=document.querySelector("#search-input"),m=document.querySelector("#toggle-div"),h=document.querySelector("#gallery");new a("#gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",o=>{o.preventDefault();const t=g.value.trim();if(!t){c.error({title:"Error",message:"Search field cannot be empty!"});return}y(),p(!0),f(t)});function y(){h.innerHTML=""}function p(o){m.classList.toggle("hidden",!o)}
//# sourceMappingURL=index.js.map