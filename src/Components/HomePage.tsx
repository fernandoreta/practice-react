import { useEffect, useRef, useState } from "react";
import { IHomePageProps } from "../IHomePageProps";

export function HomePage (props: IHomePageProps) {
  const newTitle = useRef<HTMLInputElement>(null);

  const handleNewTitle = () => {
    const title = newTitle.current?.value;
    props.changeAppTitleFromHomePage(title);
  }
  
  const [ status, setStatus ] = useState<boolean>(true);

  const changeStatus = (currentStatus: boolean) => currentStatus ? setStatus(true) : setStatus(false);

    return (
        <header className="App-header">
        <button onClick={() => changeStatus(!status)}
        style={{ background: status ? 'blue' : 'red' }}>
          {status ? 'ON': 'OFF'}
        </button>
        <input type="text" ref={newTitle}/>
        <button onClick={() => handleNewTitle()}>
          Change Title From HomePage.
        </button>
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    )
}