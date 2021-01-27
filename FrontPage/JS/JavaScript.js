 
function openDropDown() {
    console.log('here')
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("dropDownWrapper").style.display = "inline-block";
    var navbar = document.getElementById("rightsideNav");
    navbar.style.height = "75vh";
    document.getElementById("listItems").style.display = "block";
    document.getElementById("rightsideNav").style.maxHeight = "65vh";
  
   

}
function closeDropDown() {
    document.getElementById("dropDownWrapper").style.display = "none";
    document.getElementById("hamburger").style.display = "inline-block";
    document.getElementById("rightsideNav").style.height = "auto"
    document.getElementById("listItems").style.display = "none";


}
