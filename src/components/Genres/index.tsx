import React from 'react';
import { Container, Name } from './styles';

type Props = {
  data?: any
}

const Genres = ({ data }: Props) => {
  return (
    <Container>
      <Name>
        {data?.name}
      </Name>
    </Container>
  )
}

export default Genres;
