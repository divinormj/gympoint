import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  margin: 0 auto;
  padding: 40px 270px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  padding: 30px;
  border-radius: 4px;
  background: #fff;
  overflow: auto;

  th {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.dark};

    &:nth-child(1) {
      width: 40%;
      text-align: left;
    }
    &:nth-child(2) {
      width: 20%;
      text-align: center;
    }
    &:nth-child(3) {
      width: 20%;
      text-align: center;
    }
  }

  td {
    padding: 15px 0;
    border-bottom: 1px solid ${colors.light};
    font-size: 16px;
    color: #666666;
    text-align: left;
    line-height: 20px;

    &:nth-child(2) {
      text-align: center;
    }
    &:nth-child(3) {
      text-align: center;
    }
    &:nth-child(4) {
      text-align: right;
    }
    &:nth-child(5) {
      text-align: right;
    }
  }
`;
