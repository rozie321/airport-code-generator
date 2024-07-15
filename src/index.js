function generateairportName(response){

    new Typewriter("#airportName",{
        strings:response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });

}


function displayairportName(event){

    event.preventDefault();
    
    let instructionsInput=document.querySelector("#user-instructions");

    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context =
    "Your are a well informed AI Assistant that knows all the world airport codes and respective names.The airport name and respective city and country will be in HTML format.Example: <p> DUB code for Dublin airport </br><p>It in  Dublin City in the republic of Ireland/p>";
    let prompt = `Generate the respective city and country the airport code ${instructionsInput.value} belongs`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement=document.querySelector("#airportName");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML=`<div class="blinking-text"> ⏲️Generating airport name and country of airport code ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(generateairportName); 

}
let airportNamegeneratorElement = document.querySelector('#airportname-generator');
poemgeneratorElement.addEventListener("submit",displayairportName);