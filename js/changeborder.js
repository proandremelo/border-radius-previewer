function apply(){
    var unity = getSelectUnity();
    var borderRadius = document.getElementById("border-radius");
    var topLeftValue = document.getElementById("border-top-left-radius").value;
    var topRightValue = document.getElementById("border-top-right-radius").value;
    var bottomRightValue = document.getElementById("border-bottom-right-radius").value;
    var bottomLeftValue =  document.getElementById("border-bottom-left-radius").value;
    topLeftValue = (topLeftValue == "") ? 5 : topLeftValue;
    topRightValue = (topRightValue == "") ? 5 : topRightValue;
    bottomRightValue = (bottomRightValue == "") ? 5 : bottomRightValue;
    bottomLeftValue = (bottomLeftValue == "") ? 5 : bottomLeftValue;
    borderRadius.style.borderTopLeftRadius = topLeftValue + unity;
    borderRadius.style.borderTopRightRadius = topRightValue + unity;
    borderRadius.style.borderBottomRightRadius = bottomRightValue + unity;
    borderRadius.style.borderBottomLeftRadius = bottomLeftValue + unity;
    printCodeCSS(topLeftValue, topRightValue, bottomRightValue, bottomLeftValue, unity);
}

function getSelectUnity(){
    return document.getElementById("unities").value;
}

function printCodeCSS(topLeftValue, topRightValue, bottomRightValue, bottomLeftValue, unity){    
    document.getElementById("code-css").value = `#border-radius{
        border: 2px solid black;
        border-top-left-radius: ${topLeftValue}${unity};
        border-top-right-radius: ${topRightValue}${unity};
        border-bottom-right-radius: ${bottomRightValue}${unity};
        border-bottom-left-radius: ${bottomLeftValue}${unity};
        display: flex;
        width: 300px;
        height: 150px;
        position: absolute;
        top: 15%;
        left: 38%;
    }`;
}
