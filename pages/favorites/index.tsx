import { NextPage } from "next";
import { Layout } from "../../components/layouts";

interface FavoritesPageProps {
    
}
 
const FavoritesPage: NextPage<FavoritesPageProps> = () => {
    return (  
        <Layout title="favorites">
            <h1>Favorites</h1>
        </Layout>
    );
}
 
export default FavoritesPage;