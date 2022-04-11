import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

type Props = {
    primary?: boolean
    danger?: boolean
    label?: string
    onclick?: () => void
}

const Button: React.FC<Props> = ({ primary, danger, label, onclick }) => {
    return (
        <button type="button" onClick={onclick} className={[styles.button, primary ? styles.primary : '', danger ? styles.danger : ''].join(" ")}>
            {label}
        </button>
    )
}

export default Button

Button.propTypes = {
    primary: PropTypes.bool,
    danger: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onclick: PropTypes.func,
}

Button.defaultProps = {
    primary: false,
    danger: false,
    label: '按钮',
    onclick: undefined
}

