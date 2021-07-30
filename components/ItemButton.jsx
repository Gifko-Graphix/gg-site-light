import React from 'react';

const ItemButton = React.forwardRef(({ onClick, href, children }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    {children}
  </a>
));

export default ItemButton;
