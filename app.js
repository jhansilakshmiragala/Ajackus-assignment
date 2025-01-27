const apiUrl = 'https://jsonplaceholder.typicode.com/users';
let currentUser = null;

// Get DOM elements
const addBtn = document.getElementById('addBtn');
const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
const userModal = document.getElementById('userModal');
const closeBtn = document.getElementById('closeBtn');
const userForm = document.getElementById('userForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const departmentInput = document.getElementById('department');
const modalTitle = document.getElementById('modalTitle');

// Fetch users from API and display in table
async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        renderUsers(users);
    } catch (error) {
        alert('Error fetching users: ' + error.message);
    }
}

// Render users in the table
function renderUsers(users) {
    userTable.innerHTML = '';
    users.forEach(user => {
        const row = userTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name.split(' ')[0]}</td>
            <td>${user.name.split(' ')[1]}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
            <td>
                <button class="editBtn" data-id="${user.id}">Edit</button>
                <button class="deleteBtn" data-id="${user.id}">Delete</button>
            </td>
        `;
    });
    addEventListeners();
}

// Add event listeners for edit and delete buttons
function addEventListeners() {
    const editBtns = document.querySelectorAll('.editBtn');
    const deleteBtns = document.querySelectorAll('.deleteBtn');

    editBtns.forEach(btn => {
        btn.addEventListener('click', editUser);
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', deleteUser);
    });
}

// Open the modal to add a new user
addBtn.addEventListener('click', () => {
    currentUser = null;
    modalTitle.textContent = 'Add User';
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    departmentInput.value = '';
    userModal.style.display = 'block';
});

// Close the modal
closeBtn.addEventListener('click', () => {
    userModal.style.display = 'none';
});

// Edit user
async function editUser(event) {
    const userId = event.target.dataset.id;
    const response = await fetch(`${apiUrl}/${userId}`);
    const user = await response.json();
    currentUser = user;

    modalTitle.textContent = 'Edit User';
    firstNameInput.value = user.name.split(' ')[0];
    lastNameInput.value = user.name.split(' ')[1];
    emailInput.value = user.email;
    departmentInput.value = user.company.name;

    userModal.style.display = 'block';
}

// Delete user
async function deleteUser(event) {
    const userId = event.target.dataset.id;
    const confirmed = confirm('Are you sure you want to delete this user?');

    if (confirmed) {
        try {
            await fetch(`${apiUrl}/${userId}`, { method: 'DELETE' });
            alert('User deleted successfully');
            fetchUsers();
        } catch (error) {
            alert('Error deleting user: ' + error.message);
        }
    }
}

// Submit user form (Add/Edit)
userForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userData = {
        name: `${firstNameInput.value} ${lastNameInput.value}`,
        email: emailInput.value,
        company: {
            name: departmentInput.value
        }
    };

    if (currentUser) {
        // Edit user
        try {
            await fetch(`${apiUrl}/${currentUser.id}`, {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('User updated successfully');
        } catch (error) {
            alert('Error updating user: ' + error.message);
        }
    } else {
        // Add new user (JSONPlaceholder API doesn't actually add data)
        try {
            await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('User added successfully');
        } catch (error) {
            alert('Error adding user: ' + error.message);
        }
    }

    userModal.style.display = 'none';
    fetchUsers();
});

// Initialize the app
fetchUsers();
