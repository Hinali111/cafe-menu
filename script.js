console.log("CafeFlow Started");


//! for form feature-add
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

//! display menu items
