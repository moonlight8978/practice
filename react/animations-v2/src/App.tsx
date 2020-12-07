import React, { useState } from "react";
import { SelectCallback } from "react-bootstrap/esm/helpers";
import { Container, Nav } from "react-bootstrap";

import FadeIn from "animations/fade-in";
import ListModification from "animations/list-modification";

type TabName = "fadeIn" | "reaction" | "listModification";

function App() {
  const [tab, setTab] = useState<TabName>("listModification");

  const renderTab = () => {
    switch (tab) {
      case "fadeIn":
        return <FadeIn />;

      case "listModification":
        return <ListModification />;

      default:
        return null;
    }
  };

  return (
    <Container>
      <Nav
        variant="tabs"
        defaultActiveKey="fadeIn"
        onSelect={setTab as SelectCallback}
        activeKey={tab}
      >
        <Nav.Item>
          <Nav.Link eventKey="fadeIn">Fade In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="listModification">List Modification</Nav.Link>
        </Nav.Item>
      </Nav>

      {renderTab()}
    </Container>
  );
}

export default App;
