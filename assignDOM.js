// Let's create a simple to do application 

// Show an unordered list of to do's 
// Show an input to enter a new to do 
// Show a button to add a to  do. When the button is clicked: 
// The text from the input box is used to add a list item to the bottom of the list 
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.



// The text from the input box is used to add a list item to the bottom of the list 
function myFunction() {
     let ul = document.getElementById("list");
    let addList=document.getElementById("addlist");
    let li = document.createElement("li");
    li.setAttribute("id", addList.value);
    li.setAttribute("onclick","remove(this)");
     li.appendChild(document.createTextNode(addList.value));
     ul.appendChild(li);
     document.getElementById("addlist").value= "";
  }

//// When the user clicks on a list item, it is removed

function remove(element){
    var toRemove =element;
    setTimeout(function(){
        element.remove();},1000);  

}

