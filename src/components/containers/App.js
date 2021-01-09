import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Wrapper from '../Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
