import { getSession } from 'next-auth/react';
import CreateExampleForm from '@/client/components/CreateExampleForm';
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

  return {
    props: {
      user: session.user,
    },
  };
};

const Create = (props) => {
  return (
    <div>
      <Typography variant="h3">Create Example</Typography>
      <CreateExampleForm {...props} />
    </div>
  );
};

export default Create;
