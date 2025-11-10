import { useEffect, useState } from "react"
import TextBox from "./components/TextBox"
import Button from "./components/Button"
import ListItem from "./components/ListItem"

function App() {
  const [todos, setTodos] = useState<any>([])
  const [task, setTask] = useState(0)
  const [error, setError] = useState(false)
  const [total, setTotal] = useState(0);

  const onChangeItem = (e: any) => {
    setTask(e.target.value)
    setError(false)
  }

  const onAddItem = () => {
    if (task == 0) {
      setError(true)
      return
    }
    const oldTodos = [...todos]
    oldTodos.push(task)
    setTodos(oldTodos)
  }

  const removeTodo = (todo: string) => {
    console.log("Clicked on remove - " + todo)
    const oldTodos = [...todos];
    const remainTodos = oldTodos?.filter((item: any) => item !== todo);
    setTodos(remainTodos);
  }

  // const removeTodoIndex = (index: number) => {
  //   console.log("Clicked on remove - " + index)
  //   const oldTodos = [...todos];
  //   oldTodos.splice(index, 1);
  //   setTodos(oldTodos);
  // }

  const calculate = () => {
    // let count = 0;
    // todos.forEach((element: any) => {
    //     count = count + parseFloat(element);
    // });
    const count = todos.reduce((acc: string, value: string) => parseFloat(acc) + parseFloat(value), 0.00);
    setTotal(count);

    todos.map((todo: string, index: number) => {
      console.log(todo);
    });
  }

  useEffect(() => {
    calculate();
  }, [todos]);

  return (
    <div className="flex items-center justify-center">
      <div>
        {error && <div className="text-red-500">Please, Enter a title</div>}
        <TextBox
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={onChangeItem}
        />
        <Button onClick={onAddItem}>Add Item</Button>
        <div>Total : { total }</div>
        <div className="mt-6">
          {todos.length > 0 ? (
            <div>
              {todos.map((todo: string, index: number) => (
                <ListItem key={"list-" + index} removeTodo={removeTodo} todo={todo} />
              ))}  
            </div>
          ) : (
            <div>Oops! there are no tasks</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
