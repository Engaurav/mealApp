// Javascripyt to get Data from Json
// console.log("Hello");
fetch('../assets/data/data.json')
.then(response => {
   return response.json();
})
.then(data =>{    //
    breakfastList(data.breakfast);  //calling breakFast list funtion to render list breakfast item
    lunchList(data.lunch);  //calling lunch list funtion to render list lunch item
});


//javascript for breakfast meal : START
function breakfastList(breakfastData) {
    var breakfastMeal = document.getElementById("breakfast");

    breakfastData.map((data) => {
        let mealItem = "<div class='breakfast-item-container'><a href='#' class='meal-item-link'><img class='meal-item-img' src="+ data.img +" /><div class='meal-item-name'>"+ data.name +"</div><p class='meal-item-detail'>"+ data.detail +"</p></a></div>";
        breakfastMeal.innerHTML += mealItem;
    });
}

// function for next food item of breakfast
function breakfastNext() {    
    var breakfastMeal = document.getElementById("breakfast");
    var breakItem = document.getElementsByClassName("breakfast-item-container");

    breakfastMeal.append(breakItem[0]);
}


// function for previous food item of breakfast
function breakfastPrevious() {
    
    var breakfastMeal = document.getElementById("breakfast");
    var breakItem = document.getElementsByClassName("breakfast-item-container");
    breakfastMeal.prepend(breakItem[breakItem.length - 1]);
}

//javascript for breakfast meal : end




//javascript for lunch meal : START
function lunchList(lunchData) {
    var lunchMeal = document.getElementById("lunch");

    lunchData.map((data) => {
        let mealItem = "<div class='lunch-item-container'><a href='#' class='meal-item-link'><img class='meal-item-img' src="+ data.img +" /><div class='meal-item-name'>"+ data.name +"</div><p class='meal-item-detail'>"+ data.detail +"</p></a></div>";
        lunchMeal.innerHTML += mealItem;
    });
}


// function for next food item of lunch
function lunchNext() {    
    var lunchMeal = document.getElementById("lunch");
    var breakItem = document.getElementsByClassName("lunch-item-container");

    lunchMeal.append(breakItem[0]);
}


// function for previous food item of lunch
function lunchPrevious() {
    
    var lunchMeal = document.getElementById("lunch");
    var breakItem = document.getElementsByClassName("lunch-item-container");
    lunchMeal.prepend(breakItem[breakItem.length - 1]);
}

//javascript for lunch meal : End