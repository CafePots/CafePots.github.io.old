//moving tabs
function dragElement(elemnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var idStr = elemnt.id;
    if (document.getElementById(`${idStr}Header`)) {
        //if present, the header is where you move the DIV from:
        document.getElementById(`${idStr}Header`).onmousedown = dragMouseDown;
    } else {
        //otherwise, move div from anywhere
        elemnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        //mouse pos at start
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        //function when mouse moves
        document.onmousemove = elementDrag;
        return false;

    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        //new cursor pos
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        //set the element position:
        elemnt.style.top = (elemnt.offsetTop - pos2) + "px";
        elemnt.style.left = (elemnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        //stop moving when released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fadeOut(id){
    document.getElementById(id).className ='fadeOut';
    setTimeout(() => { document.getElementById(id).style.visibility ="hidden";},3000);
}
function fadeIn(id){
    document.getElementById(id).style.visibility ="visible";
    document.getElementById(id).className = "Tab";
    document.getElementById(id).classList.add("fadeIn");
    dragElement(document.getElementById(id));

}

function inFront(elment){
    document.getElementsByClassName('front').className ="Tab";
    document.getElementById(elment).classList.add("fadeIn");
    document.getElementById(elment).classList.add('front');
}