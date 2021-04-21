import Router from './Router/Router';
import GlobalStateProvider from './Global/GlobalStateProvider'


function App() {
  return (
    <GlobalStateProvider>
      <Router />
    </GlobalStateProvider>
  );
}

export default App;
