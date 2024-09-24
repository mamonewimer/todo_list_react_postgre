import React,{Fragment} from 'react';

//components
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <Fragment>
      <div className='container' >
              <InputTodo/>
              <ListTodo/>

      </div>
    </Fragment>
  );
}

export default App;
