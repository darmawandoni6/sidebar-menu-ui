import React from 'react'
import PropTypes from 'prop-types'

export const ContextSidebar = React.createContext()

const SidebarProvider = ({ children }) => {
  const [vProvide, setProvider] = React.useState({ show: true })

  const handleProvider = React.useCallback(() => {
    setProvider((prev) => {
      var screen = window.matchMedia('(max-width: 768px)')
      if (screen.matches) {
        const element = document.getElementById('back-drop')
        element.style.display = !prev.show ? 'block' : 'none'
      }
      return { ...prev, show: !prev.show }
    })
  }, [])
  return (
    <ContextSidebar.Provider value={{ vProvide, setProvider: () => handleProvider() }}>
      {children}
    </ContextSidebar.Provider>
  )
}
SidebarProvider.propTypes = {
  children: PropTypes.element,
}
export default SidebarProvider

export const useSidebar = () => React.useContext(ContextSidebar)
