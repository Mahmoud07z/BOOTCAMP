brand = {
    "name": "Zara",
    "creator_name": "Amancio Ortega",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton","Desigual"],
    "number_stores": 2,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"], 
    },
    "country_creation": "Spain",
}
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
}
print("Zara clients are", ", ".join(brand["type_of_clothes"][:2]) + " and " + brand["type_of_clothes"][-2])
print("Last international competitor is", (brand["international_competitors"][-1]))
print("Major clothes colores in the US are", " and " .join(brand["major_color"]["US"]))
print(len(brand))
print(brand.keys())
brand.update(more_on_zara)
print(brand)
print(brand["number_stores"])