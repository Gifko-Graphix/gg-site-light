import { Fab } from '@material-ui/core';
import React from 'react';

const LinkFab = React.forwardRef(({ onClick, href, text }, ref) => (
  <Fab className="inline" variant="extended" href={href} onClick={onClick} ref={ref}>
    {text}
  </Fab>

));

export default LinkFab;
