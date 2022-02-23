const prompt = require("prompt-sync")();
/*let FirstPrompt = prompt(">Please Press One [1] To Add Items To Your To Do List Or Press two [2] To View Items Already Added"+" ")
let str = ("");
let strZ = str.splice(" ");
while (FirstPrompt!==prompt("exit")) {
let FirstPrompt = prompt(">Please Press One [1] To Add Items To Your To Do List Or Press two [2] To View Items Already Added"+str)
    
str= str+=strZ

}*/


    
let FirstPrompt = prompt(">Please press [1] to add items to your to do list")
if (FirstPrompt = "1") {
let List = [];
let ListC =[];
const complete = [true,false];
while (FirstPrompt!=="exit") {
 
 
 
if (FirstPrompt==="1") {

    let Task = prompt("Please enter Jobs or items that you want to be reminded to complete or press 2 to move on: "); 
    List.push(Task);
    const isComplete = List[true,false];
    for (let i = 0; i < List.length; i++) {
 
    console.log(List[i] + complete);



}

}else if (FirstPrompt === "2"){
Task = prompt("if you wish to complete the first tast you entered press 2 otherwise press 1:>  ")
let ListC = List.shift(0)
for (let i = 0; i < ListC.length; i++) {
    
    console.log("here are you completed items " +ListC);
    
}

    
}

    



FirstPrompt =prompt("please press 1 to add items to list or press 2 to complete listed items or exit to leave:> ")
}
   






}



