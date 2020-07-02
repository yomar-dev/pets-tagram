import React from 'react';
import Login from './app/auth/pages/login';
import Registration from './app/auth/pages/registration';
import Button from './app/shared/components/button';
import Input from './app/shared/components/input';
import Navigation from './app/header/components/navigation';
import Search from './app/header/components/search';

function App() {
  return (
    <>
      <Login />
      <Registration />
      <Button />
      <Input />
      <Navigation />
      <Search />
    </>
  );
}

export default App;
