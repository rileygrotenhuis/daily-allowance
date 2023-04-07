import { getSession } from 'next-auth/react';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      user: session?.user ?? null,
    },
  };
};

const Home = (props) => {
  return (
    <div>
      <h1>Next.js Fullstack Template</h1>
      {props.user ? <h3>Hello there {props.user.name}!</h3> : <></>}
    </div>
  );
};

export default Home;
