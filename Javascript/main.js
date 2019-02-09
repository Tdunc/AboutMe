function showAbout() {
    
    
    document.getElementById("aboutMe").style.display = "block";
    document.getElementById("contact").style.display = "none";
    return true;
}

function showContact() {
    document.getElementById("aboutMe").style.display = "none";
    document.getElementById("contact").style.display = "block";
    
    return true;
}