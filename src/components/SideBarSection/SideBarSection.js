import React from 'react';
import classNames from 'classnames';

import './side-bar-section.scss';

class SideBarSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: props.initiallyExpanded,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const { heading, children } = this.props;
    const { isExpanded } = this.state;

    const styles = classNames({
      'side-bar-section': true,
      'side-bar-section-expanded': isExpanded,
    });

    return (
      <div styleName={styles}>
        <button styleName="header" onClick={this.handleClick}>
          <h2>{heading}</h2>
        </button>
        <div styleName="content">
          {children}
        </div>
      </div>
    );
  }
}

export default SideBarSection;
