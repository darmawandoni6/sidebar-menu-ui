import React from 'react'
import style from '../styles.module.scss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const SubMenu = ({ idx, name, icon, menu = [], href, toggle, sidebar, isOpen }) => {
  const [goTo, setGoTo] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => {
    const find = menu.find((item) => href + item.href === pathname)
    const vMenu = document.getElementById(`menu-${idx}`)
    if (find) {
      const arrow = document.getElementById(`collapse-${idx}`)
      const subMenu = document.getElementById(`sub-menu-${idx}`)
      vMenu.style.height = subMenu.clientHeight + 'px'
      arrow.style.rotate = '180deg'
      toggle(idx)

      setGoTo(true)
    }
  }, [])

  React.useEffect(() => {
    const vMenu = document.getElementById(`menu-${idx}`)
    const arrow = document.getElementById(`collapse-${idx}`)
    if (isOpen === 'open') {
      const subMenu = document.getElementById(`sub-menu-${idx}`)
      vMenu.style.height = subMenu.clientHeight + 'px'
      arrow.style.rotate = '180deg'
    }
    return () => {
      vMenu.style.height = 0
      arrow.style.rotate = '0deg'
    }
  }, [isOpen])

  React.useEffect(() => {
    if (goTo && isOpen === 'open') {
      const subMenu = document.getElementById(`sub-menu-${idx}`)
      const cont = document.querySelector('.sidebar-content')
      cont.scrollTo(0, subMenu.offsetTop)
    }
  }, [goTo, isOpen])

  const active = React.useCallback((href) => pathname === href, [pathname])

  return (
    <>
      <div
        className={cx(style.menu, 'menu-sidebar')}
        role="button"
        tabIndex={idx}
        onClick={() => toggle(idx)}
      >
        <div className={style.icon}>{icon}</div>
        <div className={style.name}>{name}</div>
        <div id={`collapse-${idx}`} className={style.sub}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <nav id={`menu-${idx}`} className={style.subMenu}>
        <ul id={`sub-menu-${idx}`}>
          {menu.map((item, i) => (
            <li key={i}>
              <Link
                to={href + item.href}
                className={cx(
                  style.menu,
                  'menu-sidebar',
                  active(href + item.href) ? 'active-menu' : '',
                )}
                onClick={sidebar}
              >
                <div className={cx(style.name)}>{item.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
SubMenu.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
  isOpen: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  sidebar: PropTypes.func.isRequired,
}

SubMenu.defaultProps = {
  menu: [],
}
const reRendring = (prev, next) => {
  return prev.isOpen === next.isOpen
}
export default React.memo(SubMenu, reRendring)
