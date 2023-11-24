import ErrorBoundary from "./Components/ErrorBoundary";
import List from "./Components/List";
function App() {
  return(
    <ErrorBoundary>
      <List />
    </ErrorBoundary>
  )
}

export default App;