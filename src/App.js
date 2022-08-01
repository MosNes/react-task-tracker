//root component, inserted into the div with the id of root in the index.html file
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      {/* header component from compontents/header.js */}
      <Header />
    </div>
  );
}

export default App;
