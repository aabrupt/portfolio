import Head from 'next/head';
import { Footer, Navbar } from '@nx-next-docs/ui';
import { ReactNode } from 'react';

export interface LayoutProps {
    title: string;
    children?: ReactNode;
}

export function DefaultLayout({ title, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
