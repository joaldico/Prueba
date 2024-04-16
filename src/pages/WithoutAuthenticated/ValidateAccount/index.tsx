import Container from '../../../components/Containers/Container';
import ContainerPage from '../../../components/LayoutAuth/ContainerPage';
import ValidateAccountForm from './ValidateAccountForm';

const ValidateAccount = () => {
  return (
    <Container>
      <ContainerPage>
        <ValidateAccountForm />
      </ContainerPage>
    </Container>
  );
};

export default ValidateAccount;
