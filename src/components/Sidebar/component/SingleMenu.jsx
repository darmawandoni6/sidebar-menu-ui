import React from 'react'
import style from '../styles.module.scss'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'

const SingleMenu = ({ name, icon, href, sidebar }) => {
  const { pathname } = useLocation()

  const active = React.useMemo(() => pathname === href, [pathname])

  return (
    <Link
      to={href}
      className={cx('menu-sidebar', style.menu, active ? 'active-menu' : '')}
      onClick={sidebar}
    >
      <div className={style.icon}>{icon}</div>
      <div className={style.name}>{name}</div>
    </Link>
  )
}

SingleMenu.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool,
  sidebar: PropTypes.func,
}

export default SingleMenu
