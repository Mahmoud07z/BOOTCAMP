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
        
            

