console.log("CafeFlow Started");


//! for form feature-add
const menuForm = document.getElementById("menuForm");

let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];

menuForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const menuItem = {
        id: document.getElementById("itemId").value,
        name: document.getElementById("itemName").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value
    };

    menuItems.push(menuItem);

    localStorage.setItem("menuItems", JSON.stringify(menuItems));

    displayMenuItems();

    menuForm.reset();

});


//! display menu-itmes
const menuTable = document.getElementById("menuTable");
let menuItems = JSON.parse(localStorage.getItem("menuItems")) || [];
function displayMenuItems() {
    menuTable.innerHTML = "";
    menuItems.forEach((item,index)=>{
        menuTable.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>₹${item.price}</td>
                <td>
                    <button class="delete-btn">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}
displayMenuItems();