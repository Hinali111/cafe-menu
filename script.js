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



//! search
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

searchBtn.addEventListener("click", searchMenuItem);

resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    displayMenuItems();
});

function searchMenuItem(){

    const id = searchInput.value.trim();

    const filteredItems = menuItems.filter(item => item.id === id);

    menuTable.innerHTML = "";

    filteredItems.forEach((item,index)=>{

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