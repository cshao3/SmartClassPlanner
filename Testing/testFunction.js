// This file is for testing the functions
// Use together with putListToTable.js and putTableToList.js


// Testing the setTable function first
setTable(1, winterTable, winterList, "CMPS12B"); // It should show CMPS12B on Table(Winter, 1).
setTable(2, springTable, springList, "CMPS12A"); // It should show CMPS12A on Table(Spring, 2).


// Testing add class from List to Table
fallClick("CMPS5J"); // Input 3. It should move the CMPS5J from the Fall List and add to Table(Fall, 3).

winterClick("CMPS12A"); // Input 2. It should move the CMPS12A from the Winter List and add to Table(Winter, 2).

springClick("CMPS12B"); // Input 1. It should move the CMPS12B from the Spring List and add to Table(Spring, 1).

summerClick("CMPS101"); // Input 4 which isn't 123. It should show "Input must be 1 or 2 or 3. Add fail!".

fallClick("CMPS12A"); // Input letter r which isn't 123. It should show "Input is not number. Add fail!".

fallClick("CMPS12A"); // Also input 3.

fallClick("CMPS12B"); // Also input 3.

fallClick("CMPS101"); // Also input 3.

fallClick("CMPS102"); // Also input 3.

fallClick("CMPS112"); // Also input 3. It can't be more than 5 classes in a quarter. It should show "The Term has 5 class. Can't be add!".


// Testing delete class from Table back to List
itemClick("fall", "CMPS5J", 3) // It should delete the CMPS5J from the Table and add back to the Fall List.

itemClick("winter", "CMPS12A", 2); // It should delete the CMPS12A from the Table and add back to the Winter List.

itemClick("winter", "CMPS101", 2); // There is no class on Table(Winter, 2). Nothing should happen.

itemClick("fall", "CMPS12A", 3) // It should delete the CMPS5J from the Table and add back to the Fall List.
