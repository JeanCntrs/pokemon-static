import Head from 'next/head';

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

            <main>
                {children}
            </main>
        </>
    );
}