def sum_pattern(X):
    str_X = str(X)
    result = int(str_X) + int(str_X * 2) + int(str_X * 3) + int(str_X * 4)
    return result

X = 3
print(sum_pattern(X))
