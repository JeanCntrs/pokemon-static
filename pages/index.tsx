import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <Layout title='Pokemon List'>
      <Button color='gradient'> Hello Again!</Button>
    </Layout>
  )
}

export default Home