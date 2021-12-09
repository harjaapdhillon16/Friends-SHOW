import { Container } from '../container/Container';
import { IndexSummary, AllCharacters, Hero } from '../screenComponents/Index';

function Index() {
  return (
    <Container pageTitle="AS SEEN ON NETFLIX" title="Home Page">
      <>
        <Hero />
        <IndexSummary />
        <AllCharacters />
      </>
    </Container>
  );
}

export default Index;
