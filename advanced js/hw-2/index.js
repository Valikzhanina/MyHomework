const books = [
  {
    author: 'Скотт Бэккер',
    name: 'Тьма, что приходит прежде',
    price: 70,
  },
  {
    author: 'Скотт Бэккер',
    name: 'Воин-пророк',
  },
  {
    name: 'Тысячекратная мысль',
    price: 70,
  },
  {
    author: 'Скотт Бэккер',
    name: 'Нечестивый Консульт',
    price: 70,
  },
  {
    author: 'Дарья Донцова',
    name: 'Детектив на диете',
    price: 40,
  },
  {
    author: 'Дарья Донцова',
    name: 'Дед Снегур и Морозочка',
  },
];

const div = document.getElementById('root');
const ul = document.createElement('ul');
div.appendChild(ul);
for (let item of books) {
  try {
    const li = document.createElement('li');
    let result = '';
    if (!item.hasOwnProperty('author')) {
      for (let key in item) {
        result += `${key} : ${item[key]} ;`;
        ul.appendChild(li);
        li.textContent = result;
      }
      throw new Error(`Error: there is no "author"`);
    } else if (!item.hasOwnProperty('name')) {
      for (let key in item) {
        result += `${key} : ${item[key]} ;`;
        ul.appendChild(li);
        li.textContent = result;
        throw new Error(`Error: there is no "name"`);
      }
    } else if (!item.hasOwnProperty('price')) {
      for (let key in item) {
        result += `${key} : ${item[key]} ;`;
        ul.appendChild(li);
        li.textContent = result;
      }
      throw new Error(`Error: there is no "price"`);
    } else {
      for (let key in item) {
        result += `${key} : ${item[key]} ;`;
        ul.appendChild(li);
        li.textContent = result;
      }
    }
  } catch (e) {
    console.log(e, e.message);
  }
}
