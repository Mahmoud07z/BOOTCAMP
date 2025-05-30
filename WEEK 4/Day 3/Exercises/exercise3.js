const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
const updatedUsers = usersArray.map(([key, value]) => [key, value * 2]);

console.log(updatedUsers);
