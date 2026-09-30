import React from 'react';
import { useParams } from 'react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Детальная страница товара #{id}</h1>
    </div>
  );
};