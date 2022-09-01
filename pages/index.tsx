import { NextPage, GetStaticProps } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { Pokemon, PokemonListResponse } from '../interfaces';

interface HomeProps {
    pokemons: Pokemon[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
    return (
        <Layout title='Pokemon List'>
            <ul>
                {
                    pokemons.map(({ id, name }) => (
                        <li key={id}>
                            #{id}- {name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemons: Pokemon[] = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubsercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }))

    return {
        props: {
            pokemons
        }
    }
}

export default Home