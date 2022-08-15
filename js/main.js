//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.searchButton').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.cocktail_Name').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('.strIngredient2').innerText = data.drinks[0].strIngredient1
      document.querySelector('.strIngredient3').innerText = data.drinks[0].strIngredient2
      document.querySelector('.strIngredient4').innerText = data.drinks[0].strIngredient3
      document.querySelector('.strIngredient5').innerText = data.drinks[0].strIngredient4
      document.querySelector('.cocktail_Description').innerText = data.drinks[0].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

