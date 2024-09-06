let marks =prompt("Enter your number");

if(marks =="90" && marks < "100"){
    console.log("Congratulations! You are in Grade A1");
}
else if(marks =="80" && marks < "90" ){
    console.log("You are in grade A");
}
else if(marks == "70" && marks < "80"){
    console.log("You are in grade B");
}
else if(marks == "60" && marks < "70"){
    console.log("You are in grade C");
}
else if(marks == "50" && marks < "60"){
    console.log("You are in grade D");
}
else{
    console.log("Sorry! You are fail. Better luck next Time");
}

