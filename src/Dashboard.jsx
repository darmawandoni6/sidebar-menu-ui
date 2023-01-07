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

      {Array(100)
        .fill()
        .map((_, i) => (
          <div key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore eaque
            optio harum dolor exercitationem aspernatur rem iste sapiente rerum labore quia
            laboriosam, quo sint dolorum minima. Excepturi, ex perspiciatis!
          </div>
        ))}
    </div>
  )
}

export default Dashboard
