import { useRouter } from "next/router";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";

interface PokeCardProps {
    pokemon: Pokemon
}

export const PokeCard: React.FC<PokeCardProps> = ({ pokemon }) => {
    const router = useRouter();

    const { id, name, img } = pokemon;

    const onClick = () => {
        router.push(`/pokemons/${id}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card
                isHoverable
                isPressable
                onClick={onClick}
            >
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
    );
}