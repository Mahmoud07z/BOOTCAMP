import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    count = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        if dice1 == dice2:
            break
    return count

def main():
    throws = []
    for _ in range(100):
        throws.append(throw_until_doubles())
    total_throws = sum(throws)
    avg_throws = total_throws / len(throws)
    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws per double: {avg_throws:.2f}")

main()
