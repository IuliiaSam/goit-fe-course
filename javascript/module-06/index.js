'use strict';

// Сеть фастфудов предлагает несколько видов гамбургеров.
// Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
// - маленькая (+30 денег, +50 калорий)
// - большая (+50 денег, +100 калорий)
// Гамбургер может быть с одной из нескольких видов начинок (обязательно):
// - сыром (+15 денег, +20 калорий)
// - салатом (+20 денег, +5 калорий)
// - мясом (+35 денег, +15 калорий)
// Дополнительно, гамбургер можно:
// - посыпать приправой (+10 денег, +0 калорий)
// - полить соусом (+15 денег, +5 калорий)
// Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
// создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
// Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
// указанные методы, которые принимают и возвращают данные указанного типа.




// Класс, объекты которого описывают параметры гамбургера.

class Hamburger {

      /**
      * @constructor
      * @param {String} size - Размер
      * @param {String} stuffing - Начинка
      */
      constructor(size, stuffing) {
            this._size = size;
            this._stuffing = stuffing;
            this._toppings = [];
      }

      /**
      * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
      * @param {String} topping - Тип добавки
      */
      addTopping(topping) {            
            if (!this._toppings.includes(topping)) {
                  this._toppings.push(topping);
            }
      };

      /**
      * Убрать topping, при условии, что она ранее была добавлена
      * @param {String} topping - Тип добавки
      */
      removeTopping(topping) {
            if (this._toppings.includes(topping)) {
                  let idx = this._toppings.indexOf(topping);this._toppings.splice(idx, 1);
            }
      };

      /**
      * Получить список toppings
      * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
      *
      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
      */
      get toppings() {
            return this._toppings;
      };
      getToppings() {
            return this.toppings;
      };

      /**
      * Узнать размер гамбургера
      * @returns {String} - размер гамбургера
      *
      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
      */
      get size() {
            return this._size;
      };
      getSize() {
            return this.size;
      };

      /**
      * Узнать начинку гамбургера
      * @returns {String} - начинка гамбургера
      *
      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
      */
      get stuffing () {
            return this._stuffing;
      };
      getStuffing() {
            return this.stuffing;
      };

      /**
      * Узнать цену гамбургера
      * @returns {Number} - Цена в деньгах
      *
      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
      */
      calculatePrice() {
            let sizePrice = Hamburger.SIZES[this.size].price;
            let stuffingPrice = Hamburger.STUFFINGS[this.stuffing].price;
            let toppingPrice = this.toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].price, 0);            
            return sizePrice + stuffingPrice + toppingPrice;
      }
      /**
      * Узнать калорийность
      * @returns {Number} - Калорийность в калориях
      *
      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
      */
      calculateCalories() {
            let sizeCalories = Hamburger.SIZES[this.size].calories;
            let stuffingCalories = Hamburger.STUFFINGS[this.stuffing].calories;
            let toppingCalories = this.toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].calories, 0);
            return sizeCalories + stuffingCalories + toppingCalories;
      }
};

      // Размеры, виды добавок и начинок объявите как статические поля класса.
      // Добавьте отсутсвующие поля по аналогии с примером.

Hamburger.SIZE_SMALL = 'SIZE_SMALL'; // ['SIZE_SMALL'] = SIZE_SMALL
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
      [Hamburger.SIZE_SMALL]: {            
            price: 30,
            calories: 50,
      },
      [Hamburger.SIZE_LARGE]: {
            price: 50,
            calories: 100,
      }
};
console.log(Hamburger.SIZE_SMALL);

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD'
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT'
Hamburger.STUFFINGS = {
      [Hamburger.STUFFING_CHEESE]: {
            price: 15,
            calories: 20,
      },
      [Hamburger.STUFFING_SALAD]: {
            price: 20,
            calories: 5,
      },
      [Hamburger.STUFFING_MEAT]: {
            price: 35,
            calories: 15,
      }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.TOPPINGS = {
      [Hamburger.TOPPING_SPICE]: {
            price: 10,
            calories: 0,
      },
      [Hamburger.TOPPING_SAUCE]: {
            price: 15,
            calories: 5,
      },
};

      // Вот как может выглядеть использование этого класса
      // Маленький гамбургер с начинкой из сыра
      const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
      // Добавка из приправы
      hamburger.addTopping(Hamburger.TOPPING_SPICE);      
      // Спросим сколько там калорий
      console.log("Calories: ", hamburger.calculateCalories());
      // Сколько стоит?
      console.log("Price: ", hamburger.calculatePrice());
      // Я тут передумал и решил добавить еще соус
      hamburger.addTopping(Hamburger.TOPPING_SAUCE);
      // А сколько теперь стоит?
      console.log("Price with sauce: ", hamburger.calculatePrice());
      // Проверить, большой ли гамбургер?
      console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
      // Убрать добавку
      hamburger.removeTopping(Hamburger.TOPPING_SPICE);
      // Смотрим сколько добавок
      console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1

      // Обратите внимание на такие моменты:
            // класс не взаимодействует с внешним миром. Это не его дело, этим занимается другой код, а класс живет в изоляции от мира
            // обязательные параметры (размер и начинка) мы передаем через конструктор, чтобы нельзя было создать объект, не указав их
            // необязательные (добавка) добавляем через методы
            // типы начинок обозначены "константами" с понятными именами (на самом деле просто
            // свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
            // объект создается через конструктор - функцию, которая задает начальные значения полей.
            // в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки), а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории логично в тот момент, когда это потребуется, а не заранее.