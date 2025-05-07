import random

def get_random_temp(season):
    if season == "Winter":
        return random.randint(-10, 10)
    elif season == "Autumn":
        return random.randint(11, 15)
    elif season == "Spring":
        return random.randint(16, 25)
    elif season == "Summer":
        return random.randint(26, 40)
    else:
        return random.randint(-10, 40)

def main():
    season = "Winter"
    temp = get_random_temp(season)
    print(f"The temperature is {temp}°C.")

    if temp <= 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temp <= 23:
        print("Perfect weather!")
    elif 24 <= temp <= 32:
        print("It’s getting hot! Stay hydrated")
    elif 32 < temp <= 40:
        print("It’s boiling! Stay in the shade")

main()
