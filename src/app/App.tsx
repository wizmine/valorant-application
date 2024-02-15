import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import ItemsList from "../pages/ItemsList";
import AgentPage from "../pages/AgentPage";
import WeaponPage from "../pages/WeaponPage";
import { useEffect } from "react";
import { fetchAgents } from "../redux/slices/agents";
import { fetchWeapons } from "../redux/slices/weapons";
import { useAppDispatch } from "../hooks/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAgents());
    dispatch(fetchWeapons());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <NavBar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<ItemsList />} />
          <Route path="/agents/:id" element={<AgentPage />} />
          <Route path="/weapons" element={<ItemsList />} />
          <Route path="/weapons/:id" element={<WeaponPage />} />
        </Routes>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  height: 100%;
  flex: 1;
`;
