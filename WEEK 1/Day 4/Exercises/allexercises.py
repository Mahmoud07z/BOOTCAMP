#Exercise 1
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

#Exercise 2
class Dog:
    def __init__ (self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        return self.weight / self.age * 10
    def fight(self, other_dog):
        if self.run_speed() > other_dog.run_speed():
            return f'{self.name} wins the fight'
        elif self.run_speed() < other_dog.run_speed():
            return f'{other_dog.name} wins the fight'
        else:
            return 'It\'s a tie!'
dog1 = Dog('Croc', 3, 20)
dog2 = Dog('Doom', 5, 25)
dog1.bark()
dog2.bark()
dog1.run_speed()
dog2.run_speed()
dog1.fight(dog2)
dog2.fight(dog1)
print(dog2.bark())
print(dog1.run_speed())
print(dog2.fight(dog1))

#Exercise 3
from exercise2 import Dog
import random
class PetDog(Dog):
    def __init__ (self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    def train(self):
        self.trained = True
        print(self.bark())
    def play(self, *dog_names):
        print(f"{', '.join(dog_names)} all play together!")
        return "Playing together"
    
    def do_a_trick(self, tricks=None):
            if tricks is None:
                tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            if self.trained:
                return f'{self.name} {random.choice(tricks)}'
dog1 = PetDog('Croc', 3, 20, True)
dog2 = PetDog('Doom', 5, 25, False)            
print(dog1.train())
print(dog2.train())
print(dog1.do_a_trick())
print(dog2.do_a_trick()) 
print(dog1.play(dog1.name, dog2.name))
print(dog2.play(dog2.name, dog1.name))
        
            

#Exercise 4
class Person:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def is_18(self):
        return self.age >= 18


class Familly:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, self.last_name, age)
        self.members.append(new_member)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f'{first_name}, you are over 18. Your parents Jane and John accept that you will go out with your friends.')
                else:
                    print(f'{first_name}, sorry, you are not allowed to go out with your friends.')
                return
        print(f'{first_name} is not a member of the family.')

    def family_presentation(self):
        print(f'{self.last_name}')
        for member in self.members:
            print(f'{member.first_name} {member.last_name}, Age: {member.age}')


family_obj = Familly("Doe")   
family_obj.born("Sarah", 16)
family_obj.born("John", 25)
family_obj.born("Emily", 16)

family_obj.check_majority("Sarah")
family_obj.check_majority("Emily")
family_obj.check_majority("John")
family_obj.check_majority("Michael")  

family_obj.family_presentation()