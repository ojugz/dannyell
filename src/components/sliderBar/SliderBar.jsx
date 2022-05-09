import React, { useState } from 'react';
import './sliderBar.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
//import { Slider, Box } from '@material-ui/core';


export default function SliderBar({ onDataSet }) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }

  const [data, setData] = useState(25);

  const handleChange = (event, newData) => {
    setData(newData);
    onDataSet(newData);
  };

  return (
    <div className='slider'>
      <Box sx={{ height: 250 }}>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          value={data}
          onChange={handleChange}
          orientation='vertical'
          // defaultValue={30}
          aria-label='Temperature'
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </div>
  );
}