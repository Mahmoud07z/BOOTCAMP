birthdays = {
    "Alice": "1990/05/12",
    "Bob": "1985/07/22",
    "Charlie": "1993/10/05",
    "Diana": "1997/03/14",
    "Eve": "1988/12/30"
}

print("Welcome!")
print("Here are the people whose birthdays we have:")
for name in birthdays:
    print(name)

name = input("\nEnter the name of the person you want to look up: ")

if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}!")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")
