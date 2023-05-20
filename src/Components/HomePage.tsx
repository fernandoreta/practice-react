import { useState } from "react";

export function HomePage (props: any) {
  
  const [ status, setStatus ] = useState<boolean>(true);

  const changeStatus = (currentStatus: boolean) => currentStatus ? setStatus(true) : setStatus(false);

  const changeAppTitleFromHomePage = () => {
    props.changeAppTitleFromHomePage();
  };

    return (
        <header className="App-header">
        <button onClick={() => changeStatus(!status)}
        style={{ background: status ? 'blue' : 'red' }}>
          {status ? 'ON': 'OFF'}
        </button>
        <input type="text" />
        <button onClick={() => changeAppTitleFromHomePage()}>
          Change Title From App.
        </button>
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    )
}