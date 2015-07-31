'Use strict';
var bio = {
	"name" : "Matthew Barker",
	"role" : "Front-End Developer",
	"contacts": {  //curly brace denotes object
				"mobile" : "913-708-2035",
				"email" : "frostmoth@gmail.com",
				"github" : "github.com/centimani",
				"twitter" : "@mattbarker",
				"location" :"Lee's Summit, MO"
				},
	"welcomeMessage" : "Hello darkness my old friend...",
	"skills" : ["awesomeness", "DopeAF", "funnybro", "supercoolguybro"],
	"bioPic" :"http://placehold.it/200x200",
	"display" : function() {
		var data="%data%"; //if same reference is used multiple times, var it up
		if(bio.name.length){
				//name
			var formattedName = HTMLheaderName.replace(data, bio.name); 
			var formattedRole = HTMLheaderRole.replace(data, bio.role); 
			$("#header").prepend(formattedName);
			//contacts
			var formattedMobile = HTMLmobile.replace(data, bio.contacts["mobile"]);
			var formattedEmail = HTMLemail.replace(data, bio.contacts["email"]);
			var formattedTwitter =HTMLtwitter.replace(data, bio.contacts["twitter"]);
			var formattedgit = HTMLgithub.replace(data, bio.contacts["github"]);
			var formattedLoc = HTMLlocation.replace(data, bio.contacts["location"]);
			var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + formattedgit + formattedLoc ;
			$("#topContacts").append(formattedContacts);
			
			//img and msg
			var formattedimg = HTMLbioPic.replace(data, bio.bioPic);
				var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
			$("#header").append(formattedimg);
			$("#header").append(formattedMsg);
			}				
		
		if(bio.skills.length) { //does the array that has the skills in it, have skills in it?
			
			$("#header").append(HTMLskillsStart); //add the skill start

			for ( var skill=0; skill <= bio.skills.length -1; skill++){
				var formattedSkill=HTMLskills.replace(data, bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
		if(bio.contacts.mobile.length){
			var formattedMobile = HTMLmobile.replace(data, bio.contacts["mobile"]);
			var formattedEmail = HTMLemail.replace(data, bio.contacts["email"]);
			var formattedTwitter =HTMLtwitter.replace(data, bio.contacts["twitter"]);
			var formattedgit = HTMLgithub.replace(data, bio.contacts["github"]);
			var formattedLoc = HTMLlocation.replace(data, bio.contacts["location"]);
			var formattedContacts = formattedMobile + formattedEmail + formattedTwitter + formattedgit + formattedLoc ;
			$("#footerContacts").append(formattedContacts);
		}
	}

};

var education = {

	"schools": [
		{
			"name" :"Washington University in St. Louis",
			"location" : "St.Louis",
			"degree" : "Bachelors Fine Arts",
			"majors" : "Printmaking and Drawing",
			"dates" : "Fall 2006-Spring 2010",
			"url" : "http://wustl.edu"
		},
		{
			"name" :"Gnomon School of Visual Effects",
			"location" : "Hollywood, CA",
			"degree" : "N/A",
			"majors" : "Entertainment Design",
			"dates" : "Summer 2010-Summer 2011",
			"url" : "http://gnomonschool.com"
		}
	],
	"onlineCourses": [
		{
			"title":"Javascript Crash Course",
			"school":"Udacity",
			"dates": "August 2015",
			"url": "http://udacity.com"
		},
		{
			"title":"HTML/Css",
			"school":"Udacity",
			"dates": "August 2015",
			"url": "http://udacity.com"
		}
	],

	"display" : function(){
		var data="%data%"; //if same reference is used multiple times, var it up
		
		for (var school =0; school <= education.schools.length -1; school++){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
				formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
			var formattedSchoolDegree = formattedSchoolName + formattedDegree;
			var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
			var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
			var formateedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);

			$(".education-entry:last").append(formateedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

	$("#education").append(HTMLonlineClasses); //adds header
		for (school in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedOnlinetitle = HTMLonlineTitle.replace(data, education.onlineCourses[school].title);
			var formattedOnlineschool = HTMLonlineSchool.replace(data, education.onlineCourses[school].school);
			var formattedOnlinetitleschool = formattedOnlinetitle + formattedOnlineschool; //first bar
				formattedOnlinetitleschool = formattedOnlinetitleschool.replace("#", education.onlineCourses[school].url)
			var formattedOnlinedates = HTMLonlineDates.replace(data, education.onlineCourses[school].dates);
			var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[school].url);

			$(".education-entry:last").append(formattedOnlinetitleschool);
			$(".education-entry:last").append(formattedOnlinedates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

var work = {

	"jobs": [
		{
			"employer":"Starbucks",
			"title":"Shift Manager",
			"location": "Lee's Summit, MO", 
			"dates":"March 2013-August 2014",
			"description":"Coffee and bossman stuff",
			"url": "http://store.starbucks.com/"
		},
		{
			"employer":"Self",
			"title":"Proffesional Child Wrangler",
			"location": "Kansas City, MO", 
			"dates":"April 2012-Current",
			"description":"My day to day life sounds like a dramatic performance of that scene in Ridley Scott's 'Aliens' where the space marines go into the alien nest.",
			"url": "http://store.starbucks.com/"
		}
		],
	"display" : function(){
		var data="%data%"; //if same reference is used multiple times, var it up
		for (var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			formattedEmployerTitle = formattedEmployerTitle.replace("#", work.jobs[job].url)
			var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description)

			$(".work-entry:last").append(formattedEmployerTitle); // "." instead of # to access a "class" ID that has been made "last" is reference
			$(".work-entry:last").append(formattedDates); //dates
			$(".work-entry:last").append(formattedDescription); //description
		}
	}
};

var projects = {
	"projects": [
		{
			"title" : "Project1",
			"dates" : "August", 
			"description" : "I made a thing at the place and it was dope. ",
			"images" : [
						"http://placehold.it/250x250",
						"http://placehold.it/250x250",
						"http://placehold.it/250x250",
						"http://placehold.it/250x250"
						]
		},
		{
			"title" : "myproject2",
			"dates" : "string2", 
			"description" : "description2",
			"images" : [
						"http://placehold.it/250x250",
						"http://placehold.it/250x250",
						"http://placehold.it/250x250",
						"http://placehold.it/250x250"
						]
		}
	],

	"display" : function() {
	var data="%data%"; //if same reference is used multiple times, var it up
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart); //creates a new project
			var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			
			if (projects.projects[project].images.length>0){
				for (image in projects.projects[project].images){
					var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
};

//end vars, important fact JSON hates those last commas in objects or strings. also those last ; so leave that s be
//always use three === because == doesn't work sometimes.

bio.display();
work.display();
projects.display();
education.display();


/*
function inName (name){
	name = name.trim().split(" "); //splits the string at the .split() value. split returns an array.
	console.log(name);
	name[1] = name[1].toUpperCase(); //uppercases the last name
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase; //gets the first letter and uppercases it + gets everything after the 1+rest index and lowercases it.

	return name[0] +" "+name[1]; //returns the value of the name space lastname
}
*/

//$('#main').append(internationalizeButton);



//projects.display = function() { 
//use this to replace next line down in for encapsulating
//



//map tab
$("#mapDiv").append(googleMap);

//function locationizer (work_obj){
//	var locationArray =[];
//	for (job in Work_obj.jobs){
//		var newLocation =work_obj.jobs[job].location;
//		locationArray.push(newLocation); push is add to the back
//	}

//	return locationArray; //returns this as a value
//}


//for(initialization(start);condition(end);mutator(how to incriment))