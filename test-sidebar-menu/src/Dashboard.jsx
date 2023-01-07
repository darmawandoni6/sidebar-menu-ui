import React from 'react'
import { ContextSidebar } from './components/SidebarProvider'

const Dashboard = () => {
  const { setProvider } = React.useContext(ContextSidebar)
  const handleClick = () => {
    setProvider((prev) => ({ ...prev, show: !prev.show }))
  }
  return (
    <div>
      <button onClick={handleClick}>toogle</button>
    </div>
  )
}

export default Dashboard
