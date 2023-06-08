import { FC } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Stack, Avatar, IconButton, Modal, Typography } from '@mui/material';
import { useToggle } from 'usehooks-ts';

const authorData = {
  name: 'Oleksandr Danylchenko',
  avatarUrl:
    'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rH26C93XYBszu51N8PVa0DG9BA2JCb15J6f32VdAzS0cNyF84XMBvXrWiNGQZsNMq78wZqGOVaKLNW4UTQLs2OR752=s1600',
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
            <Typography
              id="author-modal-title"
              variant="h3"
              sx={{ lineHeight: 1.2 }}
            >
              {authorData.name}
            </Typography>
            <Typography
              id="author-modal-description"
              variant="h5"
              sx={{ lineHeight: 1.7 }}
            >
              Full-Stack JS/TS Developer <br /> <i>React + Node.js = ❤️</i>
            </Typography>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default AuthorModal;
