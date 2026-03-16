function getNewList(source) {
    var element = document.getElementById("myScrollContainer");
    element.parentNode.removeChild(element);

    // create a new div element with text content
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "myScrollContainer");
    
    // find the existing div element to append the new div to
    var existingDiv = document.getElementById("cont");
    existingDiv.appendChild(newDiv)

    loadScript();

    function loadScript() {
        var script = document.createElement("script");
        script.src = "dflip/js/dflip.min.js";
        document.body.appendChild(script);
    }
}