function Car(type, color, year) {
    this.type = "Type : " + type;
    this.color = "Color : " + color;
    this.year =  year;
    this.age = function() {
        return  2022 - this.year 
    };
}

var carOne = new Car("Toyota", "green", 2005)
var carTwo = new Car("Honda", "red", 2009)

carOneType = document.getElementById("make1")
carOneColor = document.getElementById("color1")
carOneYear = document.getElementById("year1")
carOneAge = document.getElementById("age1")

carTwoType = document.getElementById("make2")
carTwoColor = document.getElementById("color2")
carTwoYear = document.getElementById("year2")
carTwoAge = document.getElementById("age2")

carOneType.innerHTML = carOne.type
carOneColor.innerHTML = carOne.color
carOneYear.innerHTML = "Year : " + carOne.year
carOneAge.innerHTML = "age : " + carOne.age()

carTwoType.innerHTML =  carTwo.type
carTwoColor.innerHTML = carTwo.color
carTwoYear.innerHTML = "Year : " + carTwo.year
carTwoAge.innerHTML = "age : " + carTwo.age()
