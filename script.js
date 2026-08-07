console.log("CafeFlow Started");


//! for form feature-add
const menuForm = document.getElementById("menuForm");

menuForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const menuItem = {
        id: document.getElementById("itemId").value,
        name: document.getElementById("itemName").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value
    };

    console.log(menuItem);

    alert("Menu Item Added Successfully!");

    menuForm.reset();

});