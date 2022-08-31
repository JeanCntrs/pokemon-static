import { NextPage, GetStaticProps } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';

const Home: NextPage = (props) => {
  console.log('props1', props);

  return (
    <Layout title='Pokemon List'>
      <Button color='gradient'> Hello Again!</Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default Home