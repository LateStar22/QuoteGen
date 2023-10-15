const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url){
    const response  = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(api_url);

const nextButton = document.getElementsByTagName("button")[0];

nextButton.addEventListener("click",()=>{
    getQuote(api_url);
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--by " + author.innerHTML,"Tweet Window","width = 600p, height = 300");
}