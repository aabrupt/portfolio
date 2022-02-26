export async function getServerSideProps(context) {
    return {
        props: {},
        redirect: {
            permanent: false,
            destination: '/todos',
        },
    };
}

export default function Index() {
    return null;
}
