//AJAX дает возможность обновления данных браузера без
// перезагрузки страницы, что уменьшает время ожидания подгрузки данных.

const ulList = document.querySelector('ul');
const url = 'https://swapi.dev/api/films/';
const response = fetch(url);

response
  .then((resolve) => resolve.json())
  .then((list) => {
    for (let i = 0; i < list.results.length; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = list.results[i].title;
      const discription = document.createElement('ul');
      const episodeLi = document.createElement('li');
      episodeLi.innerHTML = list.results[i].episode_id;
      const titleLi = document.createElement('li');
      titleLi.innerHTML = list.results[i].title;
      const openingCrawlLi = document.createElement('li');
      openingCrawlLi.innerHTML = list.results[i].opening_crawl;
      discription.appendChild(episodeLi);
      discription.appendChild(titleLi);
      discription.appendChild(openingCrawlLi);
      ulList.appendChild(listItem);
      ulList.appendChild(discription);
      list.results[i].characters.forEach((person) => {
        const personUrl = person;
        const responsePerson = fetch(personUrl);
        responsePerson
          .then((resolve) => resolve.json())
          .then((peopleText) => {
            const peopleLi = document.createElement('li');
            peopleLi.innerText = peopleText.name;
            discription.appendChild(peopleLi);
          });
      });
    }
  });
