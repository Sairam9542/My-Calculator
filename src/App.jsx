import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value}/>
          </div>
          <div>
            <input type='button' className='delete' value="AC" onClick={e => setValue('')} />
            <input type='button' className='delete' value="DE" onClick={e => setValue(value.slice(0, -1))} />
            <input type='button' className='delete' value="." onClick={e =>setValue(value + e.target.value)} />
            <input type='button' className='maths' value="/" onClick={e =>setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value="7" className='number' onClick={e =>setValue(value + e.target.value)}/>
            <input type='button' value="8" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' value="9" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' className='maths' value="*" onClick={e =>setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value="4" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' value="5" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' value="6" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' className='maths' value="+" onClick={e =>setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value="1" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' value="2" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' value="3" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' className='maths' value="-" onClick={e =>setValue(value + e.target.value)} />
          </div>
          <div>
            <input type='button' value="00" className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' value="0"  className='number' onClick={e =>setValue(value + e.target.value)} />
            <input type='button' className='equal' value="=" onClick={e => setValue(eval(value))} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
