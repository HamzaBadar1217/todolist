import "./App.css";
import { useState } from "react";

let item = [];

function App() {
  const [todoList, setTodoList] = useState("");
  const [list, setList] = useState("");

  function formChanges(event) {
    setList(event.target.value);
  }

  function storeList(event) {
    event.preventDefault();
    item.push(list);
    setTodoList([...item]);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="listContainer">
            <div className="todoListMain">
              <div className="header">
                <form className="d-flex justify-content-between align-items-center">
                  <div class="">
                    <input
                      type="text"
                      class="form-control"
                      id="todoList"
                      placeholder="enter task"
                      onChange={formChanges}
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={storeList}
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
        <div className="mt-5">
              <ul>
              <>
                    {todoList.length > 0 &&
                      todoList.map((data) => (
                        <>
                          <li className="text-white listings mb-4">
                            <h4 className="mx-4">{data}</h4>
                          </li>
                        </>
                      ))}
                  </>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
