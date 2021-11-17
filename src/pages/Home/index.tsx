import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Container, Input, SearchButton, SearchContainer } from './styles';


const Home = () => {
  return (
    <Container>
      <SearchContainer>
        <Input
          placeholder={'teste'}
          placeholderTextColor="#ddd"
        />

        <SearchButton>
          <Feather name='search' size={30} color='#FFF' />
        </SearchButton>
      </SearchContainer>
    </Container>
  )
}

export default Home;
