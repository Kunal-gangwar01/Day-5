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

console.log('start');

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
// .then(json => console.log(json))

console.log('end');