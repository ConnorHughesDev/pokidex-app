const baseURL = `https://pokeapi.co/api/v2/pokemon/`;
let url;
const bulbapeaidaURL = `https://bulbapedia.bulbagarden.net/wiki/`;
let bulbapedia; 

const searchTerm = document.querySelector('.search'); // defining a variable to access HTML class
const searchForm = document.querySelector('form'); // defining a variable to access HTML element
const section = document.querySelector('.results'); // defining a variable to access HTML class

searchForm.addEventListener('submit', fetchResults);
// searchForm.addEventListener('more_info', displayResults);

function fetchResults(e) { //declaring function fetchResults "e is accessing the submit button"
    // console.log(e);
    e.preventDefault(); // prevent submit from refreshing the browser

    url = `${baseURL}${searchTerm.value}`;

    fetch(url)//get results from our search url
        .then(function (result) {//promise resolver
            // console.log(result) //logs to console
            return result.json(); //returns our data in JSON format JSON-ify
        })
        .then(function (json) { //chaining promise resolver
            // console.log(json); //logs to console
            displayResults(json); //grabs the json-ified results and feeds (argument) to displayResults function
        })
}

function displayResults(json) { //function for displaying data accepting a parameter
    
        while (section.firstChild) { //while previous data is there (while section has firstChild)
            section.removeChild(section.firstChild); //removes previous search data (remove the section firstChild). prevents displaying more info if info is already present
        }
    console.log('Display Results', json); //logs to console
    // let abilities = document.createElement('div')
    // let abilTitle = document.createElement('h3')  
    // let abilValue = document.createElement('p')

    let sprites = document.createElement('div')
    let spriteTitle = document.createElement('h3')
    let spritesValue = document.createElement('img')
    spriteTitle.textContent = json.name
    spriteTitle.setAttribute("id", "name")
    spritesValue.setAttribute("id", "pic")

    let base_experience = document.createElement('div')
    let baseTitle = document.createElement('h3')
    let baseValue = document.createElement('p')
    baseTitle.textContent = "Base Experience: "
    base_experience.setAttribute("id", "basicInfo")
    baseTitle.setAttribute("id", "grid1") 
    baseValue.setAttribute("id", "grid2")

    // let weight = document.createElement('div')
    let weightTitle = document.createElement('h3')
    let weightValue = document.createElement('p')
    weightTitle.textContent = "Weight: "
    weightTitle.setAttribute("id", "grid3")
    weightValue.setAttribute("id", "grid4")

    // let height = document.createElement('div')
    let heightTitle = document.createElement('h3')
    let heightValue = document.createElement('p')
    heightTitle.textContent = "Height: "
    heightTitle.setAttribute("id", "grid5")
    heightValue.setAttribute("id", "grid6")
    
    bulbapedia = `${bulbapeaidaURL}${searchTerm.value}_(Pokemon)`; // This allows me to go to bulbapedia of the current displayed pokemon
    let moreInfo = document.createElement('div')
    let moreInfoTitle = document.createElement('h3')
    let moreInfoForm = document.createElement('form')
    let moreInfoValue = document.createElement('button')
    moreInfoTitle.textContent = "For more info about this Pokemon, click this button: "
    moreInfoForm.action = bulbapedia
    moreInfoValue.type = 'submit'
    moreInfoValue.innerText = "More Info"
    moreInfo.setAttribute("id", "infoH")
    moreInfoTitle.setAttribute("id", "moreGrid1")
    moreInfoValue.setAttribute("id", "moreGrid2")
    // moreInfoValue.setAttribute("class", "btn")

    // section.appendChild(abilities)
    // abilities.appendChild(abilTitle)
    // abilities.appendChild(abilValue)
    // abilValue.textContent = json.abilities[0].ability.name + " , " + json.abilities[1].ability.name 
    // // console.log(json.abilities[0])
    
    section.appendChild(sprites)
    sprites.appendChild(spriteTitle)
    sprites.appendChild(spritesValue)
    spritesValue.src = json.sprites.front_default

    section.appendChild(base_experience)
    base_experience.appendChild(baseTitle)
    base_experience.appendChild(baseValue)
    baseValue.textContent = json.base_experience
    base_experience.appendChild(weightTitle)
    base_experience.appendChild(weightValue)
    base_experience.appendChild(heightTitle)
    base_experience.appendChild(heightValue)
    // console.log(json.base_experience)
    

    // section.appendChild(weight)
    // weight.appendChild(weightTitle)
    // weight.appendChild(weightValue)
    weightValue.textContent = json.weight
    // console.log(json.weight)

    // section.appendChild(height)
    // height.appendChild(heightTitle)
    // height.appendChild(heightValue)
    heightValue.textContent = json.height
    
    section.appendChild(moreInfo)
    moreInfo.appendChild(moreInfoTitle)
    moreInfo.appendChild(moreInfoValue)
    moreInfo.appendChild(moreInfoForm)
    moreInfoForm.appendChild(moreInfoValue) // needed to append the form (moreInfoForm) for the button (moreInfoValue) to work.

}

