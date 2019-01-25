var animalPopulation = 0;
var allAnimals = [];

function run(){
    var fred = new Leviathan("Fred");

    var ted = new Pegasus("Ted");

    var ed = new Cat("Ed");

    var bred = new Gorilla("Bred");

    var ned = new Micropachycephalosaurus("Ned");

    listAnimal(fred);
    listAnimal(ted);
    listAnimal(ed);
    listAnimal(bred);
    listAnimal(ned);
    console.log(allAnimals);
}

$(document).ready(function(){
    $("#createAnimal").click(function (){
        createAnimal($("#name").val());
    });
    $("#feedAnimal").click(function(){
        feedAnimal($("#food").val());
    });
    $("#delAnimal").click(function(){
        deleteAnimal($("#nameDel").val());
    });
});

function createAnimal(name){
    var animal = "";
    switch($("#new").val()){
        case "Leviathan":
            animal = new Leviathan(name);
            listAnimal(leviathan);
            break;
        case "Pegasus":
            animal = new Pegasus(name);
            listAnimal(leviathan);
            break;
        case "Cat":
            animal = new Cat(name);
            console.log("cat");
            break;
        case "Gorilla":
            animal = new Gorilla(name);
            console.log("gorilla");
            break;
        case "Micropachycephalosaurus":
            animal = new Micropachycephalosaurus(name);
            console.log("micropachycephalosaurus");
    }
}

function feedAnimal(food){
    $("#sauce").html("");
    for(var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}

function deleteAnimal(name){
    for(var i = 0; i < allAnimals.length; i++){
        if(allAnimals[i].name === name){
            $("#sauce").html("<div>" + name + " the " + allAnimals[i].constructor.name + " was deleted</div>");
            allAnimals.splice(i, 1);
        }
    }
    $("." + name).hide();

}


class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        $("#sauce").append("<div>" + this.name + " sleeps for 8 hours</div>");

    }

    eat(food) {
        $("#sauce").append("<div>" + this.name + " eats " + food + "</div>");
        if (food === this.favoriteFood) {
            $("#sauce").append("<div>YUM!!! " + this.name + " wants more " + food + "</div>");
        } else {
            this.sleep();
        }
    }
}

class Leviathan extends Animal{
    constructor(name) {
        super(name, "Fish");
    }
}

class Pegasus extends Animal{
    constructor(name) {
        super(name, "Horse");
    }

    sleep() {
        $("#sauce").append("<div>" + this.name + " hibernates for 4 months</div>");
    }
}

class Cat extends Animal{
    constructor(name){
        super(name, "Dog");
    }

    sleep(){
        $("#sauce").append("<div>" + this.name + " sleeps in a beech tree</div>");
    }
}

class Gorilla extends Animal{
    constructor(name){
        super(name, "Cat");
    }

    eat(food){

        (food === this.favoriteFood) ? super.eat("cat") : $("#sauce").append("<div>" + this.name + " eats " + food + "</div>") +
            $("#sauce").append("<div>YUCK!!! " + this.name + " will not eat " + food + "</div>");
    }
}

class Micropachycephalosaurus extends Animal{
    constructor(name){
        super(name, "Mouse");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }
}