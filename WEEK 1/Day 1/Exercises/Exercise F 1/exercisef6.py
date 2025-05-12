import random

wins = 0
losses = 0

while True:
    user_input = input("Enter a number from 1 to 9 (or type 'quit' to exit): ")

    if user_input.lower() == 'quit':
        break

    if not user_input.isdigit():
        print("Please enter a valid number.")
        continue

    guess = int(user_input)

    if guess < 1 or guess > 9:
        print("Number must be between 1 and 9.")
        continue

    random_number = random.randint(1, 9)

    if guess == random_number:
        print("Winner 🎉")
        wins += 1
    else:
        print(f"Better luck next time. The number was {random_number}.")
        losses += 1

print("\nGame over.")
print("Total games won:", wins)
print("Total games lost:", losses)
