import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import OneCardGood from './OneCardGood';

describe('Correct card fields', () => {
  it('Renders the correct card fields', () => {
    const testCard = {
      key: 1,
      id: 1,
      title: 'Si Passione, 30 мл',
      description:
        'Sì Passione — новый аромат от Giorgio Armani, раскрывающий грани образа Sì: это аромат для женщины независимой, очень женственной и свободной. В новой композиции присутствует сочетание, характерное для аромата Sì: ноты нектара черной смородины перекликаются с грушевыми нотами. Верхняя нота аромата — пряный аккорд розового перца, подобный всплеску адреналина. В цветочной ноте сердца слышны прозрачные переливающиеся ароматы лепестков розы в новом исполнении, также присутствуют соблазнительные пудровые отголоски гелиотропа и невероятно женственного переливчатого экстракта жасмина.',
      price: 358.8,
      rating: 4.69,
      brand: 'GIORGIO ARMANI',
      category: 'Парфюмерная вода',
      images: [
        'https://shop.cravt.by/upload/Sh/imageCache/4c1/9fb/c46944df8706d00553bdf5ce5cfa8c33.jpg.webp',
        'https://shop.cravt.by/upload/Sh/imageCache/498/1c0/839267b4e6dbfdf53417af8118d5f55d.jpg.webp',
      ],
    };

    const { container } = render(
      <OneCardGood
        key={testCard.key}
        id={testCard.id}
        title={testCard.title}
        description={testCard.description}
        price={testCard.price}
        rating={testCard.rating}
        brand={testCard.brand}
        category={testCard.category}
        images={testCard.images}
      />
    );
    expect(screen.getByRole('img')).toBeVisible;
    expect(container.querySelector('.card__brand')).toHaveTextContent('GIORGIO ARMANI');
    expect(container.querySelector('.card__title')).toHaveTextContent('Si Passione, 30 мл');
    expect(container.querySelector('.card__category')).toHaveTextContent('Парфюмерная вода');
    expect(container.querySelector('.card__price')).toHaveTextContent('358.8');
  });
});
