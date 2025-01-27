User Management Dashboard:-
Overview:-
A simple web application for managing user details. The dashboard allows users to view, add, edit, and delete user information. It interacts with a mock backend API (JSONPlaceholder) to simulate user data management.

Features:-
View Users: Fetch and display a list of users.
Add User: Add a new user (though data won't actually be saved on the mock API).
Edit User: Edit existing user details and simulate updating the user.
Delete User: Delete a user and simulate the deletion on the mock API.
Responsive UI: Designed to be mobile-friendly.
Error Handling: Handles API failure scenarios.
Client-Side Validation: Ensures the user input form is correctly filled before submission.

Technologies Used:-
Frontend: HTML, CSS, Vanilla JavaScript
API Interaction: JSONPlaceholder (https://jsonplaceholder.typicode.com/)
Tools: Fetch API for making HTTP requests.

Setup and Run Instructions:-
Step 1: Clone the Repository
First, clone the repository to your local machine using the following command:

git clone <repository-url>

#Repository-Url:-https://github.com/jhansilakshmiragala/Ajackus-assignment.git

Step 2: Open the Project
Navigate into the project directory:

cd <project-directory>

#Project-Directory:-assignment

Step 3: Open the index.html File
You can open the index.html file in your preferred web browser directly:

open index.html

Alternatively, you can right-click the index.html file and select Open with to view it in a browser.

Step 4: Start Using the Application
Once opened in your browser, the application should be up and running. You can now:

View the list of users.
Add, edit, and delete users (with simulated results from the mock API).

Functionality:-
View: Displays a list of users fetched from the JSONPlaceholder /users endpoint.
Add: Simulates adding a new user to the backend. This will not persist data in the mock API.
Edit: Allows editing an existing user's details and simulates sending an update to the backend.
Delete: Allows deleting a user by sending a DELETE request to the mock API.
Error Handling: If any error occurs during API interaction, an error message is displayed to the user.


Bonus Features (Optional Enhancements)
Pagination/Infinite Scrolling:- Can be added to improve performance with a large number of users.
Input Validation: Basic form validation ensures all fields are completed before submission.
Mobile Responsiveness: The app is designed to be fully responsive across different devices.


Assumptions:-
The mock API (JSONPlaceholder) simulates adding, editing, and deleting users, but the data will not persist between sessions.
The application is focused primarily on functionality, and the UI is kept simple for clarity and usability.


Challenges Faced:-
Asynchronous Operations: Handling asynchronous operations properly with async/await for fetching and sending data.
Form Handling: Managing the form state for both adding and editing users.
API Mocking: Working with JSONPlaceholder’s simulated responses for creating, updating, and deleting users.


Improvements (If Given More Time)
User Authentication: Implement user login and authentication to secure the dashboard.
State Persistence: Use local storage or a backend server to persist user data.
Better Error Handling: Provide more detailed error messages and retry mechanisms when API requests fail.
Enhanced UI: Make the design more polished with animations and transitions.
