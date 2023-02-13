import Service from 'models/service';
import {ComIcons} from 'assets/index';
import { exp } from 'react-native-reanimated';

export const MENU_UPDATES = [
  {
    id: 1,
    name: 'Avocado Salad',
    desc: 'Amet, neta neque, pors eget nec volutpat.',
  },
  {
    id: 2,
    name: 'Shrimps Salad',
    desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
  },
  {
    id: 3,
    name: 'Avocado Toast',
    desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
  },
  {
    id: 4,
    name: 'Avocado Salad',
    desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
  },
  {
    id: 5,
    name: 'Apple Pie',
    desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
  },
  {
    id: 6,
    name: 'Chicken Curry',
    desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
  },
  {
    id: 7,
    name: 'Shawarma',
    desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
  },
];
export const ORDER_STATUS = [
  {
    orderId: '62547',
    tableNo: 'T4',
    time: '15:00',
    orderTime: '01:32',
    status: 'SENT TO KITCHEN',
  },
  {
    orderId: '62543',
    tableNo: 'T3',
    time: '15:00',
    orderTime: '03:20',
    status: 'PREPARING',
  },
  {
    orderId:'62545',
    tableNo: 'T6',
    time: '15:00',
    orderTime: '07:12',
    status: 'READY',
  },
  {
    orderId: '62542',
    tableNo: 'T8',
    time: '16:00',
    orderTime: '10:12',
    status: 'DELIVERED',
  },
  {
    orderId: '62535',
    tableNo: 'T5',
    time: '12:00',
    orderTime: '25:00',
    status: 'CLOSED',
  },
  {
    orderId: '62539',
    tableNo: 'T1',
    time: '14:00',
    orderTime: '30:12',
    status: 'CLOSED',
  },
  {
    orderId: '62550',
    tableNo: 'T2',
    time: '18:00',
    orderTime: '45:34',
    status: 'CLOSED',
  },
  {
    orderId: '62541',
    tableNo: 'T7',
    time: '13:00',
    orderTime: '55:23',
    status: 'CLOSED',
  },
];

export const NOTIFICATIONS = [
  {
    title: 'Unread',
    data: [
      {
        id: 1,
        name: 'A new way to sell',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
      {
        id: 2,
        name: 'Invoiced made better',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
    ],
  },

  {
    title: 'Read',
    data: [
      {
        id: 1,
        name: 'A new way to sell',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
      {
        id: 2,
        name: 'A new way to sell',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
      {
        id: 3,
        name: 'A new way to sell',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
      {
        id: 4,
        name: 'A new way to sell',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
      {
        id: 5,
        name: 'A new way to sell',
        desc: 'Start using the QR code and get to know all of its benetifs when it comes to selling products for...',
      },
    ],
  },
];

export const SPECIAL = [
  {
    id: 1,
    title: 'Soups',
    data: [{name: 'Chicken Soup', desc: 'Amet, nec verta olutpat.'}],
  },
  {
    id: 2,
    title: 'Main Course',
    data: [
      {
        name: 'Beef Barbeque',
        desc: 'Amejdnjcjdncjdnjjncjdncjdncjdnjcdjncjcdcdcdcdccddcdcdccsccsscscscdncjncjdnjcn eget nec vcdcdolutpat.',
      },
    ],
  },
  {
    id: 3,
    title: 'Desserts',
    data: [
      {name: 'Cheesecake', desc: 'Amet, neta neque, pors eget nec volutpat.'},
      {
        name: 'Apple Pie',
        desc: 'Amet, nec veitor nisi, duis eget nec volutpat.',
      },
    ],
  },
];

export const ORDER_INFO =[
  {id:1, title:'Order Number:', info: '#62545'},
  {id:2, title:'Date/Time:', info: '02/02/2022 15:00'},
  {id:3, title:'Customer:', info: 'Joe Nick'},
  {id:4, title:'Table:', info: 'T-3 | 6 Guests'},
  {id:5, title:'Total Price:', info: '5,800L'},
  {id:6, title:'Payment Method:', info: 'Cash'},
  {id:7, title:'Order Type:', info: 'Mobile POS:'},
  {id:8, title:'Sales Associate:', info: 'Andy'},
];

export const MERGE_TABLE_INFO = [
  {id: 1, title: 'Arrived at: ', info: '15:22', image: null},
  {id: 2, title: 'Number of Guests: ', info: '6', image: null},
  {id: 3, title: 'T3: ', info: '2', image: ComIcons.userBlack},
  {id: 4, title: 'T9: ', info: '4', image: ComIcons.userBlack},
];
export const MERGE_TABLE_OPTIONS = [
{id:1,title:'FINALIZE ORDER'},
{id:2,title:'NEW ORDER'},
{id:3,title:'TRANSFER CHECK'},
];

export const ORDER_DATA = [
  {
    id: 1,
    orderId: '625454',
    date: '02/02/2022 15:00',
    table: 'T4',
    total: '400',
  },
  {
    id: 2,
    orderId: '625454',
    date: '02/02/2022 15:00',
    table: 'T5',
    total: '400',
  },
  {
    id: 3,
    orderId: '625454',
    date: '02/02/2022 15:00',
    table: 'T6',
    total: '400',
  },
];

export const TAGS = [
  {id:1,title :'Consistent'},
  {id:2,title :'Friendly'},
  {id:3,title :'No Lactose'},
];

export const WONDERPOINTS_DATA = [
  {
    id: 1,
    title: 'Daily Checkin',
    desc: 'Point reward from daily check-in',
    date: '14-10-2021 15:55',
    point: '+1',
  },
  {
    id: 2,
    title: 'Rating wonderpoints',
    desc: 'Point reward from rating',
    date: '14-10-2021 15:55',
    point: '+1',
  },
  {
    id: 3,
    title: '[3 Products] Chicken Burrito, ...',
    desc: 'Redemed with purchase',
    date: '14-10-2021 15:55',
    point: '-2',
  },
  {
    id: 4,
    title: 'Daily Checkin',
    desc: 'Point reward from daily check-in',
    date: '14-10-2021 15:55',
    point: '+1',
  },
  {
    id: 5,
    title: 'Daily Checkin',
    desc: 'Point reward from daily check-in',
    date: '14-10-2021 15:55',
    point: '+1',
  },
];
export const PRODUCTS = [
  {id:1,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:2,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:3,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:4,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:5,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:6,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:7,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:8,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:9,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:10,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:11,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:12,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:13,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:14,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},
  {id:15,image:require('../assets/images/burger.png'), title:'Special Burger',price:'200'},

];

export const INGRIDIENTS = [
  {id:1,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:2,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:3,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:4,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:5,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:6,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:7,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:8,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:9,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:10,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:11,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:12,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:13,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:14,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:15,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
  {id:16,image:require('../assets/images/lettuce.png'), title:'Lettuce'},
];

export const INGRI_BASE_DATA = [
  {id: 1, title: 'Tomatoes'},
  {id: 2, title: 'Carrots'},
  {id: 3, title: 'Chicken'},
  {id: 4, title: 'Carrots'},
];
export const INGRI_PROTEIN_DATA = [
  {id: 1, title: 'Protien'},
  {id: 2, title: 'Protien'},
  {id: 3, title: 'Protien'},
  {id: 4, title: 'Protien'},
];
export const INGRI_TOPPING_DATA = [
  {id: 1, title: 'Topping'},
  {id: 2, title: 'Topping'},
  {id: 3, title: 'Topping'},
  {id: 4, title: 'Topping'},
];
export const INGRI_EXTRA_DATA = [
  {id: 1, title: 'Extra'},
  {id: 2, title: 'Extra'},
  {id: 3, title: 'Extra'},
  {id: 4, title: 'Extra'},
];