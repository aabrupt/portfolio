export async function getServerSideProps(context) {
    return {
        props: {},
        redirect: {
            permanent: true,
            destination: '/todos',
        },
    };
}

export default function Index() {
    return null;
}
