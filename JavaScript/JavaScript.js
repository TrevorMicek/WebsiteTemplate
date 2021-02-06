 
function openDropDown(e) {
    console.log('here')
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("dropDownWrapper").style.display = "inline-block";
    var listItems = document.getElementById("listItems")
    listItems.style.display = "block";
    listItems.style.height = "66vh";
    document.getElementById("rightsideNav").style.maxHeight = "9vh";

}
function closeDropDown() {
    document.getElementById("dropDownWrapper").style.display = "none";
    document.getElementById("hamburger").style.display = "inline-block";
    document.getElementById("rightsideNav").style.height = "auto";
   
    document.getElementById("listItems").style.display = "none";
    
}
