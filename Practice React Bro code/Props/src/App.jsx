import Student from './Student.jsx';

function App() {
  return (
    <>
    
    <Student name="John" age={19} isStudent={true} />
    <Student name="Jane" age={20} isStudent={false} />
    <Student />
    </>
  )
}

export default App;
