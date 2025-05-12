MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ', ': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-', ' ': '/'
}

def english_to_morse(text):
    text = text.upper()
    morse_code = []
    for char in text:
        if char in MORSE_CODE_DICT:
            morse_code.append(MORSE_CODE_DICT[char])
    return ' '.join(morse_code)

def morse_to_english(morse):
    reversed_dict = {v: k for k, v in MORSE_CODE_DICT.items()}
    words = morse.split(' / ')
    english_text = []
    for word in words:
        chars = word.split()
        english_word = ''.join(reversed_dict[char] for char in chars)
        english_text.append(english_word)
    return ' '.join(english_text)

# Example usage:
english = "Hello World"
morse = english_to_morse(english)
print(f"English to Morse: {morse}")
print(f"Morse to English: {morse_to_english(morse)}")
