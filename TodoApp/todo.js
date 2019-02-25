function addItemToList() {
    var item = document.forms["addItem"]["newItem"].value;
    if (item == "") {
      alert("You forgot to type an item in!");
    }
    else{
        var enode = document.createElement("li");
        var tnode = document.createTextNode(item);
        enode.appendChild(tnode); 
        document.getElementById("list").appendChild(enode);
    }
  }
