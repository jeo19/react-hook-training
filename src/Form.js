import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    alert(`${name} (${description})`);
    setName("");
    setDescription("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
