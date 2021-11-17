import { Feather } from '@expo/vector-icons';
import React from 'react';
import WebView from 'react-native-webview';
import { BackButton, Name } from './styles';

type Props = {
  link: string,
  title: string,
  closeModal: any
}

const ModalLink = ({ link, title, closeModal }: Props) => {
  return (
    <>

      <BackButton onPress={closeModal}>
        <Feather name="x" size={35} color="#FFF" />
        <Name numberOfLines={1}>{title}</Name>
      </BackButton>

      <WebView source={{ uri: link }} />
    </>
  );
}

export default ModalLink;
