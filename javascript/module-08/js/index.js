'use strict';

/*
Создайте компонент галлереи изображений следующего вида.

  <div class="image-gallery js-image-gallery">
    <div class="fullview">
      <!-- Если выбран первый элемент из preview -->
      <img src="img/fullview-1.jpeg" alt="alt text 1">
    </div>
    <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
    <ul class="preview">
      <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
      <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
      <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
    </ul>
  </div>   
  
  Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
    
  Реализуйте функционал:
    
    - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
  
    - fullview содержит в себе увеличенную версию выбранного изображения из preview, и создается динамически при загрузке страницы.
  
    - preview это список маленьких изображений, обратите внимание на атрибут data-fullview, он содержит ссылку на большое изображение. preview и его элементы, также создаются динамически, при загрузке страницы.
      
    - При клике в элемент preview, необходимо подменить src тега img внутри fullview на url из data-атрибута выбраного элемента.
      
    - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
      
    - Изображений может быть произвольное количество.
    
    - Используйте делегирование для элементов preview.
    
    - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
    
    - CSS-оформление и имена классов на свой вкус.
    
  Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px. Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом. Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const gallery = document.querySelector('.image-gallery');
const fullview = document.querySelector('.fullview');
const preview = document.querySelector('.preview');


// Динамічне створення головного зображення та галереї зменшених зображень при завантаженні сторінки:

const mainImage = document.createElement('img');
mainImage.setAttribute('src', galleryItems[0].fullview);
mainImage.setAttribute('alt', galleryItems[0].alt);
mainImage.setAttribute('class', 'main-img');
fullview.append(mainImage);

for (let obj of galleryItems) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  const image = document.createElement('img');
  image.setAttribute('src', obj.preview);
  image.dataset.fullview = obj.fullview;
  image.setAttribute('alt', obj.alt);
  image.setAttribute('class', 'img');
  item.append(image);
  preview.append(item);
};


// Заміна основного зображення при кліку на зменшене зображення в галереї + підсвітка зменшеного зображення:

function displayFullview (event) {
  
  // зупиняємо дію функції, у випадку якщо користувач випадково клікне повз image на батьківський елемент list
  if (event.target.nodeName !== "IMG") return;
  
  // замінюємо основне зображення при кліку на зменшене
  mainImage.src = event.target.dataset.fullview;

  // знімаємо підсвітку з усіх зменшених зображень
  for (let item of this.children) {
    item.querySelector('.img').classList.remove('highlighted'); 
  };

  // підключаємо підсвітку цільового зображення
  event.target.classList.add('highlighted');
  
};

preview.addEventListener('click', displayFullview);