import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './account.styles.scss';

const AccountPage = () => {
  return (
    <div className='account'>
      <SignIn />
    </div>
  )
};

export default AccountPage;