var form = document.getElementById('form');

var username = document.getElementById('username');

var password = document.getElementById('password');

var submitButton = document.getElementById('submitButton');


function validateEmpty()
{

	if(username.value.trim() === '' || password.value.trim() === '')
	{
		alert("Fields cannot be empty");
		return false;
	} 

	else 
	{
		return true;
	}
	

}

function validateInputs(callback) 
{

	var valemp = callback();

	if(valemp === true)
	{
		if(username.value.trim() === "admin" && password.value.trim() === "12345")
		{
			location.href = "/list_page.html";
			return true;
		} 
		else 
		{
			alert("Wrong login details");
			return false;
		}
	}

}


submitButton.addEventListener('click', e => {
	
	console.log("Event data",e);
	e.preventDefault();
	
	// var valemp = validateEmpty();

	// if(valemp === true)
	// {
	// 	validateInputs();
	// }
	validateInputs(validateEmpty);


});






