import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="cont-padding">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/contacts/add" element={<AddContact />} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  element={<EditContact />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;