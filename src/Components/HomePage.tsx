export function HomePage (props: any) {
    props.onPropFromChild('I am Comming from Homepage Component');
    return (
        <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}