
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a title='github repo' href='https://github.com/mluukai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = ['Peter', 'Maya']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App

//the file App.jsx deinfes a react component with the name App.
//first rule of frontend - keep the console open all the time
//it is possible to render dynamic content inside a component

