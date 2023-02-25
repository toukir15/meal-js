const loadMeal = (searchItem) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchItem}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
  const searchInputValue = document.getElementById('search__input')
  searchInputValue.value = "";

  const cardContainer = document.getElementById('card__container');
  cardContainer.innerText = '';
  meals.forEach(meal => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML = ` 
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
      </div>
        `
    cardContainer.appendChild(cardDiv)
    console.log(meal);
  })
}

const searchMeal = () => {
  const searchInputValue = document.getElementById('search__input').value
  console.log(searchInputValue);
  loadMeal(searchInputValue)

}
// searchMeal()