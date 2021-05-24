import React, { FC } from 'react';

import * as S from './FormGroups.styles';

export const FormGroup: FC = () => {
  return (
    <S.Container>
      <h1>Lorem ipsum</h1>

      <S.InputGroup>
        <label>Text</label>
        <input type="text" />
      </S.InputGroup>

      <S.InputGroup>
        <label>Text</label>
        <input type="text" />
      </S.InputGroup>

      <S.InputGroup>
        <label>Text</label>
        <input type="text" />
      </S.InputGroup>

      <S.InputGroup>
        <label>Text</label>
        <input type="text" />
      </S.InputGroup>

      <S.Button>Submit</S.Button>
    </S.Container>
  );
}