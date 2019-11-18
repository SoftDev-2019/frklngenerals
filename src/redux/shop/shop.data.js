import GeneralsHat1 from '../../Images/Generals_Hat_1.JPEG';
import GeneralsGameJersey from '../../Images/Generals_Game_Jersey_1.JPEG'
import GeneralsPracticeJersey from '../../Images/Generals_Practice_Jersey_1.JPEG';
const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Generals Team Hat - Black/Red',
        imageUrl: GeneralsHat1,
        price: 25
      }
    ]
  },
  pants: {
    id: 2,
    title: 'Pants',
    routeName: 'pants',
    items: [
      {
        id: 10,
        name: 'Champro',
        imageUrl: 'https://shop.champrosports.com/images/variant/medium/65249.jpg',
        price: 40
      }
    ]
  },
  jerseys: {
    id: 3,
    title: 'Jerseys',
    routeName: 'jerseys',
    items: [
      {
        id: 18,
        name: 'Franklin Generals Game Jersey',
        imageUrl: GeneralsGameJersey,
        price: 125
      },
      {
        id: 19,
        name: 'Franklin Generals Practice Jersey',
        imageUrl: GeneralsPracticeJersey,
        price: 90
      },
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'COMING SOON!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIh8OaD20vLjOA553tdJB4Z9uHF7JZazgbdPI3-fKDk5vjzbn07w&s',
        price: ''
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'COMING SOON',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vTKGrD4ZHuOPxCt639INRmfvkD9S9lTLgWQ80E9V_OFomm41&s',
        price: ''
      }
    ]
  }
};

export default SHOP_DATA;