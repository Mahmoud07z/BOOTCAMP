longest = ""

while True:
    sentence = input("Enter the longest sentence you can without the letter 'A': ")

    if 'a' in sentence.lower():
        print("Oops! Your sentence contains the letter 'A'. Try again.\n")
        continue

    if len(sentence) > len(longest):
        longest = sentence
        print("🎉 Congratulations! That's the new longest sentence without 'A'!\n")
    else:
        print("Nice try, but it's not longer than the current best.\n")
