(function(userName) {
    const navbar = document.getElementById('navbar');

    // Create div container for user info
    const userDiv = document.createElement('div');
    userDiv.style.display = 'flex';
    userDiv.style.alignItems = 'center';
    userDiv.style.gap = '10px';

    // Create welcome text
    const welcomeText = document.createElement('span');
    welcomeText.textContent = `Welcome, ${userName}`;

    // Create profile picture
    const profilePic = document.createElement('img');
    // Using a generic avatar image, you can replace with any URL or dynamic image source
    profilePic.src = 'https://i.pravatar.cc/40?img=7'; 
    profilePic.alt = `${userName}'s profile picture`;

    // Append welcome text and profile pic to userDiv
    userDiv.appendChild(welcomeText);
    userDiv.appendChild(profilePic);

    // Append userDiv to navbar
    navbar.appendChild(userDiv);
})('John');  // passing "John" as the signed-in user's name
