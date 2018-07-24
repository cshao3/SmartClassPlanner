//return the data to table from list

function fallClick(index) {
    console.log(fallList[index]);
    if (confirm("The Class Name:   " + fallList[index]["name"] + "\nThe Class Detail:    " + fallList[index]["detail"] + "\nWould you like to add to your table?")) {
        var input = prompt("Input the years you want add:");
        input = parseInt(input);
        if (isNaN(input)) {
            alert("Input is not number. Add fail!");
        } else if (input < 1 || input > 3) {
            alert("Input must be 1 or 2 or 3. Add fail!");
        } else {
            setTable(input - 1, fallTable, fallList, index);
        }
    }
    showList();
}

function winterClick(index) {
    console.log(winterList[index]);
    if (confirm("The Class Name:   " + winterList[index]["name"] + "\nThe Class Detail:    " + winterList[index]["detail"] + "\nWould you like to add to your table?")) {
        var input = prompt("Input the years you want add:");
        input = parseInt(input);
        if (isNaN(input)) {
            alert("Input is not number. Add fail!");
        } else if (input < 1 || input > 3) {
            alert("Input must be 1 or 2 or 3. Add fail!");
        } else {
            setTable(input - 1, winterTable, winterList, index);
        }
    }
    showList();
}

function springClick(index) {
    console.log(springList[index]);
    if (confirm("The Class Name:   " + springList[index]["name"] + "\nThe Class Detail:    " + springList[index]["detail"] + "\nWould you like to add to your table?")) {
        var input = prompt("Input the years you want add:");
        input = parseInt(input);
        if (isNaN(input)) {
            alert("Input is not number. Add fail!");
        } else if (input < 1 || input > 3) {
            alert("Input must be 1 or 2 or 3. Add fail!");
        } else {
            setTable(input - 1, springTable, springList, index);
        }
    }
    showList();
}

function summerClick(index) {
    console.log(summerList[index]);
    if (confirm("The Class Name:   " + summerList[index]["name"] + "\nThe Class Detail:    " + summerList[index]["detail"] + "\nWould you like to add to your table?")) {
        var input = prompt("Input the years you want add:");
        input = parseInt(input);
        if (isNaN(input)) {
            alert("Input is not number. Add fail!");
        } else if (input < 1 || input > 3) {
            alert("Input must be 1 or 2 or 3. Add fail!");
        } else {
            setTable(input - 1, summerTable, springList, index);
        }
    }
    showList();
}

function setTable(term, table, list, index) {
    var flag = true;
    term = 5 * term;
    if (table[term]["name"] === "" || table[term]["name"] === "&nbsp") {
        table[term]["name"] = list[index]["name"];
        table[term]["detail"] = list[index]["detail"];
        flag = false;
    }
    if ((table[term + 1]["name"] === "" || table[term + 1]["name"] === "&nbsp") && flag) {
        table[term + 1]["name"] = list[index]["name"];
        table[term + 1]["detail"] = list[index]["detail"];
        flag = false;
    }
    if ((table[term + 2]["name"] === "" || table[term + 2]["name"] === "&nbsp") && flag) {
        table[term + 2]["name"] = list[index]["name"];
        table[term + 2]["detail"] = list[index]["detail"];
        flag = false;
    }
    if ((table[term + 3]["name"] === "" || table[term + 3]["name"] === "&nbsp") && flag) {
        table[term + 3]["name"] = list[index]["name"];
        table[term + 3]["detail"] = list[index]["detail"];
        flag = false;
    }
    if ((table[term + 4]["name"] === "" || table[term + 4]["name"] === "&nbsp") && flag) {
        table[term + 4]["name"] = list[index]["name"];
        table[term + 4]["detail"] = list[index]["detail"];
        flag = false;
    }
    if (flag) {
        alert("The Term has 5 class. Can't be add!")
    } else {
        list[index]["hidden"] = true;
        updateTable(computeTableData());
    }
}