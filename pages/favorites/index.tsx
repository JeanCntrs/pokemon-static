import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Favorites } from "../../components/pokemon";
import { NoFavorites } from '../../components/ui';
import { localFavorites } from "../../utils";

interface FavoritesPageProps {

}

const FavoritesPage: NextPage<FavoritesPageProps> = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.getFavorites);
    }, []);

    return (
        <Layout title="favorites">
            {
                favoritePokemons.length === 0
                    ? <NoFavorites />
                    : <Favorites pokemonsId={favoritePokemons}/>
            }
        </Layout>
    );
}

export default FavoritesPage;