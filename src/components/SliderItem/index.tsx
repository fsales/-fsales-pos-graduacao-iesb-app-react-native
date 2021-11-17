import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { BanerItem, Container, Rate, RateContainer, Title } from './styles';

type Props = {
  data: any,
}

const SliderItem = ({ data }: Props) => {
  return (
    <Container activeOpacity={0.7}>
      <BanerItem
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
      />

      <Title numberOfLines={1} >{data.title}</Title>

      <RateContainer>
        <Ionicons name='md-star' size={12} color='#E7A74e' />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

    </Container>
  )
}

export default SliderItem;
