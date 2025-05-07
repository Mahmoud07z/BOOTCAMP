letter_dict = {}
word = input("Give me a word: ")
for index, letter in enumerate(word):
    if letter in letter_dict:
        letter_dict[letter].append(index)
    else:
        letter_dict[letter] = [index]
print(letter_dict)