import React from 'react'
import style from './styles.module.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cx from 'classnames'

const NavbarHeader = ({ title, toggle, navbarRight }) => {
  return (
    <nav className={cx(style.main, 'main-navbar')}>
      <div className={cx(style.left, 'left-nav')}>
        <Link to={title.href}>
          <div className={cx(style.title, 'title-nav')}>{title.name}</div>
        </Link>
        <button className={cx(style.btn, 'btn-burger')} onClick={toggle}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={cx(style.right, 'right-nav')}>{navbarRight}</div>
    </nav>
  )
}
NavbarHeader.propTypes = {
  title: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
  toggle: PropTypes.func,
  navbarRight: PropTypes.element,
}

export default React.memo(NavbarHeader)
