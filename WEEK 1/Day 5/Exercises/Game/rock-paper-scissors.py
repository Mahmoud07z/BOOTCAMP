from game import Game

def get_user_menu_choice():
    print("\nChoose an option:")
    print("1. Play a new game")
    print("2. Show scores")
    print("q. Quit")
    choice = input("Enter your choice (1/2/q): ").strip().lower()

    if choice == "1":
        return 'play'
    elif choice == "2":
        return 'scores'
    elif choice == "q":
        return 'quit'
    else:
        return None  

def print_results(results):
    print("\nGame Results:")
    print(f"Wins:   {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws:  {results.get('draw', 0)}")
    print("Thanks for playing!")


def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}

    while True:
        choice = get_user_menu_choice()

        if choice == 'play':
            game = Game()
            result = game.play_game() 
            if result in results:
                results[result] += 1
        elif choice == 'scores':
            print_results(results)
        elif choice == 'quit':
            print_results(results)
            break
        else:
            print("Invalid choice. Please select 1, 2, or q.")

if __name__ == "__main__":
    main()