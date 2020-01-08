let food = {
  apple: 'fruit',
  banana: 'fruit',
  tomato: 'vegetable'
};

const { tomato, ...rest } = food;

const updateFood = {
  tomato: 'fruit',
  ...rest
};

console.log(food);
console.log(updateFood);
