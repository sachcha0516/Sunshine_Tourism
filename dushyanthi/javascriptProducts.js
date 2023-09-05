/*----------------------------------------- ADD TO CART------------------------------------------------- */
let itemNumbers=[];
let totalBill=0;

let value;

function addtocart1(){
	price1=document.getElementById("quantity1").value*1500;
	itemNumbers.push(price1);
	window.alert("Number of "+document.getElementById("quantity1").value+" t-shirts added to the cart.your t-shirts total price is "+price1+"LKR");
}
function addtocart2(){
	price2=document.getElementById("quantity2").value*150;
	itemNumbers.push(price2);
	window.alert("Number of "+document.getElementById("quantity2").value+" masks added to the cart.your masks total price is "+price2+"LKR");
}
function addtocart3(){
	price3=document.getElementById("quantity3").value*1200;
	itemNumbers.push(price3);
	window.alert("Number of "+document.getElementById("quantity3").value+" mugs added to the cart.your mugs total price is "+price3+"LKR");
}
function addtocart4(){
	price4=document.getElementById("quantity4").value*700;
	itemNumbers.push(price4);
	window.alert("Number of "+document.getElementById("quantity4").value+" caps added to the cart.your caps total price is "+price4+"LKR");
}
function addtocart5(){
    price5=document.getElementById("quantity5").value*100;
	itemNumbers.push(price5);
	window.alert("Number of "+document.getElementById("quantity5").value+" pins added to the cart.your pins total price is "+price5+"LKR");
}
function addtocart6(){
    price6=document.getElementById("quantity6").value*2500;
	itemNumbers.push(price6);
	window.alert("Number of "+document.getElementById("quantity6").value+" backpacks added to the cart.your backpacks total price is "+price6+"LKR");
}
function addtocart7(){
    price7=document.getElementById("quantity7").value*800;
	itemNumbers.push(price7);
	window.alert("Number of "+document.getElementById("quantity7").value+" water bottles added to the cart.your water bottles total price is "+price7+"LKR");
}
function addtocart8(){
    price8=document.getElementById("quantity8").value*50;
	itemNumbers.push(price8);
	window.alert("Number of "+document.getElementById("quantity8").value+" key tags added to the cart.your keytags total price is "+price8+"LKR");
}

/*--------------------------------------------END OF ADD TO CART-----------------------------------------------*/

/*------------------------------------------FORM VALIDATION AND INVOICE----------------------------------------------------*/
function Totalbill(){
	for(let i = 0, len = itemNumbers.length; i < len; i++){
    	totalBill += eval(itemNumbers[i]);
	}
	let firstName = document.forms["form1"]["fname"].value;
	let lastName = document.forms["form1"]["Lname"].value;
	let email= document.forms["form1"]["email"].value;
	let country= document.forms["form1"]["country"].value;
	let adress= document.forms["form1"]["StreetA"].value;
	let city= document.forms["form1"]["city"].value;
	let mobile=document.forms["form1"]["tel"].value;

	if (firstName=="" ){
		alert("You should fill the FIRST NAME field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";
	}
	if (lastName=="" ){
		alert("You should fill the LAST NAME field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";
	}
	if (email==""){
		alert("You should fill the E MAIL field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";	
	}
	if(country==""){
		alert("You should fill the COUNTRY/REGION field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";
	}
	if(adress==""){
		alert("you should fill the STREET ADRESS field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";
	}
	if(city==""){
		alert("you should fill the CITY field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";
	}
	if(mobile==""){
		alert("you should fill the MOBILE field");
	}
	else{
		document.getElementById("invoice").innerHTML="Name: "+document.getElementById("fname").value+" "+document.getElementById("Lname").value+ "<br>" + "E mail: "+document.getElementById("email").value+"<br>"+"Invoice details"+"<br>"+"------------------------------"+"<br>"+"Your total price of the bill is "+eval(totalBill)+" LKR"+"<br>"+"Thank You for purchasing with us!!!!";
	}
}
/*---------------------------------------END OF FORM VALIDATION AND INVOICE---------------------------*/


