import React from "react";
import Sidebar from "react-sidebar";
import { Button } from "reactstrap";

class Side_bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        docked={true}
        sidebar={<Button color="success">Dashboard</Button>}
      >
      </Sidebar>
    );
  }
}

export default Side_bar;