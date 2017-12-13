				// Corousel On Front Page
	'use strict';
$(function(){
	var width=720;
	var animationSpeed = 7000;
	var currentSlide=1;
	var $slider=$('#slider');
	var $slideContainer=$slider.find('.slides');
	var $slides=$slideContainer.find('.slide');
		setInterval(function(){
			$slideContainer.animate({'margin-left':'-='+width},animationSpeed, function() {
				++currentSlide;
				if(currentSlide === $slides.length){
				currentSlide=1;
				$slideContainer.css('margin-left',0);
				
				}
		});
		});
		
});

					// Log In Page
		
var existingAccounts = [
	{
		email: "bindu076@gmail.com" ,
		password: "bindu076"
	},
	{
		email: "bindu4545@gmail.com" ,
		password: "bindu4545"
	}
];

	var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;  
	var errors = [];
		function checkForm(form){
			var email = form.username.value;
			var password = form.pwd1.value;
			checkValidation(email,password);
				if(errors.length == 0){
				  checkIfExisting(existingAccounts, email, password);
			 }

		}
		function checkValidation(email,password){
			if (!ck_email.test(email)) {
			[errors.length] = "You must enter a valid email address.";
		 }

		 if (password =='') {
		  errors[errors.length] = "You must enter the password ";
		 }
		 if (errors.length > 0) {        
		  reportErrors(errors);
		 }
		}
		function checkIfExisting(existingAccounts, email, password){
			
			for (var i = 0; i < existingAccounts.length; i++) {
			var msg = "";
				if(existingAccounts[i].email == email && existingAccounts[i].password == password){
					window.location.assign("https://www.w3schools.com");
					break;
				} else{
					msg += "\n No,account doesn't exists" ;
					alert(msg);
				}
			}
			 
		}
		function reportErrors(errors){
			 var msg = "Please Enter Valide Data...\n";
			 for (var i = 0; i< errors.length; i++) {
			 var numError = i + 1;
			  msg += "\n" + numError + ". " + errors[i];
			}
			 alert(msg);
			}
			
		function createForm(form){
			var newEmail = form.username1.value;
			var newPwd = form.pwd1.value;
			var confirmPwd = form.pwd2.value;
			if(newPwd == confirmPwd){
				console.log("password Match");
				checkValidation(newEmail,newPwd);	
				var temp = {};
				temp.email = newEmail;
				temp.password = newPwd;
				existingAccounts.push(temp);
				
			}else{
				alert("password Match not found, Re-enter the password");
			}
			return existingAccounts;
		}
			  // Order Page
			
			
			function address_validation(form){
				var street_address = form.address1.value;
				var suite_address = form.address2.value;
				var city_address = form.address3.value;
				var state_address = form.address4.value;
				var zip_address = form.address5.value;
				
				if(street_address == ""){
					errors[errors.length] = "Enter street Address";
			} 
			if(suite_address ==""){
				errors[errors.length] = "Enter Suite Address";
			}
			if(!city_address.match(/^[A-Z]/)){
				errors[errors.length] = "Enter the City In UpperCase";
			}
			if(state_address.length !== 2){
				errors[errors.length] = "Enter State";
			}
			if (zip_address.length !== 5 && !zip_address.match(/^[0-9]/)){
				errors[errors.length] = "Enter ZipCode"
			}
			if (errors.length > 0) {        
				reportErrors(errors);
			}
			else{
				window.open("oders.html");
			}
			}
			function carryOut(form){
				var cityAddress = form.address6.value;
				var stateAddress = form.address7.value;
				var zipAddress = form.address8.value;
				if(!cityAddress.match(/^[A-Z]/)){
				errors[errors.length] = "Enter the City In UpperCase";
				}
				if(stateAddress.length !== 2){
					errors[errors.length] = "Enter State";
				}
				if (zipAddress.length !== 5 && !zipAddress.match(/^[0-9]/)){
					errors[errors.length] = "Enter ZipCode";
				}
				if (errors.length > 0) {        
					reportErrors(errors);
				}
				else{
					window.open("oders.html");
				}
				}
			
			function hideDelivery(id){
				var hide = document.getElementById(id);
				var deliveryButton = document.getElementById("button1");
				var carryOutButton =document.getElementById("button2");
				if(id == 'addressForm'){
					carryOutButton.style.visibility='hidden' ;
					
					
				}else{
					deliveryButton.style.visibility='visible';
				}
				if(hide.style.display == "none"){
					hide.style.display ="block";
					
				}else{
					hide.style.display = "none";
				}
				
			}
		// $(function(){
		// $("#delivery").toggle();
		// $("#carryOut").toggle();
		// $("#button1").on("click",function(){
			// $("#delivery").toggle();
			// $("#button2").toggle();
		// });
		// $("#button2").on("click",function(){
			// $("#carryOut").toggle();
			// $("#button1").toggle();
		// });
	// });