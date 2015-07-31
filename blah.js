//$("#main").append("James");
//string.replace(old,new);




//var awesomeThoughts ="I am Matthew Barker and I am Awesome";
//var funThoughts = 
//	awesomeThoughts.replace("Awesome", "Fun");


//console.log(awesomeThoughts);
//console.log(funThoughts);

//$("#main").append(funThoughts);


//var formattedName = HTMLheaderName.replace("%data", Matthew);
//$("#header").append(formattedName); 

var formattedName = HTMLheaderName.replace("%data%", "Matt Barker"); //Formatted Name
var role = "Front-End Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role); //Formatted Role
var skills =
	["awesomeness", "programming", "teaching", "JS"];

var bio = {
	"name" : "Matt",
	"role" : "Front-End Developer",
	"contactinfo" : "frostmoth@gmail.com", 
	"pictureURL" : "",
	"welcomeMessage" : "Hello!", 
	"skills" : "skills"
};

var work = {
}

var education ={
}

work.jobPosition="Unemployed";
work.employer="me";
work.yearsWorked="all of them";
work.city="Everywhere";
education["LastSchool"] ="Gnomon";
education["yearsAttended"] ="1";
education["schoolsCity"] ="LA";

$("#main").append(work["jobPosition"]);
$("#main").append(education.LastSchool);
//$("#main").append(skills[0]); gets the value of the index of an array

//var s = "audacity"
// s = s[1] which gets the "1" instead of zero@A 
//.toUppercase() makes that letter Uppercase
//+ s.slice(2); grabs the s slice from the 3rd out
//s =s[1].toUppercase + s.slice(2); is whe whole thing
//array.pop() returns the last element in the array....
//array.push() is the append but for arrays
//.split(" ") splits an string at the spacebar
//.join(" ") is the opposite
//adding properties outside of object is easy by object.property = definition


//$(document).click(function(loc) {
  // your code goes here
});

for (job in work_obj.jobs)
		var newLocation=work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;

/*
//my crap version
function inName(Namehere){
	var newname; //make a new name
	var newfirst;
	var newlast;
	newname=namehere.splice(" "); //splits the string into two
	newfirst=newname[0].slice(0).touppercase()+newname[0].slice(1).tolowercase;
	newlast=newname[1].toUppercase;
	newname="newfirst+newlast";
	retaurn newname;
}

//right version
function inName(name) {
	name= name.trim().split(" "); //trim removes the white space from front and back....split " " makes it into two indexes in an array.
	console.log(name);
	name[1]= name[1].toUppercase(); //caps last name
	name[0]= name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase(); //name[0] first name. slice 0-1 gives first letter, then uppercase'd it. then add it to name0 slice->>>>1 on, lowercase

		return name[0]+" "+name[1];

*/

}

/*this function finds where the mouse clicks
$(document).click(function(loc) {
	var x =loc.pageX; //save these 
	var y =loc.pageY;

  console.log(x, y);
});
*/