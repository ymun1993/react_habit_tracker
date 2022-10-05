import React, { memo } from "react";
// import React, { PureComponent } from "react";

// no need this keyword in function.

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="please type your habit"
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// class HabitAddForm extends PureComponent {
// formRef = React.createRef();
// inputRef = React.createRef();

// onSubmit = (event) => {
//   event.preventDefault();
//   const name = this.inputRef.current.value;
//   name && this.props.onAdd(name);
//   this.formRef.current.reset();
// };

//   render() {
//     console.log("habits");

// return (
//   <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//     <input
//       ref={this.inputRef}
//       type="text"
//       className="add-input"
//       placeholder="please type your habit"
//     ></input>
//     <button className="add-button">Add</button>
//   </form>
// );
//   }
// }

// export default HabitAddForm;
