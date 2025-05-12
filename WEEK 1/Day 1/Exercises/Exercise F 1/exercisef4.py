names = ['Invincible', 'Flash', 'Peter', 'Parker', 'Mario', 'Lugi', 'Logan']

user_name = input("Enter your name: ")

if user_name in names:
    print("Index:", names.index(user_name))
else:
    print("Name not found in the list.")
