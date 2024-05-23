import React from 'react';

const user = {
    name: 'Mariia Hrebenchuk',
    imageUrl: '12345.jpg',
    imageW: 150,
    imageH: 150,
    db: '10.12.2004', 
    bio: 'Начинающий Frontend-разработчик.Интроверт.Закончила первую школу и многолетние курсы английского, которые забылись напрочь буд-то их и не было после одного года без практики языка.Сейчас проходит обучение в лучшем IT-университете страны Шаг,учится слабо,воспринимает материал с третьего раза,но не сдается в достижении своей мечты. Пишет стихи в свободное от учебы время.',
  };
  
  const styleObj = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    margin: '10px auto',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
};

const styleObj1 = {
  fontFamily:'Arial, sans-serif',
  color:'#555'
};
const styleObj2 = {
  color: '#333',
  textAlign: 'center'
};
  export function Profile() {
    return (
      <>
      <div style={styleObj}>
      <img
          src={user.imageUrl}
          alt={'Фото ' + user.name}
          style={{width: user.imageW,height: user.imageH}}/>
          {/* //массив обьектов джаваикс */}
          <h1 style={styleObj1}>{user.name}</h1>
          <p  style={styleObj1}><strong style={styleObj2}>Дата рождения:</strong> {user.db}</p>
          <p  style={styleObj1}><strong style={styleObj2}>Биография:</strong>{user.bio}</p>
      </div>

           </>
    );
  }