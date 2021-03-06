import React from 'react';

import { useLoginFormContext } from '@pages/LogoutHome/LogoutHomeContainer';
import { Header } from '@organisms/Header/Header';
import { Introduction } from '@organisms/Introduction/Introduction';
import { Login } from '@organisms/Login/Login';
import { SignUp } from '@organisms/SignUp/SignUp';
import { Authentication } from '@templates/Authentication/Authentication';

export const LogoutHomePresenter: React.FC = () => {
  const { toggle, rightDivRef } = useLoginFormContext();

  const toggleRightSide = toggle ? <SignUp /> : <Login />;

  return (
    <Authentication
      header={<Header isLoggedIn={false} />}
      leftSide={<Introduction />}
      rightSide={toggleRightSide}
      ref={rightDivRef}
    />
  );
};
