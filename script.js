const api_url = "https://swapi.dev/api/starships/";

async function getapi(url) {

    const response = await fetch(url);

    const data = await response.json();
 
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}


function show(data) {
    let tab = `<tr>
    <th>name</th>
    <th>model</th>
    <th>manufacturer</th>`;

    for (const ship of data.results){
        tab += `<tr>
        <td>${ship.name}</td>
        <td>${ship.model}</td>
        <td>${ship.manufacturer}</td></tr>`;
    }
   


    document.getElementById("spaceships").innerHTML = tab;

}
