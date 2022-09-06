import { useState, useEffect } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Button, Card, Grid, Image, Text, Container } from "@nextui-org/react";

import confetti from 'canvas-confetti';


import { pokeApi } from '../../api';
import { Layout } from "../../components/layouts";
import { PokemonFull, PokemonListResponse } from '../../interfaces';
import { localFavorites } from "../../utils";

interface PokemonByNamePageProps {
    pokemon: PokemonFull
}

const PokemonByNamePage: NextPage<PokemonByNamePageProps> = ({ pokemon }) => {
    const [isInFavorites, setIsInFavorites] = useState(false);

    const onToggleFavorites = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(!isInFavorites);

        if (isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        });
    }

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
    }, [])
    
    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button
                                color={"gradient"}
                                ghost={!isInFavorites}
                                onPress={onToggleFavorites}
                            >
                                {isInFavorites ? 'In favorites' : 'Save in favorites'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex">
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const pokemonsNames: string[] = data.results.map(result => result.name);

    return {
        paths: pokemonsNames.map(name => ({ params: { name } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as { name: string };
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${name}`);

    return {
        props: {
            pokemon: { name, sprites: data.sprites }
        }
    }
}

export default PokemonByNamePage;