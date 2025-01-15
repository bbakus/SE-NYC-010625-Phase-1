// write your code here
 

// fetch('http://localhost:3000/foods')
// .then(response => response.json())
// .then(data => console.log(data))

//localhost can also be 127.0.0.1 ip address

//node version changes json server style. Just stick to 22 its fine

//async - await
//async function(){
//  await fetch('http:// etc....)
//  .then(response => response.json())
//  .then(data => console.log(foods))
//
//}






fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(data => {
        data.forEach(element => {
            
            addFoodImageToRestaurantMenu(element)
            displayDetails(element[0])
            
        });
})

function displayDetails(food){
        const detailsName = document.querySelector('.name')
        detailsName.textContent = food.name
        const img = document.querySelector('.detail-image')
        img.src = food.image
        const description = document.querySelector('#description-display')
        description.textContent = food.description
        


}

function addFoodImageToRestaurantMenu(foodImages){
    const foodImage = document.createElement('img')
    foodImage.src = foodImages.image
    foodImage.appendChild(foodImages)        
    foodImage.addEventListener('click', displayDetails(foodImages))

}




// function displayFoodDetails(food){
//     const detailsImageElement = document.querySelector('.detail-image')
//     detailsImageElement.src = food.image
//     const detailsNameElement = document.querySelector('.name')
//     detailsNameElement.textContent = food.name
//     const descriptionDisplay = document.querySelector('#description-display')
//     descriptionDisplay.textContent = food.description

// }


// function addFoodImageToRestaurantMenu(food){
//     const foodImage = document.createElement('img')
//     foodImage.src = element.image
//     const restaurantMenu = document.querySelector('#restaurant-menu')
//     restaurantMenu.appendChild(foodImage)
//     foodImage.addEventListener('click', () => {
//         displayFoodDetails()
//     })
// }

// fetch('http://localHost:3000.foods')
// .then(response => response.json())
// .then(data => {
//     data.forEach(foodItem => {
//         addFoodImageToRestaurantMenu(foodItem)

//     }
// })