import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { pokeApi } from '../../api';
import { Layout } from "../../components/layouts";
import { PokemonFull } from '../../interfaces';

interface PokemonPageProps {
    pokemon: PokemonFull
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
    return (
        <Layout title="Some pokémon">
            <h1>{pokemon.name}</h1>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        paths: pokemons151.map(id => ({ params: { id } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as { id: string };
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;