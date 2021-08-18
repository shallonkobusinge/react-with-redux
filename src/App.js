import {compose, pipe} from 'lodash';
function App() {
  let input = "Javascript"
  let output = "<div>"+input.trim()+"</div>"
  const trim = str => str.trim()
  const wrapInDiv = str => `<div>${str}</div>`
  const toLowerCase = str => str.toLowerCase()

  const transform = pipe(trim,toLowerCase,wrapInDiv)
  transform(input)
  return (
      <div>
        
      </div>
    );
};


export default App;
