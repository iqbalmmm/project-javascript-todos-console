const todos = ["Write the letter", "Eat some lunch", "Run around the city"];

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    console.log(`[${index + 1}] ${item}`);
  }
};

showTodos(todos);

const todos1 = ["Write the letter", "Eat some lunch", "Run around the city"];

const searchTodos = (data, textToSearch) => {
  let newTodos = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    const lowerCasedItem = item.toLowerCase();
    const lowerCasedText = textToSearch.toLowerCase();

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item);
    }
  }

  return newTodos;
};

const foundTodos = searchTodos(todos, "run");
showTodos(foundTodos);

const myTodos = [
  {
    id: 1,
    text: "Write the letter",
    tags: ["important", "writing"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: "Eat some lunch",
    tags: ["food"],
    completed: false,
    favorite: true
  },
  {
    id: 3,
    text: "Run around the city",
    favorite: false,
    completed: true
  }
];

const showTodos1 = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    let itemString = ``;

    itemString += item.completed ? `☑` : `x`;
    itemString += ` ${item.text} `;
    itemString += item.favorite ? `★` : `x`;

    console.log(itemString);
  }
};

showTodos1(myTodos);

const searchTodosText = (data, searchText) => {
  let newTodos = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    const lowerCasedItemText = item.text.toLowerCase();
    const lowerCasedSearchText = searchText.toLowerCase();

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item);
    }
  }

  return newTodos;
};
const foundTodos1 = searchTodosText(myTodos, "the");

showTodos(foundTodos1);
