import React, { useState, useEffect } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, updateUserStart } from "../redux/actions";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const { name, email, phone, address } = formValue;
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({...initialState})
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        toast.success("User Added Succesfully");
        setTimeout(() => history.push("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        toast.success("User Updated Succesfully");
        setTimeout(() => history.push("/"), 500);
      }
    }
  };

  const onChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {!editMode ? "Add New User" : "Update User Detail"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBValidationItem feedback="Please provide a valid name." invalid>
          <MDBInput
            // value={formValue.name}
            value={name || ""}
            name="name"
            type="text"
            onChange={onChange}
            id="validationCustom03"
            required
            label="Name"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a valid email." invalid>
          <MDBInput
            // value={formValue.email}
            value={email || ""}
            name="email"
            type="email"
            onChange={onChange}
            id="validationCustom05"
            required
            label="email"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem
          feedback="Please provide a valid phone Number."
          invalid
        >
          <MDBInput
            // value={formValue.phone}
            value={phone || ""}
            name="phone"
            type="number"
            onChange={onChange}
            id="validationCustom03"
            required
            label="Phone"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a valid Address." invalid>
          <MDBInput
            // value={formValue.address}
            value={address || ""}
            name="address"
            onChange={onChange}
            id="validationCustom05"
            required
            label="Address"
          />
        </MDBValidationItem>
        <br />

        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? "Add" : "Update"}
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
