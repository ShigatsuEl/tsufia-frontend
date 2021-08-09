import React from 'react';

import * as I from '.';
import * as S from '@molecules/UnorderedList/style';

export const UnorderedList: React.FC<I.UnorderedListProps> = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
);

UnorderedList.defaultProps = {
  flexDirection: I.FlexDirectionProp.Row,
};
