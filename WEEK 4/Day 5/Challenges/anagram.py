def is_anagram(str1, str2):
 
    cleaned_str1 = ''.join(str1.lower().split())
    cleaned_str2 = ''.join(str2.lower().split())
 
    return sorted(cleaned_str1) == sorted(cleaned_str2)

print(is_anagram("Astronomer", "Moon starer"))        
print(is_anagram("School master", "The classroom"))   
print(is_anagram("The Morse Code", "Here come dots"))  
print(is_anagram("Hello", "World"))                    