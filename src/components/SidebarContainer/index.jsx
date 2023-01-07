import React from 'react'
import NavbarHeader from '../NavbarHeader'
import style from './styles.module.scss'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'
import cx from 'classnames'
import { ContextSidebar } from '../SidebarProvider'

const SidebarContainer = ({ children, title, menu, navbar, navbarRight }) => {
  const { vProvide, setProvider } = React.useContext(ContextSidebar)

  const toggle = React.useCallback(() => {
    setProvider()
  }, [])

  return (
    <div className={cx(style.main, 'main-sidebar-container')} style={navbar ? {} : { paddingTop: 0 }}>
      {navbar && (
        <NavbarHeader
          title={title}
          toggle={() => setProvider((prev) => ({ ...prev, show: !prev.show }))}
          navbarRight={navbarRight}
        />
      )}
      <Sidebar
        header={!navbar}
        title={title}
        menu={menu}
        footerName="Start Bootstrap"
        showSidebar={vProvide.show}
        toggle={toggle}
      />
      <section className={cx(style.content, !vProvide.show ? 'full-content' : '')}>{children}</section>
      <div id="back-drop" className={style.backDrop} onClick={toggle}>
        {' '}
      </div>
    </div>
  )
}

SidebarContainer.propTypes = {
  children: PropTypes.element,
  title: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      name: PropTypes.string,
      href: PropTypes.string,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  navbar: PropTypes.bool,
  toggle: PropTypes.func,
  navbarRight: PropTypes.element,
}
export default React.memo(SidebarContainer)
