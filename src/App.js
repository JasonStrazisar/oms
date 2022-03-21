import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { apolloClient } from "./config";
import { Header } from "./layout";
import { HomePage, PostListPage } from "./pages";

const GlobalStyleReset = createGlobalStyle`
    body, 
    p, 
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    div,
    button,
    input {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
`;

const AppLayout = () => (
  <div style={{ padding: "0 40px" }}>
    <Header />
    <Outlet />
  </div>
);

const Home = () => (
  <div style={{ backgroundColor: "green" }}>
    <p>Home page</p>
  </div>
);

const Contact = () => (
  <div style={{ backgroundColor: "red" }}>
    <p>Sale pute</p>
  </div>
);

const App = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyleReset />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="publications">
            <Route index element={<PostListPage />} />
            <Route path=":postId" />
          </Route>
          <Route path="contacts" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
