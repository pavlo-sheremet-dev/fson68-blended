import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import StatData from 'data/data.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={StatData} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
