import { FC } from 'react';

import Container from '../../../../components/Containers/Container';
import ContainerPage from '../../../../components/LayoutAuth/ContainerPage';
import CreateAccountForm from './CreateAccountForm';

type Props = {
  emailToCreate: string;
  tokenToCreateAccount: string | string[] | null;
};

const CreateAccount: FC<Props> = ({ emailToCreate, tokenToCreateAccount }) => {
  return (
    <Container>
      <ContainerPage>
        <CreateAccountForm
          emailToCreate={emailToCreate}
          tokenToCreateAccount={tokenToCreateAccount}
        />
      </ContainerPage>
    </Container>
  );
};

export default CreateAccount;
