import random
class Game:
    def get_user_item(self):
        user_item = input("Choose rock, paper, or scissors: ").lower()
        while user_item not in ["rock", "paper", "scissors"]:
            print("Invalid choice. Please try again.")
            user_item = input("Choose rock, paper, or scissors: ").lower()
        return user_item
    def get_computer_item(self):
        computer_item = random.choice(["rock", "paper", "scissors"])
        return computer_item
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "It's a tie!"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "You win!"
        else:
            return "Computer wins!"
    def play_game(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        print(f"Computer chose: {computer_item}")
        result = self.get_game_result(user_item, computer_item)
        print(result)
Game = Game()
Game.play_game()