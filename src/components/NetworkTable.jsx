

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import NetworkRow from './NetworkRow';

const dummyData = [
  { id: 1, type: 'Fetch/XHR', name: 'Request 1', time: '40 ms' },
  { id: 2, type: 'CSS', name: 'Request 2', time: '45 ms' },
  // Add more dummy data as needed
];

const NetworkTable = ({ filter }) => {
  const filteredData = filter === 'All' ? dummyData : dummyData.filter((data) => data.type === filter);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((data) => (
            <NetworkRow key={data.id} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NetworkTable;
