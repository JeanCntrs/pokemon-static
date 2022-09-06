import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface FavoritesProps {
    pokemonsId: number[];
}

export const Favorites: React.FC<FavoritesProps> = ({ pokemonsId }) => {
    const router = useRouter();

    const handleClick = (pokemonId: number) => {
        router.push(`/pokemons/${pokemonId}`);
    }

    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                pokemonsId.map(id => (
                    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={() => handleClick(id)}>
                        <Card isHoverable isPressable css={{ padding: 10 }}>
                            <Card.Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width={'100%'}
                                height={140}
                            />
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>);
}