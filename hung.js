let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let heading = document.getElementById("heading")
let year = document.getElementById("year")
let poster = document.getElementById("poster")
let backgroundimg = document.getElementById("backgroundimg")
let category = document.getElementById("category")
let category1 = document.getElementById("category1")
let trailer = document.getElementById("trailer")
let Overview = document.getElementById("Overview")
let url = new URLSearchParams(window.location.search);
let slug = url.get("slug");
fetch(`https://phimapi.com/phim/${slug}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    heading.textContent = data.movie.name
    year.textContent = data.movie.year
    poster.src = data.movie.poster_url
    backgroundimg.src = data.movie.thumb_url
    category.innerHTML = data.movie.category[1].name
    time1.textContent = data.movie.time
    Overview.textContent = data.movie.content
    trailer.addEventListener("click", () => {
        window.location.href = data.movie.trailer_url
    })
  })

  
  
  