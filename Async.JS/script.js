// console.log('GEC Start');

// function printPretty(){
//     console.log('prettyStart');
//     let ans=2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }
// setTimeout(printPretty,10000);
// console.log('GEC End');

// console.log('start');
// const req = fetch("https://api.github.com/users/kunal-gangwar01");
// console.log(req);
// req.then(()=>console.log('Fetched'));
// console.log('end');

// console.log('start');

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// // .then(json => console.log(json))
// .then((da))
// console.log('end');



// console.log("...APP Started");
// function callAPI(){
//     fetch("https://newsapi.org/v2/top-headlines?country=in &apiKey=9ac7baa8d5bd4ba0ba1cf34789868c77")
//     .then((res)=> res.json())
//     .then((data) => renderUI(data))
//     }

   
// function renderUI(data)
// {
//     const root = document.getElementById("root");
    
//     // got the articles from data
//     const articles = data.articles;
//     //single articles from the articles array
//     for(let i=0; i<articles.length;i++){

//     const ar = articles[i];

//     //created parent div
//     const div = document.createElement("div");
//     div.setAttribute("class","news-card");
//     const h3 = document.createElement("h3");
//     h3.innerText = ar.title;
//     div.appendChild(h3);

//     const img = document.createElement("img");
//    img.src = ar.urlToImage;
//     div.appendChild(img);

//     root.appendChild(div);

// }
// }
// callAPI();


console.log("...APP started..........");

// const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";
// function callAPI() {
//   fetch(url)
//   .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById("joke").innerHTML = data.value;
//     })
// }

//  const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=deaa76f05cf34e50b64d71764022fff8";



function callAPI() {
  fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=9ac7baa8d5bd4ba0ba1cf34789868c77")

    .then((res)=>res.json())
    .then((data)=> renderUI(data))
    
}
function renderUI(data){
    
    const root=document.getElementById("root");
    const articles =data.articles;
    for(let i=0;i<articles.length;i++){
    const ar=articles[i];
  
    const div=document.createElement("div");
    div.setAttribute("class","news-card");

    const h3=document.createElement("h3");
    h3.innerText=ar.title;
    div.appendChild(h3);
    
    const img=document.createElement("img");
    img.src=ar.urlToImage;
   
    div.appendChild(img);

    root.appendChild(div);
    }
}
callAPI();
