
var bio = {
    "name": "Rahul Verma",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to My Page",
    "pic": "images/fry.jpg",
    "contacts": {
        "mobile": "1234567890",
        "email": "rahulverma@example.com",
        "github": "github.com/rahulverma",
        "twitter": "@rahulverma",
        "location": "San Francisco CA"
    },
    "skills": [
        "Responsive Web Designing",
        "JavaScript",
        "Selenium Development",
        "iOS Development",
        "Agile Process"
    ]
};

var education = {
    "schools": [
        {
            "name": "University of Arizona",
            "location": "Tucson AZ",
            "degree": "ECE",
            "majors": [
                "Computers",
                "Electronics"
            ],
            "dates": "2005-2007",
            "url": "www.ece.arizona.edu"
        },
        {
            "name": "K.J.Somaiya College og Engineering",
            "location": "Tucson AZ",
            "degree": "Electronics Engineering",
            "majors": [
                "Electronics",
                "Computers"
            ],
            "dates": "2001-2005",
            "url": "www.arizona.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Responsive Web Design",
            "school": "Udacity",
            "dates": "2013-2014",
            "url": "www.Udacity.com"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2013-2014",
            "url": "www.Udacity.com"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "ABC Corp",
            "title": "Web Developer",
            "location": "San Francisco CA",
            "dates": "2014 - Current",
            "description": "Web Design of ABC Corp Home Page"
        },
        {
            "employer": "XYZ Corp",
            "title": "Web Developer",
            "location": "San Francisco CA",
            "dates": "2013 - 2014",
            "description": "Web Design of Online Inventory System for XYZ Corp"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "PC to PC Fiber Optic Communication",
            "dates": "2014-current",
            "description": "Designed a Fiber Optic Cable Network and developed firmware for two PCs to transfer data from one PC to another through the fiber optic cable",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "License Plate Recognition System",
            "dates": "2012-2014",
            "description": "Designed a License Plate Recognition System that captures a license plate image and runs an algorithm on the image to extract the License Number, run it through a DB and fetch the driver's information",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

bio.display = function(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);
    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        for(skill in bio.skills){
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

work.display=function(){
    for (var job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    } 

}

projects.display = function(){
    for (var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
        
    }
   
}

education.display = function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedNameSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegreeSchool = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedNameSchool + formattedDegreeSchool); 
        
        var formattedDatesSchool = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDatesSchool); 

        var formattedLocationSchool = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocationSchool);

        if(education.schools[school].majors.length > 0){
            for(major in education.schools[school].majors){
                var formattedMajorSchool = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajorSchool);
            }
        }
    }

    if(education.onlineCourses.length > 0){
        $("#education").append(HTMLonlineClasses);
    }    

    for(onlineCourse in education.onlineCourses){
        $("#education").append(HTMLschoolStart);

        var formattedTitleOnline = HTMLonlineTitle .replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedSchoolOnline = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedTitleOnline + formattedSchoolOnline); 
        
        var formattedDatesOnline = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".education-entry:last").append(formattedDatesOnline); 

        var formattedURLOnline = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedURLOnline);
    }
}

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

function inName(name) {

    var names = name.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var finalName = names.join(" ");
    return finalName;
}

$("#mapDiv").append(googleMap);





