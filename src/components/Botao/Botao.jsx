import React from 'react'
import PropTypes from 'prop-types';

export class Botao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { className, onClick, titulo } = this.props;
    return (
      <button className={className} onClick={onClick}>
        {titulo}
      </button>
    )
  }

  static propTypes = {
    titulo: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };
}
