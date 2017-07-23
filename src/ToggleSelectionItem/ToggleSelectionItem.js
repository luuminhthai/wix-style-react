import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import {item, button, text, icon} from './ToggleSelectionItem.scss';
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
    const {selected} = this.props
    return (
      <li className={classNames(typography.t3, item, {selected})}>
        <button type="button" className={button} onClick={this.props.onClick}>
          <span className={icon}>{this.props.icon}</span><span className={text}>{this.props.text}</span>
        </button>
      </li>
    );
  }
}

export default ToggleSelectionItem;
