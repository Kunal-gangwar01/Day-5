function fetchAPI(){
const url ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=D83ZNQMWFK65VBCESBA2JQS5G'
fetch(url)
.then((res)=> res.json())
.then(console.log);
}
fetchAPI()

function renderUI(data){
    // const days = data.days;
    // console.log(days);
    const row = document.createElement("tr");
    let cell = document.createElement("th");
    cell.innerText = 'Date';
    row.appendChild(cell);

    const cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Temperature';
    row.appendChild(cell2);

}