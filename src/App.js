import {compose, pipe} from 'lodash/fp';
function App() {
  let input = "Javascript"
  let output = "<div>"+input.trim()+"</div>"
  const trim = str => str.trim()
  const wrap = type=>str => `<${type}>${str}</${type}>`
  const toLowerCase = str => str.toLowerCase()

  const transform = pipe(trim,toLowerCase,wrap("div"))
  transform(input)
  return (
      <div>
        <h2>{transform(input)}</h2>
      </div>
    );
};


export default App;
