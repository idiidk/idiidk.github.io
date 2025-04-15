interface CardModel {
  icon: string;
  title: string;
  description: string;
}

export interface WorkModel {
  slug: string;
  title: string;
  href: string;
  images: string[];
  overviewTitle: string;
  overview: string;
  cardsTitle: string;
  cards: CardModel[];
  chipsTitle: string;
  chips: string[];
}
