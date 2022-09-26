import "./styles.css";
import { ErrorBoundary } from "react-error-boundary";

function City({ name }) {
  return <div>Hi,Welcome to {name.toUpperCase()}</div>;
}

function Country({ name }) {
  return <div>Hi Welcome to Country {name.toUpperCase()}</div>;
}

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <pre>An error has occured</pre>
      <p>{error.message}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <City />
        <Country />
      </ErrorBoundary>
    </div>
  );
}
