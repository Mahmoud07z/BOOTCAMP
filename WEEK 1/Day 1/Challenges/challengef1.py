import datetime

birthday = input("Enter your birthday (DD/MM/YYYY): ")

day, month, year = map(int, birthday.split("/"))
current_year = datetime.datetime.now().year
age = current_year - year

if datetime.date(year, month, day).month == month and datetime.date(year, month, day).day == day:
    is_leap_year = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
    candles = age % 10

    cake = f"""       ___{'i' * candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |{'^' * 17}|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
    """
    print(cake)

    if is_leap_year:
        print(cake)
