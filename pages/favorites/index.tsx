import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from '../../components/ui';
import { localFavorites } from "../../utils";

interface FavoritesPageProps {

}

const FavoritesPage: NextPage<FavoritesPageProps> = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
    console.log('favoritePokemons', favoritePokemons)
    useEffect(() => {
        setFavoritePokemons(localFavorites.getFavorites);
    }, []);

    return (
        <Layout title="favorites">
            <NoFavorites />
        </Layout>
    );
}

export default FavoritesPage;