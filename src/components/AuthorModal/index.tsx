import { FC } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Stack,
  Button,
  Avatar,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import { useToggle } from 'usehooks-ts';

import avatar_compressed from '@/assets/avatar_compressed.jpeg';
import { absoluteCenter, desmosButton } from '@/styles/mixins';

const authorData = {
  name: 'Oleksandr Danylchenko',
  avatarUrl: avatar_compressed,
};

const AuthorModal: FC = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <>
      <Button
        css={desmosButton}
        aria-label="Show author info"
        sx={{
          position: 'absolute',
          left: 10,
          top: 10,
          zIndex: 1,
        }}
        color="inherit"
        onClick={toggleOpen}
      >
        <AccountCircleIcon fontSize="small" width={16} height={16} />
      </Button>
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby="author-modal-title"
        aria-describedby="author-modal-description"
      >
        <Stack
          css={absoluteCenter}
          alignItems="center"
          justifyContent="center"
          gap={2.5}
          p={3}
          sx={{
            position: 'relative',
            backgroundColor: 'primary.light',
            borderRadius: 10,
            textAlign: 'center',
            width: 'min(85%, 340px)',
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
            sx={{ width: 230, height: 230 }}
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
      </Modal>
    </>
  );
};

export default AuthorModal;
