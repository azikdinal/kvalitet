function getNewFile(source) {
    var element = document.getElementById("df_manual_book");
    element.parentNode.removeChild(element);

    // create a new div element with text content
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "_df_book");
    newDiv.setAttribute("webgl", "true");
    newDiv.setAttribute("backgroundcolor", "rgb(33 46 71)");
    newDiv.setAttribute("source", source);
    newDiv.setAttribute("id", "df_manual_book");

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


