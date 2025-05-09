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