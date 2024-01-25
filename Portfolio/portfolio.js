var skillstab = document.getElementsByClassName("skills-edu-exp")
var skillscontent = document.getElementsByClassName("skills-contents")

function opentab(tabname){
    for(tablink of skillstab){
        tablink.classList.remove("active-tab")
    }

    for(tabcontent of skillscontent){
        tabcontent.classList.remove("active-contents")
    }
    event.currentTarget.classList.add("active-tab")
    document.getElementById(tabname).classList.add("active-contents")
}


var menu = document.getElementById("sidemenu");

function openmenu(){
    menu.style.right ="0px";

}

function closemenu(){
    menu.style.right ="-170px";

}