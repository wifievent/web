import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DownloadPage from "./pages/DownloadPage";
import HelpPage from "./pages/HelpPage";
import AdModal from "./components/AdModal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/style.css";

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.sessionStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {
  const [show, setShow] = useStickyState(true, "show");
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  useEffect(() => {
    window.sessionStorage.setItem(show, JSON.stringify(show));
  }, [show]);

  return (
    <BrowserRouter>
      {show && <AdModal show={show} handleClose={handleClose}></AdModal>}
      <Container className="App">
        {console.log(show)}
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/download" component={DownloadPage} />
          <Route exact path="/help" component={HelpPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
