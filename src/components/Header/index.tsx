import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, MenuButton, Title } from './styles';

type Props = {
  title: string,
}

const Header = ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton /* onPress={() => navigation.openDrower()} */>
        <Feather name="menu" size={36} color='#FFF' />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  )
}

export default Header;
