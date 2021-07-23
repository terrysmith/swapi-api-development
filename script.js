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
    let dataItems = `
    <div class="span-col-2">Star Wars Space Ships</div>
    <div class="col">Name</div>
    <div class="col">Model</div>
    <div class="col">Manufacturer</div>`;

    for (const ship of data.results){
        dataItems += `
        <div>${ship.name}</div>
        <div>${ship.model}</div>
        <div>${ship.manufacturer}</div>`;
    }
   


    document.getElementById("container").innerHTML = dataItems;

}
