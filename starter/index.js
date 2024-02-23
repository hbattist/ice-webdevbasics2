// This is where your JS goes!

// You can fetch data from https://cs571.org/api/s24/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571.org/api/s24/ice/pasta
//  https://cs571.org/api/s24/ice/pizza

const BASE_AMNS = [1, 15, 14.5, 2, 1, 1, 1]
const REVIEWS = [
    "A burst of warmth and flavor in every spoonful; simple yet irresistible!",
    "The perfect blend of spice and comfort, an easy go-to chili recipe.",
    "Loved the hearty texture and rich taste - a new family favorite!",
    "Quick, flavorful, and satisfying - this chili hits all the right notes!"
]

fetch("https://cs571.org/api/s24/ice/chili", {
    headers: {
        "Harrison-CS571-ID": "bid_eb0a06fdc0bc2f6bcdfb5c11f89faeaa5daa042e673534fd45dd6986c008a32a"
    }
})
.then((r) => {
    console.log(r.status)
    return r.json()
})
.then((data) => {
    console.log(data)
})
console.log("Hellow World")


function updateYield() {
    alert("I should update the yield!");
}

function displayReview() {
    alert("I should display a review!");
}