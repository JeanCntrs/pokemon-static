import Head from 'next/head';
import { NavBar } from '../ui';

interface LayoutProps {
    title?: string;
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Jean C. Contreras' />
                <meta name="description" content="Pokemon Info" />
                <meta name="keywords" content="pokemon, pokedex" />
            </Head>

            <NavBar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    );
}