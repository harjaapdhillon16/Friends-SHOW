import { Container } from '~/components/container/Container';

function Page404() {
  return (
    <Container title="404 Page">
      <div className="hero min-h-screen bg-gray-800">
        <div className="text-center hero-content text-3xl font-bold">
          <div>
            <h1>The page is not found.</h1>
            <div className="mt-4">
              <a href="/" className="link-primary">
                Top Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Page404;
