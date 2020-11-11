import styled from 'styled-components/macro'
export default function ConfirmationPage({
  firstName,
  lastName,
  clickHandler,
}) {
  return (
    <PageWrapper>
      <h4>Welcome {firstName}</h4>
      <p>
        Your successfully registered a new user with {firstName} {lastName}
      </p>
      <button onClick={clickHandler}>Back</button>
    </PageWrapper>
  )
}

const PageWrapper = styled.section`
  animation: flyIn 1s 0.5s linear forwards;
  background: ivory;
  font-family: sans-serif;
  padding: 2rem;
  opacity: 0;

  button {
    color: ivory;
    padding: 0.5rem 1rem;
    background: purple;
    border: none;
    border-radius: 5px;
  }

  @keyframes flyIn {
    0% {
      transform: translateY(-100%);
      opacity: 1;
    }

    90% {
      transform: translateY(5%);
      opacity: 1;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
