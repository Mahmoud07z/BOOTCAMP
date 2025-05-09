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