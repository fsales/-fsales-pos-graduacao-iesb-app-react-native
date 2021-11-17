import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import SliderItem from '../../components/SliderItem';
import api, { key, languageDefault } from '../../services/api';
import { getListMovies, getMovieBannerMovie } from '../../utils/movies';
import { Banner, BannerButton, Container, Input, SearchButton, SearchContainer, SliderMovie, Title } from './styles';



const Home = () => {
  const [nowMovies, setNowMovies] = useState([] as any);
  const [popularMovies, setPopularMovies] = useState([] as any);
  const [topRetedMovies, setTopRetedMovies] = useState([] as any);
  const [bannerMovie, setBannerMovie] = useState({} as any);

  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isAtivo = true;
    const ac = new AbortController();

    async function getMovies() {

      const [nowPlayingData, popularData, topRetedData] = await Promise.all([
        api.get('movie/now_playing', {
          params: {
            api_key: key,
            language: languageDefault,
            page: 1
          }
        }),
        api.get('movie/popular', {
          params: {
            api_key: key,
            language: languageDefault,
            page: 1
          }
        }),
        api.get('movie/top_rated', {
          params: {
            api_key: key,
            language: languageDefault,
            page: 1
          }
        })
      ]);

      if (isAtivo) {
        const nowList = getListMovies(10, nowPlayingData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topList = getListMovies(5, topRetedData.data.results);

        setBannerMovie(getMovieBannerMovie(nowPlayingData.data.results));

        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopRetedMovies(topList);

        setLoading(false);
      }
    }
    getMovies();

    // executado quando o mudar de tela (o componente e desmontado).
    return () => {
      isAtivo = false;
      ac.abort();
    }

  }, []);

  function navigateDetailsPage(item: any) {
    navigation.navigate('Detail', { id: item.id });
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#FFF" />
      </Container>
    );
  }

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

      <ScrollView showsVerticalScrollIndicator={false}>

        <Title>Em Cartaz</Title>

        <BannerButton
          activeOpacity={0.8}
          onPress={() => navigateDetailsPage(bannerMovie)}
        >
          <Banner
            resizeMethod="resize"
            source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          data={nowMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={(item: any) => navigateDetailsPage(item)} />}
          keyExtractor={(item: any) => String(item.id)}
        />

        <Title>Populares</Title>

        <SliderMovie
          horizontal={true}
          data={popularMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={(item: any) => navigateDetailsPage(item)} />}
          keyExtractor={(item: any) => String(item.id)}
        />

        <Title>Mais Votados</Title>

        <SliderMovie
          horizontal={true}
          data={topRetedMovies}
          renderItem={({ item }) => <SliderItem data={item} navigatePage={(item: any) => navigateDetailsPage(item)} />}
          keyExtractor={(item: any) => String(item.id)}
        />

      </ScrollView>

    </Container>
  )
}

export default Home;
