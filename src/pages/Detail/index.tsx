import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Modal, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';
import Genres from '../../components/Genres';
import ModalLink from '../../components/ModalLink';
import api, { key, languageDefault } from '../../services/api';
import { Banner, ButtonLink, Container, ContentArea, Description, HeaderButton, Headers, ListGenres, Rate, Title } from './styles';


const Detail = () => {
  const navigation = useNavigation();
  const route: any = useRoute();

  const [movie, setMovie] = useState({} as any);

  const [openLink, setOpenLink] = useState(false);

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovie() {
      const response: any = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
          language: languageDefault,
        }
      }).catch((err) => console.log(err));


      setMovie(response.data);

    }
    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
      ac.abort();
    }


  }, []);

  return (
    <Container>
      <Headers>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={28}
            color="#FFF" />
        </HeaderButton>
      </Headers>


      <Banner
        resizeMethod="resize"
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} />

      <ButtonLink onPress={() => setOpenLink(true)}>
        <Feather name="link" size={24} color="#FFF" />
      </ButtonLink>

      <Title numberOfLines={2}>{movie.title}</Title>

      <ContentArea>
        <StarRating
          disabled={true}
          fullStar={'md-star'}
          emptyStar={"md-star-outline"}
          halfStar={'md-star-half'}
          iconSet={'Ionicons'}
          maxStars={17}
          starSize={17}
          rating={movie.vote_average}
          fullStarColor={'#E7A74e'}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={movie?.genres}
        renderItem={({ item }) => <Genres data={item} />}
        keyExtractor={(item: any) => String(item?.id)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descricao</Title>
        <Description>{movie?.overview}</Description>
      </ScrollView>

      <Modal animationType='slide' transparent={true} visible={openLink} >
        <ModalLink
          link={movie?.homepage}
          title={movie?.title}
          closeModal={() => setOpenLink(false)} />

      </Modal>

    </Container>
  )
}

export default Detail;
