'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

function createPostCard(post) {
  
  const post__card = document.createElement('div');
  post__card.setAttribute('class', 'post__card');

  const post__image = document.createElement('img');
  post__image.setAttribute('class', 'post__image');
  post__image.setAttribute('src', post.img);
  post__image.setAttribute('alt', 'post image');
  post__card.append(post__image);

  const post__body = document.createElement('div');
  post__body.setAttribute('class', 'post__body');
  post__card.append(post__body);

  const post__title = document.createElement('h2');
  post__title.setAttribute('class', 'post__title');
  post__title.innerHTML=post.title;
  post__body.append(post__title);

  const post__description = document.createElement('p');
  post__description.setAttribute('class', 'post__description');
  post__description.innerHTML = post.text;
  post__body.append(post__description);

  const post__link = document.createElement('a');
  post__link.setAttribute('class', 'post__link');
  post__link.setAttribute('href', '#');
  post__link.innerHTML = post.link;
  post__body.append(post__link);

  return post__card;
};

const allCards = [];

function createCards(arr) {
  for (let post of arr) {
      const card = createPostCard(post);
      allCards.push(card);
    }
};

createCards(posts);

const container = document.querySelector('.container');
for (let el of allCards) {
  container.append(el)
};