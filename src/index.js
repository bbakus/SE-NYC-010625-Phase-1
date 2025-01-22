const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                imgElement.remove()
            }
            else{
                alert(`Error: Unable to delete Food # ${food.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    foodDetailImageElement.src = food.image
    foodNameElement.textContent = food.name
    foodDescriptionDisplayElement.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

// write your code here

`Algorithms

 a solution to a  problem
 find the solution, then reduce the amount of time it takes to get result
 and then consider memory usage
 Think about the process to determine the time complexity

 Big O notation - a way of measuring time complexity and space complexity
 foodDetailImageElement is just one line, not doing extra work even though it's accesing a key

 const have a value of 1 in Big O notation, a linear 'curve'
 
 forEach is not a constant time complexity because the array can have any number  of elements so O(n)
 n is indicative of however many times the loop goes over each element in the array
 
 each key-value pair takes up memory, same with elements in an array both are O(n)

 see bottom of readMe for good array iterations
 
 const fruits = ['apple', 'banana, 'cherry]
 fruits.push('dragonfruit')
 push just access the last element and adds the noew item, so it's O(1)
 whereas fruits.unshift('grape') ... it's moving everything over to a new index, and inserting grape
 so it has a value of O(n) because it has to move each individual element
 
 for loops are more efficient than iterations, I think? they are still O(n) though, but I think they
 have a better space complexity. idk I'm a bit confused

 functions that contain algorithms that takes a parameter, which is an array, stores the logic in a
 'container' -  a function is always underfined unless a return is specified

 a nested for loop is quadratic On^2 (squared).

more on these subjects on canvas.

For strings
fruits.sort()  - sorts an array
fruit.sort().reverse()  - reverses the sort

both of these are destructive methods, if you want to do non-destructive
use the spread operator with brackets: [...fruits].sort()

for numbers
numbers.sort(a,b) => a-b) puts it in standard number order
numbers.sort((a,b) => b-a) reverse order

Strings are immutable, but you can use indeces on them: string[2] returns 2 index letter,
but it cannot be changed.


 
 `