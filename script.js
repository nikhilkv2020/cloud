// Handle form submission and save data to localStorage
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Get existing data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user data
    users.push({ name, email });

    // Save updated data to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Reset form
    document.getElementById('userForm').reset();
});

// Display user data on the display.html page
if (window.location.pathname.includes('display.html')) {
    const userData = document.getElementById('userData');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
        userData.appendChild(row);
    });
}
