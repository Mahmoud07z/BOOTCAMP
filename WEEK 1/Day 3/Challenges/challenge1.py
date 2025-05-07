class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        output = f"{self.name}'s Farm\n"
        output += "-" * (len(self.name) + 8) + "\n"
        for animal, count in self.animals.items():
            output += f"{animal:<10} : {count}\n"
        output += "\n    E-I-E-I-O!"
        return output
my_farm = Farm("Old MacDonald's")
my_farm.add_animal("cow", 5)
my_farm.add_animal("sheep", 3)
print(my_farm.get_info())