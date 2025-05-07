def star_wars():
    questions_and_answers = [
        ("What is baby Yoda's name?", "Grogu"),
        ("Where did Obi-Wan take Luke after his birth?", "Tatooine"),
        ("What year did the first Star Wars movie come out?", "1977"),
        ("Who built C-3PO?", "Anakin Skywalker"),
        ("Anakin Skywalker grew up to be who?", "Darth Vader"),
        ("What species is Chewbacca?", "Wookiee")
    ]

    for question, correct_answer in questions_and_answers:
        answer = input(f"{question} ")
        if answer == correct_answer:
            print("Correct!")
        else:
            print("Incorrect!")
star_wars()