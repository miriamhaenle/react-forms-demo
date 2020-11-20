import styled from 'styled-components/macro'

export default function Button({ buttonText, isLoading }) {
  return (
    <ButtonStyled isLoading={isLoading}>
      <span>{buttonText}</span>
      {isLoading && <Loader />}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.isLoading ? 'gray' : '#1b7e64')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px 11px;
  font-size: 1.25rem;
  border-radius: 5px;
  border: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
`

const Loader = styled.span`
  display: inline-block;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  width: 12px;
  height: 12px;
  border-top: 5px solid rgba(255, 255, 255, 0.2);
  border-right: 5px solid rgba(255, 255, 255, 0.2);
  border-bottom: 5px solid rgba(255, 255, 255, 0.2);
  border-left: 5px solid #ffffff;
  border-radius: 50%;
  animation: load 1s linear infinite;

  &::before {
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }

  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
