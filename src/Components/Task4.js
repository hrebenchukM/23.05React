import React from 'react';

const products = [//массив обьектов 
    { title: 'Капуста', isFruit: false, id: 1 },//обьект1
    { title: 'Чеснок', isFruit: false, id: 2 },//обьект2
    { title: 'Яблоко', isFruit: true, id: 3 },//обьект3
    { title: 'Киви', isFruit: true, id: 4 },//обьект4
    { title: 'Лук', isFruit: false, id: 5 },//обьект5
  ];
  
  export function ShoppingList() {//Компонент
    // Преобразование массива products  в массив элементов <li> с помощью функции map()
    const listItems = products.map(product =>//map берет каждый обьект продукт и его деконструирует (обратно из сущности делает несколько).map=Перебор массива продуктов
      <li
        style={{color: product.isFruit ? 'magenta' : 'darkgreen' }} >
        {product.title} - {product.id}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }