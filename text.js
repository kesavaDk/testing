
function onclickHandler(){
    const element=document.getElementById("myDiv");
    const newElement=document.createElement("div");
    newElement.textContent="king kiccha"
    let paragraph=document.createElement("p");
    paragraph.textContent="undo"
    newElement.appendChild(paragraph)
    element.appendChild(newElement)


}
