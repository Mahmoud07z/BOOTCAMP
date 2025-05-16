from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nProgram Menu:")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("\nFinal Restaurant Menu:")
            show_restaurant_menu()
            print("Goodbye!")
            break
        else:
            print("Invalid choice, try again.")

def add_item_to_menu():
    name = input("Enter the item name: ").strip()
    try:
        price = int(input("Enter the item price: "))
        item = MenuItem(name, price)
        item.save()
        print(f"'{name}' was added successfully.")
    except Exception as e:
        print("Error adding item:", e)

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"'{name}' was deleted successfully.")
    else:
        print(f"Error: '{name}' not found in the menu.")

def update_item_from_menu():
    current_name = input("Enter the current item name: ").strip()
    item = MenuManager.get_by_name(current_name)
    if item:
        new_name = input("Enter the new name: ").strip()
        try:
            new_price = int(input("Enter the new price: "))
            item.update(new_name, new_price)
            print(f"'{current_name}' was updated successfully to '{new_name}' with price {new_price}.")
        except Exception as e:
            print("Error updating item:", e)
    else:
        print(f"Error: '{current_name}' not found in the menu.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\nRestaurant Menu:")
        for name, price in items:
            print(f"- {name}: ${price}")
    else:
        print("The menu is currently empty.")

def view_item():
    name = input("Enter the item name to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item found: {item.name} - ${item.price}")
    else:
        print("Item not found.")

if __name__ == '__main__':
    show_user_menu()
