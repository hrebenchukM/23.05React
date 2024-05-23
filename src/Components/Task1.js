import React from 'react';

export function Test1()//функциональный компонент
 {
    return <h1>Hello world</h1>;
 }

export class Test2 extends React.Component {//классовый компонент
    render() {
      return <h1>Привет мир</h1>;
    } 
  }

// Вложенные компоненты
function MyButton() {
    return (
      <button>OK</button>
    );
  }
export function MyApp() {//експортируемый=можно использовать в Апп.джс
    return (
      <div>
        <h1>Добро пожаловать в моё приложение</h1>
        
        <MyButton />
        
      </div>
    );
  }

  // Обратите внимание на то, что <MyButton /> начинается с заглавной буквы. Это отличительная черта компонентов React. Названия компонентов в React всегда должны начинаться с заглавной буквы, а теги HTML — с маленькой.