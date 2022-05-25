import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import TestingForm from './Pages/TestingForm'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Welcome />}  />
        <Route path={"testingForm"} element={<TestingForm/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/**
 * Story book:
 * npx sb init => install story book
 * npm run storybook => run story book
 * 
 * 
 * Jest enzyme reference
 * https://medium.com/swlh/react-testing-using-jest-along-with-code-coverage-report-7454b5ba0236
 */