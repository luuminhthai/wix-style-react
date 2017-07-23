import React from 'react'
import PropTypes from 'prop-types'
import WixComponent from '../BaseComponents/WixComponent'
import styles from './ToggleSelection.scss'
import ToggleSelectionItem from '../ToggleSelectionItem'
import classNames from 'classnames';

class ToggleSelection extends WixComponent {
  static propTypes = {
    selectedItemIndex: PropTypes.number,
    disabled: PropTypes.boolean,
    onChange: PropTypes.function
  }

  static defaultProps = {
    size: 'normal',
    placement: 'top',
    buttonTheme: 'icon-greybackground',
  }

  render() {
    const {disabled, selectedItemIndex, onChange} = this.props
    const items = React.Children.map(this.props.children, (child, i) => {
    const isSelected = selectedItemIndex === i
      const {onClick, ...passThroughProps} = child.props
      const onItemClick = () => {
        if (!isSelected) {
          onChange(i)
        }
        onClick()
      }
      return <ToggleSelectionItem {...passThroughProps}
        selected={isSelected}
        disabled={disabled}
        onClick={onItemClick}
        key={i}/>
    })

    return (
      <ul className={classNames(styles.menu)}>
        {items}
      </ul>
    )
  }
}

export default ToggleSelection
