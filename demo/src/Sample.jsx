import React from 'react'
import { SidebarContainer, SidebarProvider, useSidebar } from 'sidebar-menu-ui'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './Dashboard'

const menu = [
  {
    heading: 'Core',
  },
  {
    icon: <i className="fas fa-tachometer-alt"></i>,
    name: 'Dashboard',
    href: '/dashboard',
  },
]

const Test = () => {
  const { pathname } = useLocation()
  const { setProvider } = useSidebar()
  const handleClick = () => {
    setProvider((prev) => ({ ...prev, show: !prev.show }))
  }
  return (
    <>
      <h1>Location : {pathname}</h1>
      <button onClick={handleClick}>toogle</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolorem odit nemo aperiam soluta facilis
        molestias sit. Voluptatum magni, ipsam quod ex similique voluptate! Laboriosam accusamus asperiores accusantium
        inventore quasi.
      </p>
    </>
  )
}
const Sample = () => {
  const [dummy, setDummy] = React.useState([])

  React.useEffect(() => {
    const x = menu
    for (let index = 1; index < 20; index++) {
      if (index % 4 === 0) x.push({ heading: `Layout Core ${index / 4}` })
      x.push({
        icon: <i className="fas fa-columns"></i>,
        name: `Layout ${index}`,
        href: `/layout-${index}`,
        subMenu: [
          {
            name: 'Menu 1',
            href: '/menu-1',
          },
          {
            name: 'Menu 2',
            href: '/menu-2',
          },
        ],
      })
    }
    setDummy(x)
  }, [])

  return (
    <SidebarProvider>
      <SidebarContainer
        title={{ name: 'hello world', href: '/dashboard' }}
        menu={dummy}
        navbar
        navbarRight={<>lorem ipsum</>}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Test />} />
        </Routes>
      </SidebarContainer>
    </SidebarProvider>
  )
}

export default Sample
