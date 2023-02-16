import Page from '../components/Page';
import { StyledContainer } from '../components/Auth';

export default function AuthLayout({ children }) {
  return (
    <Page>
      <StyledContainer width="800px">
        {children}
      </StyledContainer>
    </Page>
  );
}
