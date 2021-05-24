import React, { FC } from 'react';
import Parcel from 'single-spa-react/parcel'

import * as S from './Dashboard.styles';

export const Dashboard: FC = () => {
  return (
    <S.Container>
      <header>
        <h1>Dashboard</h1>
      </header>

      <S.PageBody>
        <S.Sidebar>
          <h1>Sidebar</h1>
        </S.Sidebar>

        <Parcel
          config={() => System.import('@gs/app-parcel')}
          wrapClassName="parcel-wrapper"
        />
      </S.PageBody>

      <footer>
        <h1>Footer</h1>
      </footer>
    </S.Container>
  )
}
