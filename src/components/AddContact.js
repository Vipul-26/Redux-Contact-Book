import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../actions";
import shortid from "shortid";
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
    history('/');
  };

  return (
    <div className="card border-0 shadow card-width">
      <div className="card-header">
        Add a Contact
      </div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
