import React, { useCallback } from 'react'
import style from './styles.module.scss'
import PropTypes from 'prop-types'
import SubMenu from './component/SubMenu'
import SingleMenu from './component/SingleMenu'
import cx from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({
  menu = [],
  footerName,
  showSidebar,
  toggle,
  navbar,
  styles = {},
  title,
  header,
}) => {
  const [openSub, setOpenSub] = React.useState(-1)
  const sidebar = React.useId()
  const { pathname } = useLocation()

  const handleOpenSub = useCallback(
    (open) => {
      if (openSub === open) {
        setOpenSub(-1)
      } else {
        setOpenSub(open)
      }
    },
    [openSub],
  )
  const handleMain = React.useCallback((e) => {
    var screen = window.matchMedia('(max-width: 768px)')
    if (screen.matches) {
      const element = document.getElementById(sidebar)
      if (element.id === e.target.id) {
        toggle()
      }
    }
  }, [])

  const handleScreenMobile = useCallback(() => {
    var screen = window.matchMedia('(max-width: 576px)')
    if (screen.matches) {
      toggle()
    }
  }, [])

  const custom = React.useMemo(() => {
    let res = {}
    if (navbar || header) {
      res.paddingTop = 0
    }
    return res
  }, [navbar, header])

  const activeMenu = React.useCallback(
    (href) => {
      const path = pathname.split('/')
      const to = href.split('/')
      return path[1] === to[1]
    },
    [pathname],
  )
  return (
    <div
      id={sidebar}
      className={cx(style.main, showSidebar ? 'sidebar-hide' : style.show, 'sidebar-container')}
      style={{ ...custom, ...styles }}
      onClick={handleMain}
    >
      <aside className={!showSidebar ? 'aside-hide' : ''}>
        {header && (
          <div className={cx('title-sidebar', style.title)}>
            <Link to={title.href}>
              <h1>{title.name}</h1>
            </Link>
          </div>
        )}
        <nav className={cx(style.sidebar, 'sidebar-content')}>
          <ul>
            {menu.map((item, i) => {
              if (item.heading)
                return (
                  <li key={i} className={style.heading}>
                    {item.heading}
                  </li>
                )
              if (item.subMenu) {
                return (
                  <li
                    key={i}
                    className={cx(style.subMenu, activeMenu(item.href) ? 'menu-active' : '')}
                  >
                    <SubMenu
                      idx={i}
                      name={item.name}
                      icon={item.icon}
                      href={item.href}
                      menu={item.subMenu}
                      toggle={handleOpenSub}
                      isOpen={openSub === i ? 'open' : 'close'}
                      sidebar={handleScreenMobile}
                    />
                  </li>
                )
              }
              return (
                <li key={i} className={activeMenu(item.href) ? 'menu-active' : ''}>
                  <SingleMenu
                    name={item.name}
                    icon={item.icon}
                    href={item.href}
                    sidebar={handleScreenMobile}
                  />
                </li>
              )
            })}
          </ul>
        </nav>
        {footerName && (
          <footer>
            <div className={style.small}>Logged in as:</div>
            <p>{footerName}</p>
          </footer>
        )}
      </aside>
    </div>
  )
}

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
      }),
      PropTypes.shape({
        icon: PropTypes.element.isRequired,
        name: PropTypes.string.isRequired,
        href: PropTypes.string,
        subMenu: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
          }),
        ),
      }),
    ]),
  ),
  footerName: PropTypes.string,
  showSidebar: PropTypes.bool,
  toggle: PropTypes.func,
  navbar: PropTypes.bool,
  styles: PropTypes.object,
  title: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
  header: PropTypes.bool,
}

Sidebar.defaultProps = {
  menu: [],
}

export default React.memo(Sidebar)
