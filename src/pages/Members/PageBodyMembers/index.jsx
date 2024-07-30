import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import * as S from './Styles';

export default function PageBodyMembers() {
  return (
    <>
      <Header />
      <S.Divisor />
      <Outlet />
      <Footer />
    </>
  );
}
