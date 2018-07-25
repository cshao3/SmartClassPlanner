//return data to list from table
function itemClick(field, value, row) {
    var term = row["term"] - 1;
    term = term * 5;
    if (value === "" || value === "&nbsp") {
        return;
    }
    var list;
    var table;
    if (field === "fall") {
        list = fallList;
        table = fallTable;
    }
    if (field === "winter") {
        list = winterList;
        table = winterTable;
    }
    if (field === "spring") {
        list = springList;
        table = springTable;
    }
    if (field === "summer") {
        list = summerList;
        table = summerTable;
    }

    for (var i = 0; i < 5; i++) {
        if (table[term + i]["name"] === value) {
            if (confirm("The Class Name:   " + table[term + i]["name"] + "\nThe Class Detail:    " + table[term + i]["detail"] + "\nWould you like to remove from your table?")) {
                table[term + i]["name"] = "&nbsp";
                table[term + i]["detail"] = "&nbsp";
            } else {
                return;
            }
        }
    }

    $.each(list, function (n, item) {
        if (item["name"] === value) {
            list[n]["hidden"] = false;
        }
    });
    showList();
    updateTable(computeTableData());
}