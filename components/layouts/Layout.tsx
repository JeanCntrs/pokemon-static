import Head from 'next/head';
import { NavBar } from '../ui';

interface LayoutProps {
    title?: string;
    children?: React.ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Jean C. Contreras' />
                <meta name="description" content="Pokemon Info" />
                <meta name="keywords" content="pokemon, pokedex" />

                <meta property='og:title' content={`Info about ${title}`} />
                <meta property='og:description' content={`Page about ${title}`} />
                <meta property='og:image' content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar />

            <main style={{ padding: '8px 20px', height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
                {children}
            </main>
        </>
    );
}