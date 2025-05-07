class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
        self.grouped_animals = {} 

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(f"- {animal}")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.grouped_animals = {}
        for animal in sorted(self.animals):
            letter = animal[0].upper()
            if letter in self.grouped_animals:
                self.grouped_animals.append(animal)
            else:
                self.grouped_animals[letter] = [animal]
        return self.grouped_animals

    def get_groups(self):
        if not self.grouped_animals:
            print("No grouped animals. Call sort_animals() first.")
        else:
            print("Grouped Animals:")
            for letter, group in self.grouped_animals.items():
                print(f"{letter}: {group}")

if __name__ == "__main__":
    my_zoo = Zoo("My Awesome Zoo")
    my_zoo.add_animal("Lion")
    my_zoo.add_animal("Tiger")
    my_zoo.add_animal("Bear")
    my_zoo.add_animal("Elephant")
    my_zoo.get_animals()
    my_zoo.sell_animal("Bear")
    print("\nAfter selling Bear:")
    my_zoo.get_animals()
    my_zoo.sort_animals()
    my_zoo.get_groups()



