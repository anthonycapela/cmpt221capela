/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = ["Strawberry", "Raspberry", "Apple"]
console.log (fruits);
/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
ruits.push("Grape", "Banana");
console.log(fruits)
/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here
console.log(fruits.sort())
/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit(){
    for (let index in fruits) [
        console.log(fruits(index))
    ]
}
printFruit;
/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
/*    them using the printFruit() method             */
class fruit{
    construction(name,color, season){
    this.name = name,
    this.color = color,
    this.season = season
}
    }
printFruit()
    console.log(
        "Fruit name: " + this.name + ", Fruit color: " + this.color + ", Fruit Season" + this.season
    )


const Strawberry = new fruit("strawberry", "red", "summer");
const Apple = new fruit("apple", "red", "fall");
const Raspberry = new fruit("raspberry", "red", "summer");
/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
    let text = "Do you wan to say hi?"
    if (confirm(text) === true) {
        text = "welcome to lab 8!"
    }else{
        text = "rude"
    }
}

/* 2. Write a function to change 3 styles on the webpage                                                        */
function changeStyle() {
    Element.changeStyle.fontsize = 20
    Element.changeStyle.color = Blue
    Element.changeStyle.backgroundcolor = Red
}
