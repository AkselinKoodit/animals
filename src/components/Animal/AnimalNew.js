import React from "react";

const AnimalNew = ({ submit, change }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstname">Name</label>
          <input type="text" name="name" id="name" onChange={change} required />
        </div>
        <div>
          <label htmlFor="decription">Description</label>
          <textarea name="desc" id="desc" onChange={change} required></textarea>
        </div>
        <div>
          <label htmlFor="aclass">Class</label>
          <select name="aclass" id="aclass" onChange={change}>
            <option value="student">Student</option>
            <option value="wizard">Wizard</option>
            <option value="maiden">Maiden in distress</option>
            <option value="loony">Village loony</option>
            <option value="drunkard">Drunkard</option>
            <option value="knight">Valiant knight</option>
            <option value="king">King</option>
            <option value="butcher">Butcher</option>
            <option value="witch">Witch</option>
            <option value="monk">Monk</option>
            <option value="smith">Smith</option>
            <option value="jester">Jester</option>
            <option value="peasant">Peasant</option>
          </select>
        </div>
        <div>
          <label htmlFor="img">Image url</label>
          <input type="text" name="img" id="img" onChange={change} required />
        </div>
        <div>
          <label htmlFor="link">Read more link</label>
          <input type="text" name="link" id="link" onChange={change} required />
        </div>
        <button type="submit">Add animal</button>
      </form>
    </div>
  );
};

export default AnimalNew;
