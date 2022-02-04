/* INPUT FORM */
function openForm(){
    document.getElementById("saveBtn").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById('loginmodal').style.display='block';
    document.getElementById("expense").value = ""; // this to set them back to nothing
    document.getElementById("category").value = "Taxi";
    document.getElementById("payee").value = "";
    document.getElementById("date").value = "";
}

function closeForm(){
    document.getElementById('loginmodal').style.display='none';
}

/* FORM VALIDATION */
function validateForm(){
  
    var x = document.forms["expenseform"]["fExpense"].value;
    var y = document.forms["expenseform"]["fCategory"].value;
    var z = document.forms["expenseform"]["fPayee"].value;
    var i = document.forms["expenseform"]["fDate"].value;
    
  
if (x == "") {
    alert("Key in your expense.");
    return false;
  } else if (y == "") {
    alert("select a category.");
    return false;
  } else if (z == "") {
    alert("key in payee name");
    return false;
  } else if (i == "") {
    alert("Choose a date");
    return false;
  } else {
    return true;
  }
  
}

function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}

/* ARRAY */
var inputArr = [];
var janExp = 0;
var febExp = 0;
var marExp = 0;
var aprExp = 0;
var mayExp = 0;
var junExp = 0;
var julExp = 0;
var augExp = 0;
var sepExp = 0;
var octExp = 0;
var novExp = 0;
var decExp = 0;

var mthBtn = document.getElementById("mthBtn");

function createInput(Expense, Category, Payee, Date) {
    this.Expense = Expense;
    this.Category = Category;
    this.Payee = Payee;
    this.Date = Date;
};

function monthDisplay() {
  var select = document.getElementById("monthexp");
    if (select.value == "January") {
        document.getElementById("test1").innerHTML =  "<h2 id='mthexp'>" + "January: "  + "</h2>"
                                                        + "<h2 id='mthexpval'>" + "$" + janExp.toFixed(2) + "</h2>";
        }
    else if (select.value == "February") {
        document.getElementById("test1").innerHTML =  "<h2 id='mthexp'>" + "February: "  + "</h2>" 
                                                        + "<h2 id='mthexpval'>" + "$" + febExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "March") { 
        document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "March: "  + "</h2>" 
                                                        + "<h2 id='mthexpval'>" + "$" + marExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "April") {
        document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "April: "  + "</h2>" 
                                                        + "<h2 id='mthexpval'>" + "$" + aprExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "May") {
        document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "May: "  + "</h2>" 
                                                        + "<h2 id='mthexpval'>" + "$" + mayExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "June") {
        document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "June: "  + "</h2>" 
                                                        + "<h2 id='mthexpval'>" + "$" + junExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "July") {
            document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "July: "  + "</h2>" 
                                                            + "<h2 id='mthexpval'>" + "$" + julExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "August") {
            document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "August: "  + "</h2>" 
                                                            + "<h2 id='mthexpval'>" + "$" + augExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "September") {
            document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "September: " + "</h2>" 
                                                            + "<h2 id='mthexpval'>" + "$" + sepExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "October") {
        document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "October: "  + "</h2>" 
                                                            + "<h2 id='mthexpval'>" + "$" + octExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "November") {
            document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "November: "  + "</h2>" 
                                                            + "<h2 id='mthexpval'>" + "$" + novExp.toFixed(2) + "</h2>";
    }
    else if (select.value == "December") {
            document.getElementById("test1").innerHTML = "<h2 id='mthexp'>" + "December: "  + "</h2>" 
                                                            + "<h2 id='mthexpval'>" + "$" + decExp.toFixed(2) + "</h2>";
    }
}

function calculateMonth(){
    janExp = 0;
    febExp = 0;
    marExp = 0;
    aprExp = 0;
    mayExp = 0;
    junExp = 0;
    julExp = 0;
    augExp = 0;
    sepExp = 0;
    octExp = 0;
    novExp = 0;
    decExp = 0;
        for(var i = 0; i < inputArr.length; i++){
            var dateList = inputArr[i].mDate.split("-");
            var convertedDate = new Date(dateList[0], dateList[1]-1, dateList[2])
            
            if (convertedDate.getMonth() == 0) {
                janExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 1) {
                febExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 2) {
                marExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 3) {
                aprExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 4) {
                mayExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 5) {
                junExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 6) {
                julExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 7) {
                augExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 8) {
                sepExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 9) {
                octExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 10) {
                novExp += parseFloat(inputArr[i].mExpense);
            } else if (convertedDate.getMonth() == 11) {
                decExp += parseFloat(inputArr[i].mExpense);
            } 
        }
        monthDisplay(); 
}

function calculateOverall(){
    var Expense = 0;
        for(var i = 0; i < inputArr.length;i++){

            Expense += parseFloat(inputArr[i].mExpense);
        }
        document.getElementById('test').innerHTML = "<h2 id='mthexp'>" + "Total overall expense: " + "</h2>"
                                                    + "<h2 id='mthexpval'>" + "$ " + Expense.toFixed(2) + "</h2>";
}
var Row_Selector;

function editRow(r){
    Row_Selector = r.parentNode.parentNode
    var i = Row_Selector.rowIndex - 1;
    openForm();
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("expense").value = inputArr[i].mExpense;
    document.getElementById("category").value = inputArr[i].mCategory;
    document.getElementById("payee").value = inputArr[i].mPayee;
    document.getElementById("date").value = inputArr[i].mDate;
    calculateMonth();
    calculateOverall();
}

function updateRow(){
    var expense_val=document.getElementById("expense").value;
    var category_val=document.getElementById("category").value;
    var payee_val=document.getElementById("payee").value;
    var date_val=document.getElementById("date").value;

    var r = Row_Selector.rowIndex- 1;
    Row_Selector.childNodes[0].innerHTML = displayIcon();
    Row_Selector.childNodes[1].innerHTML = "$" + expense_val;
    Row_Selector.childNodes[2].innerHTML = payee_val;
    Row_Selector.childNodes[3].innerHTML = date_val;

    inputArr[r].mExpense = expense_val;
    inputArr[r].mCategory = category_val;
    inputArr[r].mPayee = payee_val;
    inputArr[r].mDate =date_val;
    calculateMonth();
    calculateOverall();
    closeForm();
}

function delRow(currNode){
    var myRowIndex = currNode.parentNode.parentNode.rowIndex;
    var table_len = myRowIndex - 1;
    document.getElementById("table").deleteRow(myRowIndex);
    inputArr.splice(table_len,1);
    calculateMonth();
    calculateOverall();
}

 function displayIcon(){
    if (document.getElementById("category").value == "Taxi") {
        var icon =  "<img id='taxijpg' src=\"taxi.png\" alt=\"taxi\" width=\"48\" height=\"48\" style='margin-top:10px'>"
        return icon;
    } else if (document.getElementById("category").value == "Bus") {
        var icon =  "<img id='busimg' src=\"bus.png\" alt=\"bus\" width=\"41\" height=\"41\" style='margin-top:6px'>"
        return icon;
    } else if (document.getElementById("category").value == "MRT") {
        var icon =  "<img id='trainimg' src=\"train.png\" alt=\"train\" width=\"45\" height=\"45\" style='margin-top:6px'>"
        return icon;
    } else if (document.getElementById("category").value == "Food") {
        var icon =  "<img id='foodimg' src=\"food.png\" alt=\"food_cutlery\" width=\"53\" height=\"53\" style='margin-top:6px'>"
        return icon;
    } else if (document.getElementById("category").value == "Medical") {
        var icon =  "<img id='medicalimg' src=\"medical.png\" alt=\"medical_symbol\" width=\"45\" height=\"45\" style='margin-top:6px'>"
        return icon;
    } else if (document.getElementById("category").value == "Shopping") {
        var icon =  "<img id='shoppingimg' src=\"shopping.png\" alt=\"shopping_cart\" width=\"44\" height=\"44\" style='margin-top:6px'>"
        return icon;
    } else if (document.getElementById("category").value == "Entertainment") {
        var icon =  "<img id='entertainimg' src=\"entertainment.png\" alt=\"entertain_gamepad\" width=\"46\" height=\"46\" style='margin-top:6px'>"
        return icon;
    } else if (document.getElementById("category").value == "Bills") {
        var icon =  "<img id='billsimg' src=\"bills.png\" alt=\"bill_note\" width=\"54\" height=\"54\" style='margin-top:6px'>"
        return icon;
    }
} 

function addTableRow(){
    if(validateForm()){
        var newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var mExpense = document.getElementById("expense").value;
        var mCategory = document.getElementById("category").value;
        var mPayee = document.getElementById("payee").value;
        var mDate = document.getElementById("date").value;
        
        var edit = "<input id='edit' type='button' value='Edit' onclick='editRow(this)'>";
        var del = "<input id='del' type='button' value='Delete' onclick='delRow(this)'>";
        

        var inputData = {
            mExpense: mExpense,
            mCategory: mCategory,
            mPayee: mPayee,
            mDate: mDate
        };

        inputArr.push(inputData);

        calculateMonth();
        calculateOverall();

        cell1.innerHTML = displayIcon();
        cell2.innerHTML = "$" + mExpense;
        cell3.innerHTML = mPayee;
        cell4.innerHTML = mDate;
        cell5.innerHTML = edit;
        cell5.className = "edit";
        cell6.innerHTML = del;
        cell6.className = "del";
        closeForm();
    }
}