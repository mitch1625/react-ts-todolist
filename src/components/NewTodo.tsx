import React, {useRef} from "react"

type NewtodoProps = {
  onAddTodo: (todoText:string) => void;
}

const NewTodo: React.FC<NewtodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}


export default NewTodo