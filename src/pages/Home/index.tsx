import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import SliderItem from '../../components/SliderItem';
import api, { key, languageDefault } from '../../services/api';
import { getListMovies } from '../../utils/movies';
import { Banner, BannerButton, Container, Input, SearchButton, SearchContainer, SliderMovie, Title } from './styles';



const Home = () => {
  const [nowMovies, setNowMovies] = useState([] as any);
  const [popularMovies, setPopularMovies] = useState([] as any);
  const [topRetedMovies, setTopRetedMovies] = useState([] as any);

  useEffect(() => {
    let isAtivo = true;
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


      const nowList = getListMovies(10, nowPlayingData.data.results);
      const popularList = getListMovies(5, popularData.data.results);
      const topList = getListMovies(5, topRetedData.data.results);

      setNowMovies(nowList);
      setPopularMovies(popularList);
      setTopRetedMovies(topList);
    }
    getMovies();
  }, []);


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
          onPress={() => alert(nowMovies)}
        >
          <Banner
            resizeMethod="resize"
            source={{ uri: 'https://images.unsplash.com/photo-1637075729774-69f2813cc2bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          data={nowMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>

        <SliderMovie
          horizontal={true}
          data={popularMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item) => String(item.id)} />

        <Title>Mais Votados</Title>

        <SliderMovie
          horizontal={true}
          data={topRetedMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item) => String(item.id)} />

      </ScrollView>

    </Container>
  )
}

export default Home;
