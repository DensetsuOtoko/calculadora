import React from 'react';
import PropTypes from 'prop-types';

export class Botao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, onClick, titulo } = this.props;
    return (
      <button className={className} onClick={onClick}>
        {titulo}
      </button>
    );
  }

  static propTypes = {
    titulo: PropTypes.string.isRequired,
    // eslint-disable-next-line react/require-default-props
    className: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    onClick: PropTypes.func,
  };
}
