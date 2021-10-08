import { Item } from '../types/Item'

export const items: Item[] = [
  { date: new Date(2021, new Date().getMonth(), 6), category: 'food', title: 'McDonalds', value: 32.12 },
  { date: new Date(2021, new Date().getMonth(), 15), category: 'food', title: 'Burguer King', value: 28 },
  { date: new Date(2021, new Date().getMonth(), 16), category: 'rent', title: 'Aluguel', value: 2300 },
  { date: new Date(2021, new Date().getMonth()+1, 20), category: 'salary', title: 'Salário', value: 4000 },
];