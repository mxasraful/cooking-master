
const foodItems = document.getElementById("foodItems")
const searchInput = document.getElementById("searchInput")
const foodItemsContainer = document.getElementById("foodItemsContainer")
const foodModalContent = document.getElementById("foodModalContent")

let foods;
let foodsForResult;

// Display all foods items
const displayFoodItems = (type) => {
    foodsForResult.forEach(dt => {
        const div = document.createElement('div')
        div.className = "col-3 mb-4"
        div.innerHTML =
            `<div class="card food-item" onclick="displayFoodDetailsInModal(${dt.idMeal})" data-bs-toggle="modal" data-bs-target="#foodModal">
                <img src="${dt.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${dt.strMeal}</h5>
                </div>
            </div>`
        if (type === "replace") {
            foodItems.innerHTML = ""
            foodItems.appendChild(div)
        } else {
            foodItems.appendChild(div)
        }
    });
}

// Get all foods data
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())
    .then(data => {
        foods = data.meals
        foodsForResult = data.meals
        displayFoodItems()
    })

// Search food 
const searchFunction = (e) => {
    if (searchInput.value.length > 0) {
        const filteredFoods = foods.filter(dt => dt.strMeal === searchInput.value)
        if (filteredFoods.length > 0) {
            foodsForResult = filteredFoods
            displayFoodItems("replace")
        } else {
            foodItems.innerHTML = `<div class="text-center mt-5 h5" id="noResultError">We Not Find Any Result</div>`
            console.log(filteredFoods)
            console.log(foods)
        }
    } else {
        foodsForResult = foods
        foodItems.innerHTML = ""
        displayFoodItems()
    }
}

// Display food details
const displayFoodDetailsInModal = (id) => {
    const filterFoodData = foods.filter(dt => dt.idMeal === `${id}`)
    foodModalContent.innerHTML = `
                    <div class="d-flex">
                        <div class="col-5">
                            <img src="${filterFoodData[0].strMealThumb}" alt=""
                                class="img-fluid">
                        </div>
                        <div class="ms-4 col-7">
                            <h2>${filterFoodData[0].strMeal}</h2>
                            <div class="mt-4 text-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                            </div>
                            <h4 class="text-info mt-3">$ 239</h4>
                        </div>
                    </div>
    `
}