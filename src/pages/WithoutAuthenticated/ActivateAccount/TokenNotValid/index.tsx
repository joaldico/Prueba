import Container from '../../../../components/Containers/Container';
import ContainerPage from '../../../../components/LayoutAuth/ContainerPage';
import TokenNotValidForm from './TokenNotValidForm';

const TokenNotValid = () => {
  return (
    <Container>
      <ContainerPage>
        <TokenNotValidForm />
      </ContainerPage>
    </Container>
  );
};

export default TokenNotValid;
