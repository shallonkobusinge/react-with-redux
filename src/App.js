import { compose, pipe } from 'lodash/fp';
function App() {
  // let input = "Javascript"
  // let output = "<div>"+input.trim()+"</div>"
  // const trim = str => str.trim()
  // const wrap = type=>str => `<${type}>${str}</${type}>`
  // const toLowerCase = str => str.toLowerCase()

  // const transform = pipe(trim,toLowerCase,wrap("div"))
  // transform(input)
  const person = {
    name: "Shallon",
    address: {
      country: "United States",
      city: "New York"
    }
  }
  const updated = [{
    name: "Shallon",
    address: {
      country: "United States",
      city: "New York"
    }  
  
  }]  // console.log(updated)
  return (
    <div >
      {updated.map((one,index) => {
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
