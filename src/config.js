let form = document.getElementById("search");
form.addEventListener('submit', googleSearch);


function googleSearch(e){
    e.preventDefault();
    let searchElement = document.getElementById("searchBox")
    var query = searchElement.value;
    window.location.href = "https://www.google.com/search?q=" + query;
}