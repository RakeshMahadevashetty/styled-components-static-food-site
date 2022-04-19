import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Welcome />}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
