import React from 'react';

const ItemButton = React.forwardRef(({ onClick, href, children }, ref) => (
  <a href={href} onClick={onClick} className="hover:text-green-light active:text-purple-light" ref={ref}>
    {children}
  </a>
));

export default ItemButton;
