import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#ddd',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;
