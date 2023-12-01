import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, Link } from "./Layout.styled";

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Сatalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
