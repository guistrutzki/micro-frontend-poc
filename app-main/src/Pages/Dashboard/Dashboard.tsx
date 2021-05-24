import React, { FC } from 'react';

import * as S from './Dashboard.styles';

export const Dashboard: FC = () => {
  return (
    <S.Container>
      <header>
        <h1>Dashboard</h1>
      </header>

      <S.Sidebar>
        <h1>Sidebar</h1>
      </S.Sidebar>

      <footer>
        <h1>Footer</h1>
      </footer>
    </S.Container>
  )
}
