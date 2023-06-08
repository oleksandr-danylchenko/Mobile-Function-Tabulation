import { FC } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Stack, Avatar, IconButton, Modal, Typography } from '@mui/material';
import { useToggle } from 'usehooks-ts';

import avatar_compressed from '@/assets/avatar_compressed.jpeg';

const authorData = {
  name: 'Oleksandr Danylchenko',
  avatarUrl: avatar_compressed,
};

const AuthorModal: FC = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <>
      <IconButton
        aria-label="Show author info"
        sx={{
          position: 'absolute',
          left: 10,
          top: 10,
        }}
        color="inherit"
        onClick={toggleOpen}
      >
        <AccountCircleIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby="author-modal-title"
        aria-describedby="author-modal-description"
      >
        <Stack alignItems="center" justifyContent="center" height="100%" p={2}>
          <Stack
            alignItems="center"
            justifyContent="center"
            gap={2.5}
            p={3}
            sx={{
              position: 'relative',
              backgroundColor: 'primary.light',
              borderRadius: 10,
              textAlign: 'center',
            }}
          >
            <IconButton
              aria-label="Hide author info"
              sx={{
                position: 'absolute',
                right: 12,
                top: 10,
              }}
              color="inherit"
              onClick={toggleOpen}
            >
              <CancelIcon />
            </IconButton>
            <Avatar
              alt={authorData.name}
              src={authorData.avatarUrl}
              sx={{ width: 240, height: 240 }}
            />
            <Typography id="author-modal-title" variant="h3">
              {authorData.name}
            </Typography>
            <Stack gap={1}>
              <Typography id="author-modal-description" variant="h4">
                Full-Stack <br />
                Web Developer
              </Typography>
              <Typography
                id="author-modal-description"
                variant="h5"
                sx={{ textTransform: 'it' }}
              >
                <i>
                  React + Node.js = ❤️
                  <Typography
                    id="author-modal-description"
                    variant="h6"
                    fontSize={11}
                  >
                    A bit of Ruby and Python too ✨
                  </Typography>
                </i>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default AuthorModal;
