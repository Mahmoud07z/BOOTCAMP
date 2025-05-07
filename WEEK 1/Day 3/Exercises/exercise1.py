class Cat():
    def __init__(self, cat_name, cat_age):
        self.cat_name = cat_name
        self.cat_age = cat_age
home_cat = Cat("Cristiano", 5)
neighbor_cat = Cat("Garnacho", 3)
homeless_cat = Cat("Messi", 1)
def find_oldest_cat(home_cat, neighbor_cat, homeless_cat):
    if home_cat.cat_age > neighbor_cat.cat_age and home_cat.cat_age > homeless_cat.cat_age:
        return home_cat
    elif neighbor_cat.cat_age > home_cat.cat_age and neighbor_cat.cat_age > homeless_cat.cat_age:
        return neighbor_cat
    else:
        return homeless_cat
oldest_cat = find_oldest_cat(home_cat, neighbor_cat, homeless_cat)
print("The oldest cat is", oldest_cat.cat_name)