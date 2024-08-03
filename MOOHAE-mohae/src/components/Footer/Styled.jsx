import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  gap: 0.5rem;

`;

export const Dongurami = styled.div`
  display: flex;

  width: 2rem;
  height: 2rem;
  background-color: red;
  border-radius: 2rem;
  font-size: 0.5rem;

  justify-content: center;
  align-items: center;
`;