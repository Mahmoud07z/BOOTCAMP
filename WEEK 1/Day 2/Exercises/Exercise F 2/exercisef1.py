companies_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
companies_list = companies_str.split(", ")

print(f"There are {len(companies_list)} manufacturers in the list.")

companies_list.reverse()
print("Companies in reverse order:", companies_list)

companies_with_o = [company for company in companies_list if 'o' in company.lower()]
print(f"Companies with the letter 'o': {len(companies_with_o)}")

companies_without_i = [company for company in companies_list if 'i' not in company.lower()]
print(f"Companies without the letter 'i': {len(companies_without_i)}")

unique_companies = list(set(companies_list))
print("Companies without duplicates:", ", ".join(unique_companies))
print(f"There are {len(unique_companies)} companies without duplicates.")

companies_sorted_reversed = [company[::-1] for company in sorted(unique_companies)]
print("Companies in ascending order with reversed names:", companies_sorted_reversed)
