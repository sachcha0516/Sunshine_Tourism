let timer60;     //initializing variables
let seconds = 60;
let seconds2;
            
window.onload = function timeCountdown(){     //loading countdown on startup
    timer60 = setInterval(function(){     //set interval for countdown
        seconds--;
        if (seconds == 0){
            answersChecking();     //calling method after countdown ends
            alert("Time is Up!")
        }
        document.getElementById("timer60").innerHTML =  "<b>" +"<font-size:100px>" +"Time remaining : " +"</font>"+"</b>"+ seconds ;  
    },1000);
}

function answersChecking(){     //function for getRadiovalue
    clearInterval(timer60);     //ending countdown
    let score = 0 ;
    let answer1Array = document.getElementsByName("q1");
    let answer2Array = document.getElementsByName("q2");
    let answer3Array = document.getElementsByName("q3");
    let answer4Array = document.getElementsByName("q4");
    let answer5Array = document.getElementsByName("q5");
    let answer6Array = document.getElementsByName("q6");
    let answer7Array = document.getElementsByName("q7");
    let answer8Array = document.getElementsByName("q8");
    let answer9Array = document.getElementsByName("q9");
    let answer10Array = document.getElementsByName("q10");
                
    let answer1value = " "; 
    let answer2value = " "; 
    let answer3value = " "; 
    let answer4value = " "; 
    let answer5value = " ";
    let answer6value = " "; 
    let answer7value = " "; 
    let answer8value = " "; 
    let answer9value = " "; 
    let answer10value = " ";            

    //Question1
    for (let i=0; i< answer1Array.length;i++){
        if (answer1Array[i].checked){
            answer1value = answer1Array[i].value;
        }
    }
    if(answer1value == "answer2") {
        document.getElementById("answer1").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer1").innerHTML = "Incorrect answer <br>Correct Answer is Kandy" ;
        score--;
    }        
                
    //Question2
    for (let i=0; i< answer2Array.length;i++){
        if (answer2Array[i].checked){
            answer2value = answer2Array[i].value;
        }
    }
    if(answer2value == "answer2") {
        document.getElementById("answer2").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer2").innerHTML = "Incorrect answer <br>Correct answer is Gotabaya Raajapaksha " ;
        score--;
    }    
                
    //Question3
    for (let i=0; i< answer3Array.length;i++){
        if (answer3Array[i].checked){
            answer3value = answer3Array[i].value;
        }
    }
    if(answer3value == "answer2") {
        document.getElementById("answer3").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer3").innerHTML = "Incorrect answer <br> Correct answer is Colombo" ;
        score--;
    }
            
    //Question4
    for (let i=0; i< answer4Array.length;i++){
        if (answer4Array[i].checked){
            answer4value = answer4Array[i].value;
        }
    }
    if(answer4value == "answer3") {
        document.getElementById("answer4").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer4").innerHTML = "Incorrect answer <br> Correct answer is Indian" ;
        score--;
    }
            
    //Question5
    for (let i=0; i< answer5Array.length;i++){
        if (answer5Array[i].checked){
            answer5value = answer5Array[i].value;
        }
    }
    if(answer5value == "answer1") {
        document.getElementById("answer5").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer5").innerHTML = "Incorrect answer <br> Correct answer is Lion" ;
        score--;
    }
            
    //Question6
    for (let i=0; i< answer6Array.length;i++){
        if (answer6Array[i].checked){
            answer6value = answer6Array[i].value;
        }
    }
    if(answer6value == "answer2") {
        document.getElementById("answer6").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer6").innerHTML = "Incorrect answer <br> Correct answer is Sinhala" ;
        score--;
    }
            
    //Question7
    for (let i=0; i< answer7Array.length;i++){
        if (answer7Array[i].checked){
            answer7value = answer7Array[i].value;
        }
    }
    if(answer7value == "answer1") {
        document.getElementById("answer7").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer7").innerHTML = "Incorrect answer <br> Correct answer is Hikkaduwa " ;
        score--;
    }
            
    //Question8
    for (let i=0; i< answer8Array.length;i++){
        if (answer8Array[i].checked){
            answer8value = answer8Array[i].value;
        }
    }
    if(answer8value == "answer2") {
        document.getElementById("answer8").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer8").innerHTML = "Incorrect answer <br> Correct answer is Pidurutalagala" ;
        score--;
    }
            
    //Question9
    for (let i=0; i< answer9Array.length;i++){
        if (answer9Array[i].checked){
            answer9value = answer9Array[i].value;
        }
    }
    if(answer9value == "answer1") {
        document.getElementById("answer9").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer9").innerHTML = "Incorrect answer <br> Correct answer is Ambalangoda" ;
        score--;
    }
            
    //Question10
    for (let i=0; i< answer10Array.length;i++){
        if (answer10Array[i].checked){
            answer10value = answer10Array[i].value;
        }
    }
    if(answer10value == "answer2") {
        document.getElementById("answer10").innerHTML = "Your answer is Correct" ;
        score +=2;
    }
    else{
        document.getElementById("answer10").innerHTML = "Incorrect answer <br> Correct answer is Nine" ;
        score--;
    }
    
    //score
    seconds2 = 60 - seconds;            
    document.getElementById("score").innerHTML = "<br>"+"<b>"+"You score is " +"<b>"+ score +"</b>"+" Points"+"<br>"+
    "You took "  + seconds2 + " Seconds to complete the Quiz"+"</b>";
            
    //background colour change
    if (score > 15){
        document.body.style.backgroundColor = "orange";
    }
    else if (score > 8) {
        document.body.style.backgroundColor = "yellow";
    }
    else {
        document.body.style.backgroundColor = "red";
    }
}    

/*The code is to scroll up the window when the user reaches the bottom of the page
When the user scrolls down 20px from the top of the document, show the button*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("TopBtn").style.display = "block";
    }else{
        document.getElementById("TopBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    