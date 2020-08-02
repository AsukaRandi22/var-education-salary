var education= "a highschool diploma";
var salary= "$35,236";

switch(education, salary){
    case 1:
    console.log("no highschool diploma", "$25,636");
    break;
    case 2:
    console.log("a highschool diploma", "$35,236");
    break;
    case 3:
    console.log("an Associate's degree", "$41,496");
    break;
    case 4:
    console.log("a Bachelor's degree", "$59,124");
    break;
    case 5: 
    console.log("a Master's degree", "$69,732");
    break;
    case 6:
    console.log("a Professional degree", "$89,960");
    break;
    case 7:
    console.log("a Doctoral degree", "$84,396");
    break;
}
console.log("In 2015, a person with " + education + " earned an average of " + salary +" /year");