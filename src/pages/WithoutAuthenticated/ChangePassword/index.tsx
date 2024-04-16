import Container from '../../../components/Containers/Container';
import ContainerPage from '../../../components/LayoutAuth/ContainerPage';
import ChangePasswordForm from './ChangePasswordForm';

const ChangePassword = () => {
  return (
    <Container>
      <ContainerPage>
        <ChangePasswordForm />
      </ContainerPage>
    </Container>
  );
};

export default ChangePassword;
