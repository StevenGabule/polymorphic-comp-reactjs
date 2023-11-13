import { useState, useRef } from 'react'
import './App.css'
import { TestText, Text } from './components'


const Emphasis = ({children} : {children: React.ReactNode}) => {
  return (
    <em style={{background: 'yellow', color: 'black'}}>{children}</em>
  ) 
}

function App() {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const ref2 = useRef<HTMLHeadingElement | null>(null)
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TestText as='h5' ref={ref2}>Hello World</TestText>
        <Text as={Emphasis}>Hello World</Text>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
