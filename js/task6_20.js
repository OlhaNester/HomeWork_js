const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books
  .filter(({ rating }) => rating >= MIN_BOOK_RATING)
  .sort((first, second) => first.author.localeCompare(second.author))
  .map(({ author }) => author);
console.log(names);
