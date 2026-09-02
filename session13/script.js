let users = [
    { name: "Ahmed", email: "ahmed@email.com" },
    { name: "Mohamed", email: "mohamed@email.com" },
    { name: "Marwa", email: "marwa@email.com" }
];

localStorage.setItem('users', JSON.stringify(users));

let usersList = JSON.parse(localStorage.getItem('users')) || [];

let cartona = "";

usersList.forEach(user => {
    cartona += `
        <div>
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        </div>
    `;
});

document.getElementById('usersContainer').innerHTML = cartona;