import List from "./list.jsx";
function App() {
  const fruits=[{ id:1,name:"apple" ,calories:100},
    {id:2,name:"banna",calories:150},
    {id:3,name:"Pineapple",calories:200},
    {id:4,name:"jackFruite",calories:250},
    {id:5,name:"orange",calories:300},
    {id:6,name:"mango",calories:350},
    {id:7,name:"grapes",calories:400},
    {id:8,name:"tobarrwy",calories:450}];

  return (
    <>
      <List items={fruits}/>
    </>
  )
}

export default App
