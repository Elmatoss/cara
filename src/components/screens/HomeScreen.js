import { useQuery } from '@apollo/client';
import React from 'react';
import { ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import filter from 'lodash/filter';
import find from 'lodash/find';

import { GET_ARTICLES, GET_PRODUCTS } from '../../config';
import ArticleCard from '../ArticleCard';
import ProductCard from '../ProductCard';

const HomeScreen = ({ navigation, route }) => {
  const { data: articlesData } = useQuery(GET_ARTICLES);
  let articles = articlesData?.articles;

  const { data: productsData } = useQuery(GET_PRODUCTS);
  const products = productsData?.products;

  const isBlog = route?.params?.isBlog ?? true;

  let category;

  if (isBlog) {
    category = route?.params?.category;
    console.log(category, articles);

    if (Array.isArray(articles) && category) {
      articles = filter(
        articles,
        item => console.log(item),
        // find(cateogries, { id: category }),
      );
    } else {
      articles = articlesData?.articles;
    }
  }

  return (
    <ScrollView style={tailwind('flex flex-col mx-2')}>
      {isBlog
        ? Array.isArray(articles) &&
          articles.map(article => (
            <ArticleCard
              key={article.id}
              navigation={navigation}
              {...article}
            />
          ))
        : Array.isArray(products) &&
          products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
    </ScrollView>
  );
};

export default HomeScreen;
