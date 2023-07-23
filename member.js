function skillsMemeber() {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("skillsMemberButton").innerHTML = "Hide";
    } else {
      x.style.display = "none";
      document.getElementById("skillsMemberButton").innerHTML = "Show";
    }
}