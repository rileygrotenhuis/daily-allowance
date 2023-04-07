import React, { useState } from 'react';
import { Box, Button, Card, Modal, TextField, Typography } from '@mui/material';
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
  const [newAmountModalOpen, setNewAmountModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(true);
  const [newAmount, setNewAmount] = useState(null);
  const [newAllowance, setNewAllowance] = useState(null);

  return (
    <>
      <Modal
        open={newAmountModalOpen}
        onClose={() => {
          setNewAmountModalOpen(false);
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: '25px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h4">Enter amount spent</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <TextField
              variant="outlined"
              label="Amount"
              type="number"
              value={newAmount}
              onChange={(e) => {
                setNewAmount(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                alert(newAmount);
                setNewAmount(null);
                setNewAmountModalOpen(false);
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={settingsModalOpen}
        onClose={() => {
          setSettingsModalOpen(false);
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: '25px',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5">Change Daily Allowance</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
            }}
          >
            <TextField
              variant="outlined"
              label="Amount"
              type="number"
              value={newAmount}
              onChange={(e) => {
                setNewAllowance(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                alert(newAllowance);
                setNewAllowance(null);
                setSettingsModalOpen(false);
              }}
            >
              Submit
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '25px',
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                alert('RESETTING BALANCE');
              }}
            >
              Reset Balance
            </Button>
          </div>
        </Box>
      </Modal>
      <Button
        style={{
          display: 'flex',
          margin: 'auto',
        }}
        onClick={() => {
          setNewAmountModalOpen(true);
        }}
      >
        <Card
          style={{
            width: '350px',
            height: '300px',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            style={{
              margin: 'auto',
            }}
          >
            $30.67
          </Typography>
        </Card>
      </Button>
      <Button
        variant="contained"
        color="success"
        style={{
          display: 'flex',
          margin: 'auto',
          marginTop: '10px',
        }}
        onClick={() => {
          setSettingsModalOpen(true);
        }}
      >
        Settings
      </Button>
    </>
  );
};

export default Home;
