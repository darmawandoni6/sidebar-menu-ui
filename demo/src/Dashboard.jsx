import React from 'react'
import { useSidebar } from 'sidebar-menu-ui'

const Dashboard = () => {
  const { setProvider } = useSidebar()

  const handleClick = () => {
    setProvider()
  }
  return (
    <div>
      <button onClick={handleClick}>toogle</button>

      {Array(100)
        .fill()
        .map((_, i) => (
          <div key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore eaque optio harum dolor
            exercitationem aspernatur rem iste sapiente rerum labore quia laboriosam, quo sint dolorum minima.
            Excepturi, ex perspiciatis!
          </div>
        ))}
    </div>
  )
}

export default Dashboard
