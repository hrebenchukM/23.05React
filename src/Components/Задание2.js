import React from 'react';

const football = {
    name: 'Шахтер',
    imageUrl1: '2711.png',
    imageUrl2: '1120.jpg',
    imageUrl3: '2720.jpg', 
    imageW1: 150,
    imageH1: 250,
    imageW3: 250,
    imageH3: 250,
    city: 'Донецк', 
    date: '24 мая 1936 года',
    achievements:'Обладатель Кубка УЕФА, пятнадцатикратный чемпион Украины, четырнадцатикратный обладатель Кубка Украины, девятикратный обладатель Суперкубка Украины',
    players: 'РУДЬКО #1, ПУЗАНКОВ #12, РІЗНИК #31, ТВАРДОВСЬКИЙ #48, ТРАОРЕ #2, ЛЕМКІН #3, БОНДАР #5, СТЕПАНЕНКО #6, ЕГІНАЛДУ #7, КРИСЬКІВ #8, ШВЕД #9, СУДАКОВ #10, ЗУБКОВ #11, ГОЧОЛЕІШВІЛІ #13, СIКАН #14, АЗАРОВ #16, БОНДАРЕНКО #21, МАТВІЄНКО #22,  ПЕДРІНЬЙО #23, ЦУКАНОВ #24, МІРОШІ #25, КОНОПЛЯ #26, НАЗАРИНА #29, МАРЛОН #30, КЕВІН #37, НЕВЕРТОН #39, РАКІЦЬКИЙ #44, КАЩУК #90'
  };
  
  const styleObj = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '500px',
    margin: '10px auto',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
};

const styleObj1 = {
  color:'#555'
};
const styleObj2 = {
  color: '#333',
  textAlign: 'center'
};


const stylesObj = [
  { border: '2px solid #ccc', borderRadius: '10px', padding: '20px', maxWidth: '500px', margin: '10px auto', backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif' },
  { border: '2px solid #f00', borderRadius: '10px', padding: '20px', maxWidth: '600px', margin: '20px auto', backgroundColor: '#fff5f5', fontFamily: 'Georgia, serif' },
  { border: '2px solid #00f', borderRadius: '5px', padding: '15px', maxWidth: '450px', margin: '15px auto', backgroundColor: '#e0f7fa', fontFamily: 'Verdana, sans-serif' },
  { border: '2px solid #0f0', borderRadius: '15px', padding: '25px', maxWidth: '550px', margin: '25px auto', backgroundColor: '#f0fff0', fontFamily: 'Tahoma, sans-serif' },
  { border: '2px solid #ff0', borderRadius: '20px', padding: '30px', maxWidth: '500px', margin: '10px auto', backgroundColor: '#ffffe0', fontFamily: 'Courier New, monospace' },
];

// let currentIndex = 0;

// const randStyle = () => {
//   const style = stylesObj[currentIndex];
//   currentIndex = (currentIndex + 1);
//   return style;
// };

const randStyle = () => {
  const min = 0;
  const max = stylesObj.length;
  const randomIndex = Math.floor(min + Math.random() * (max - min));
  return stylesObj[randomIndex];
};


  export function BriefInfo() {
    return (
      <>
      <div style={styleObj}>
      <img
          src={football.imageUrl1}
          alt={'Фото ' + football.name}
          style={{width: football.imageW1,height: football.imageH1}}/>
          {/* //массив обьектов джаваикс */}
          <p  style={styleObj1}><strong style={styleObj2}>Достижения клуба:</strong>{football.achievements}</p>
      </div>

           </>
    );
  }


  export function Achievements() {
    const styleObjRand = randStyle();
    return (
      <>
      <div style={styleObjRand}>
      <img
          src={football.imageUrl2}
          alt={'Фото ' + football.name}
          style={{width: football.imageW3,height: football.imageH3}}/>
          {/* //массив обьектов джаваикс */}
          <p  style={styleObj1}><strong style={styleObj2}>Название клуба:</strong>{football.name}</p>
          <p  style={styleObj1}><strong style={styleObj2}>Город:</strong> {football.city}</p>
          <p  style={styleObj1}><strong style={styleObj2}>Дата основания:</strong>{football.date}</p>
      </div>

           </>
    );
  }

  export function Players() {
    const styleObjRand = randStyle();
    return (
      <>
      <div style={styleObjRand}>
      <img
          src={football.imageUrl3}
          alt={'Фото ' + football.name}
          style={{width: football.imageW3,height: football.imageH3}}/>
          {/* //массив обьектов джаваикс */}
          <p  style={styleObj1}><strong style={styleObj2}>Состав команды:</strong>{football.players}</p>
      </div>

           </>
    );
  }