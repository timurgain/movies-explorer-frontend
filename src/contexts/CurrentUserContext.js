import React from 'react';

const CurrentUserContext = React.createContext();

const defaultCurrentUser = {
  name: 'User',
  email: 'user@email.com'
}

export { CurrentUserContext, defaultCurrentUser }
