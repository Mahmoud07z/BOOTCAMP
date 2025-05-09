class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'
class Siamese(Cat):
        def __init__(self, name, age, color):
            super().__init__(name, age)
            self.color = color
bengal_obj = Cat(name="Bengal", age=2)
chartreux_obj = Cat(name="Chartreux", age=3)
siamese_obj = Siamese(name="Siamese", age=4, color="Cream")
all_cats = [bengal_obj, chartreux_obj, siamese_obj]
sara_cats = Pets(all_cats)
sara_cats.walk()