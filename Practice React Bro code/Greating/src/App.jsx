import UserGreating from './UserGreating';


function App() {

  return (
    <>
      <UserGreating name="John" isLoggedIn={false} />
      <UserGreating name="John" isLoggedIn={true} />
      <UserGreating name={8} isLoggedIn={true} />
    </>
  )
}

export default App
