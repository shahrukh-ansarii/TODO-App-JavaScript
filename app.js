var list = document.getElementById("list")

function addTodo(){

    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    list.appendChild(li)
    

var delBTN = document.createElement("button")
var delTxt = document.createTextNode("DELETE")
delBTN.setAttribute("class","dltBtnStyle")
delBTN.setAttribute("onclick","deleteBtn(this)")
delBTN.appendChild(delTxt)


var editBTN = document.createElement("button")
var editTxt = document.createTextNode("EDIT")
editBTN.setAttribute("class","editBtnStyle")
editBTN.setAttribute("onclick","editBtn(this)")
editBTN.appendChild(editTxt)


li.appendChild(editBTN)
li.setAttribute("class","todoItemStyle")
li.appendChild(delBTN)

    todo_item.value = ""
   
    
}
function deleteBtn(e){
    e.parentNode.remove()
}
function delTodo(){
    list.innerHTML=""
}
function editBtn(a){
    var val = a.parentNode.firstChild.nodeValue
   var editvalue = prompt("Enter value",val)
   a.parentNode.firstChild.nodeValue = editvalue


}
