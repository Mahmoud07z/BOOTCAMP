paragraph = """Python is an interpreted, high-level, general-purpose programming language. It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects."""

num_characters = len(paragraph)
import re
num_sentences = len(re.findall(r'[.!?]', paragraph))
words = paragraph.split()
num_words = len(words)
unique_words = set(word.lower() for word in words)
num_unique_words = len(unique_words)
num_non_whitespace = len(paragraph.replace(" ", "").replace("\n", ""))
avg_words_per_sentence = num_words / num_sentences if num_sentences else 0
non_unique_words = num_words - num_unique_words

print(f"Total characters: {num_characters}")
print(f"Total sentences: {num_sentences}")
print(f"Total words: {num_words}")
print(f"Total unique words: {num_unique_words}")
print(f"Total non-whitespace characters: {num_non_whitespace}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"Total non-unique words: {non_unique_words}")
