// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  	// initialize variables
	let cost = "Please make a selection above."
	
	// get age and day of the week
	let age = parseInt(document.getElementById('age').value)	
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

  	
	if (age < 5 || age > 95) {
		cost = "You have free admission."
	}
	else if ((day == "Tuesday") || (day == "Thursday)") 
			 || (age >=12) && (age <=21)) {
		cost = "Your admission is at student value."
	}
	else if ((age > 0) || (day != "")) {		
		cost = "Your admission is at regular value."
	}
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}
