import math
class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_page = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)
    def get_visible_items(self):
        start_index = self.current_page * self.page_size
        end_index = start_index + self.page_size
        return self.items[start_index:end_index]
    def go_to_page(self, page_num):
        if 0 <= page_num < self.total_pages:
            self.current_page = page_num
        else:
            raise ValueError("Invalid page number")
    def first_page(self):
        self.current_page = 0
    def last_page(self):
        self.current_page = self.total_pages - 1
    def next_page(self):
        if self.current_page < self.total_pages - 1:
            self.current_page += 1
    def previous_page(self):
        if self.current_page > 0:
            self.current_page -= 1
    def __str__(self):
        return f"Page {self.current_page + 1} of {self.total_pages}"
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
p.go_to_page(2)
print(p.get_visible_items())   
p.last_page()
print(p.get_visible_items())   
p.next_page()   
print(p.get_visible_items())   
p.first_page()
print(p.get_visible_items())   
try:
    p.go_to_page(10)   
except ValueError as e:
    print(e)
print(str(p))