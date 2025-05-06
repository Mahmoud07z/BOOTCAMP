sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
finished_sandwiches = []   
sandwich_orders.remove("Tuna sandwich")
finished_sandwiches.append("Tuna sandwich")
sandwich_orders.remove("Avocado sandwich")
finished_sandwiches.append("Avocado sandwich")
sandwich_orders.remove("Egg sandwich")
finished_sandwiches.append("Egg sandwich")
sandwich_orders.remove("Chicken sandwich")
finished_sandwiches.append("Chicken sandwich")
for sandwich in finished_sandwiches:
    print("I made your " + sandwich)

