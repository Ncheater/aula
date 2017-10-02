function funcaosomar(){
	var n1 = document.getElementById("input1");
	var n2 = document.getElementById("input2");
	var sum;
	
	sum = parseFloat(n1.value) + parseFloat(n2.value);
	
	document.getElementById("resultado").innerHTML = sum;
}