import React from 'react';
import { ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';

import { articles } from '../../config/articles';
import { products } from '../../config/products';
import ArticleCard from '../ArticleCard';
import ProductCard from '../ProductCard';

const HomeScreen = ({ isBlog = false }) => (
  <ScrollView style={tailwind('flex flex-col mx-2')}>
    {isBlog
      ? articles.map(article => <ArticleCard key={article.id} {...article} />)
      : products.map(product => <ProductCard key={product.id} {...product} />)}
  </ScrollView>
);

export default HomeScreen;
