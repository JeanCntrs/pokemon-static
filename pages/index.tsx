import { NextPage, GetStaticProps } from 'next';

import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { Pokemon, PokemonListResponse } from '../interfaces';
import { PokeCard } from '../components/pokemon';

interface HomeProps {
    pokemons: Pokemon[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
    return (
        <Layout title='Pokemon List'>
            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemons.map((pokemon) => (
                        <PokeCard key={pokemon.id} pokemon={pokemon} />
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