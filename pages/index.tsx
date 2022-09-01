import { NextPage, GetStaticProps } from 'next';

import { Grid, Card, Row, Text } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { Pokemon, PokemonListResponse } from '../interfaces';

interface HomeProps {
    pokemons: Pokemon[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
    return (
        <Layout title='Pokemon List'>
            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemons.map(({ id, name, img }) => (
                        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                            <Card isHoverable isPressable>
                                <Card.Body css={{ p: 1 }}>
                                    <Card.Image
                                        src={img}
                                        width="100%"
                                        height={140}
                                    />
                                </Card.Body>
                                <Card.Footer>
                                    <Row justify='space-between'>
                                        <Text transform='capitalize'>{name}</Text>
                                        <Text>#{id}</Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid.Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemons: Pokemon[] = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }))

    return {
        props: {
            pokemons
        }
    }
}

export default Home