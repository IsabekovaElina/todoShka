import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: end;
`;
const Forms = styled.form`
  width: 100%;
  height: 100vh;
  background-image: url(https://www.wallmur.com/media/catalog/pdata/cache/1/crop_image/1100x/040ec0/b/h/vintage-peony-flowers-wallpaper-mural-wm-39597581-41484008.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
const UserInfo = styled.div`
  width: 300px;
  background-color: purple;
  color: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-top: 10px;
  position: relative;
  right: 60px; */
`;
const Button = styled.button`
  background-color: #c12394;
  height: 31px;
  width: 50px;
  border: none;
  border-radius: 0 5px 5px 0;

  position: relative;
  right: 500px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  color: red;
  outline: none;
  border: none;
  border-radius: 5px 0 0 5px;
  position: relative;
  right: 500px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function ToDoForm() {
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState([
    { id: 1, title: "Selena Gomez" },
  ]);

  const ChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {
    if (!value.trim()) return null;

    return (
      setInputValue([
        ...inputValue,
        {
          title: value,
          id: Math.random(),
        },
      ]),
      setValue("")
    );
  };
  const clickDelete = (id) => {
    const deleteItem = inputValue.filter((item) => item.id !== id);
    setInputValue(deleteItem);
  };
  return (
    <Div>
      <Forms onSubmit={submitHandler}>
        <Input type="text" value={value} onChange={ChangeHandler} />
        <Button onClick={clickHandler}>push</Button>

        {/* <div>hello world</div> */}
        <Ul>
          {inputValue.map((el) => (
            <UserInfo key={el.id}>
              <p> {el.title}</p>
              <div>
                <button onClick={() => clickDelete(el.id)}>Х</button>
              </div>
            </UserInfo>
          ))}
        </Ul>
      </Forms>
    </Div>
  );
}

export default ToDoForm;
