// import { compose, pipe } from 'lodash/fp';
import store from './store'
function App() {
  // let input = "Javascript"
  // let output = "<div>"+input.trim()+"</div>"
  // const trim = str => str.trim()
  // const wrap = type=>str => `<${type}>${str}</${type}>`
  // const toLowerCase = str => str.toLowerCase()

  // const transform = pipe(trim,toLowerCase,wrap("div"))
  // transform(input)
  // const person = {
  //   name: "Shallon",
  //   address: {
  //     country: "United States",
  //     city: "New York"
  //   }
  // }
  // const updated = [{
  //   name: "Shallon",
  //   address: {
  //     country: "United States",
  //     city:"New"
  //   }  

  // }]  // console.log(updated)
  // const newPerson = Object.assign({},person,{name: "Shallon",age: 30})
  // console.log(newPerson) // console.log(newPerson)
  const numbers = [1, 2, 3, 4]
  const index = numbers.indexOf(3)
  //adding
  const added = [...numbers.slice(0, index), 15, ...numbers.slice(index)]
  //removing
  const removed = numbers.filter((n) => n != 3)
  //updating
  const update = numbers.map(n => n === 3 ? 30 : n)
  store.dispatch({
    type:"BUG_ADDED",
    payload:{
      description:"First Bug"
    }
  })
  store.dispatch({
    type:"BUG_ADDED",
    payload:{
      description:"Second Bug"
    }
  })
  store.dispatch({
    type:"BUG_REMOVED",
    payload:{
      id:1
    }
  })
  console.log(store.getState())
  return (
    <div >
      {update.map((one, index) => {
        return (
          <div key={index}>
            <h2>{one}</h2>
          </div>
        )
      })}

    </div>
  );
};


export default App;
