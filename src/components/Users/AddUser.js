import React from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="numbers" />
      <Button type="submit">Add User</Button>
    </form>
    </Card>

  );
};

export default AddUser;
