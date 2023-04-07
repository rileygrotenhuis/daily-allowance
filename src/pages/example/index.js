import { getAllExamples } from '@/client/handlers/exampleHandler';
import ExamplesList from '@/client/components/ExamplesList';
import { getSession } from 'next-auth/react';
import { Typography } from '@mui/material';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  const res = await getAllExamples(session.user.id);

  const examples = res.ok ? await res.json() : {};

  return {
    props: {
      user: session.user,
      examples: examples.data,
    },
  };
};

const Index = (props) => {
  return (
    <div>
      <Typography variant="h3">Examples</Typography>
      <ExamplesList {...props} />
    </div>
  );
};

export default Index;
