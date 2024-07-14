

import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const NetworkRow = ({ data }) => {
  return (
    <TableRow>
      <TableCell>{data.id}</TableCell>
      <TableCell>{data.type}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.time}</TableCell>
    </TableRow>
  );
};

export default NetworkRow;
