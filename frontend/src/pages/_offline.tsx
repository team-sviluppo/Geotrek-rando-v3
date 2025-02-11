import { Button } from 'components/Button';
import { Layout } from 'components/Layout/Layout';
import { NextPage } from 'next';
import { FormattedMessage } from 'react-intl';
import { routes } from 'services/routes';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: bold;
    margin: 32px;
    font-size: 200%;
    padding-right: 32px;
    border-right: 1px solid #000;
  }
`;

const Spacer = styled.div`
  height: 64px;
`;

const OfflineFallback: NextPage = () => {
  return (
    <Layout>
      <Spacer />

      <Container>
        <h1>
          <FormattedMessage id={'offline.title'} />
        </h1>
        <div>
          <FormattedMessage id={'offline.not-available'} />
        </div>
      </Container>

      <Spacer />

      <Container>
        <Button onClick={() => window.open(routes.OFFLINE, '_self')}>
          <FormattedMessage id={'page.goToOffline'} />
        </Button>
      </Container>
    </Layout>
  );
};

export default OfflineFallback;
