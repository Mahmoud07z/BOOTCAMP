import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided.")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area:.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __eq__(self, other):
        return isinstance(other, Circle) and self.radius == other.radius

    def __lt__(self, other):
        return isinstance(other, Circle) and self.radius < other.radius

    def __le__(self, other):
        return isinstance(other, Circle) and self.radius <= other.radius

    def __gt__(self, other):
        return isinstance(other, Circle) and self.radius > other.radius

    def __ge__(self, other):
        return isinstance(other, Circle) and self.radius >= other.radius

if __name__ == "__main__":
    c1 = Circle(radius=3)
    c2 = Circle(diameter=8)
    c3 = c1 + c2

    print("Individual Circles:")
    print(c1)
    print(c2)
    print(c3)

    print("\nComparison:")
    print(f"c1 == c2? {c1 == c2}")
    print(f"c1 < c2?  {c1 < c2}")
    print(f"c3 > c2?  {c3 > c2}")

    circles = [c3, c1, c2]
    circles.sort()

    print("\nSorted Circles by Radius:")
    for circle in circles:
        print(circle)