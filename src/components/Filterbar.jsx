import React from 'react';
import { AppBar, Toolbar, Button, ButtonGroup } from '@mui/material';

const filters = ['All', 'Fetch/XHR', 'Doc', 'CSS', 'JS', 'Font', 'Img', 'Media', 'Manifest', 'WS', 'Wasm', 'Other'];

const FilterBar = ({ filter, setFilter }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {filters.map((f) => (
            <Button key={f} color={filter === f ? 'primary' : 'default'} onClick={() => setFilter(f)}>
              {f}
            </Button>
          ))}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default FilterBar;