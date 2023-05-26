import React from 'react';

const DeviceContext = React.createContext();

const enumWindowWidth = {
  desktop: 1024,
  tablet: 768,
  mobile: 320,
}


export { DeviceContext, enumWindowWidth }
