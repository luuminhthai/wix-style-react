import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './ToggleSelectionItem.scss';
import typography from '../../src/Typography';
import classNames from 'classnames';

class ToggleSelectionItem extends WixComponent {
  static propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.boolean,
    disabled: PropTypes.boolean
  };

  render() {
    return (
      <li className={classNames(typography.t3, styles.menuItem)}>
        <button type="button" className={styles.button} onClick={this.props.onClick}>
          <span className={styles.icon}>{this.props.icon}</span><span className={styles.text}>{this.props.text}</span>
        </button>
      </li>
    );
  }
}

export default ToggleSelectionItem;
