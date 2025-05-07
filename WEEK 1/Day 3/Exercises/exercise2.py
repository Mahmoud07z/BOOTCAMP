class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumped {jump_height} feet high!")

def compare_dogs(dog1, dog2):
    if dog1.height > dog2.height:
        print(f"{dog1.name} is taller than {dog2.name}")
    elif dog1.height < dog2.height:
        print(f"{dog2.name} is taller than {dog1.name}")
    else:
        print(f"{dog1.name} and {dog2.name} are the same height")

sarahs_dog = Dog("Max", 2)
davids_dog = Dog("Logan", 1.5)

sarahs_dog.bark()
sarahs_dog.jump()

compare_dogs(sarahs_dog, davids_dog)

