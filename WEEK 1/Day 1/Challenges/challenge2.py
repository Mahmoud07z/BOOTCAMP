text = input("Enter a string: ")
new_text = ""
for letter in text:
     if new_text == "" or letter != new_text[-1]:
        new_text += letter
print(new_text)