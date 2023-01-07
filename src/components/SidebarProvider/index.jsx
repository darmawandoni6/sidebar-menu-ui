import React from 'react'
import PropTypes from 'prop-types'

export const ContextSidebar = React.createContext()

const SidebarProvider = ({ children }) => {
  const [vProvide, setProvider] = React.useState({ show: true })

  return (
    <ContextSidebar.Provider value={{ vProvide, setProvider }}>{children}</ContextSidebar.Provider>
  )
}
SidebarProvider.propTypes = {
  children: PropTypes.element,
}
export default SidebarProvider

export const useSidebar = () => React.useContext(ContextSidebar)
