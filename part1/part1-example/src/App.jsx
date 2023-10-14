import { useState } from "react"

const Display = ({ counter }) => {
  return (
    <div>
      {counter}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>      
  ) 
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => {
    console.log(counter)
    return setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log(counter)
    return setCounter(counter - 1)
  }

  const resetToZero = () => {
    console.log(counter)
    return setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={decreaseByOne} text='minus' />
      <Button handleClick={resetToZero} text='zero' />
    </div>
  )
}

export default App