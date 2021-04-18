import React from 'react';
import { ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';

import { articles } from '../../config/articles';
import ArticleCard from '../ArticleCard';

const HomeScreen = () => (
  <ScrollView style={tailwind('flex flex-col mx-2')}>
    {articles.map(article => (
      <ArticleCard key={article.id} {...article} />
    ))}
  </ScrollView>
);

export default HomeScreen;
