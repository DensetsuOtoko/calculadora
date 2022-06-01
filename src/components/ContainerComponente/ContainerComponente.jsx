import React from 'react'
import Container from "@mui/material/Container";

export class ContainerComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Container maxWidth="xs">
        <div className='wrapper'>
          {this.props.children}
        </div>
      </Container>
    )
  }
}
