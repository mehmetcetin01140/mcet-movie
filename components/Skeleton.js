import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1} maxWidth="100%" maxHeight="100%">
      <Skeleton variant="rectangular" animation="wave" width={"100%"} height={400} />
      <Skeleton variant="text" animation="wave"  width={"100%"} height={60}/>
      <Skeleton variant="text" animation="wave"  width={"100%"} height={120}/>
      
    </Stack>
  );
}