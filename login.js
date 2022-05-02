function myFunction(){
	var usernameusr = document.getElementById("usralias").value;
	sessionStorage.clear();
	sessionStorage.setItem("Welcome", usernameusr);
	window.location.replace("server.html");
}