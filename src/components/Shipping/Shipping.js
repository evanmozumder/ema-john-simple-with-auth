import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const [user] = useAuthState(auth);
  console.log(user);

  const email = user?.email;
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleShippingForm = (e) => {
    e.preventDefault();
    const shipping = {
      name,
      email,
      address,
      phone,
    };
    console.log(shipping);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleShippingForm}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleName} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddress}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlePhone}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            // onChange={() => handleCreateUser()}
            className="form-submit"
            type="submit"
            value="Add Shipping"
          />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
