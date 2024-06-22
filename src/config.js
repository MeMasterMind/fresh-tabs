let form = document.getElementById("search");
form.addEventListener('submit', googleSearch);


function googleSearch(){
    let searchElement = document.getElementById("searchBox")
    var query = searchElement.value;
    window.location.href = "https://www.google.com/search?q=" + query;
}