import { NextPage, GetStaticProps } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const Home: NextPage = (props) => {
  console.log('props1', props);

  return (
    <Layout title='Pokemon List'>
      <Button color='gradient'> Hello Again!</Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('hello worldddd');

  return {
    props: {
      name: 'jc'
    }
  }
}

export default Home