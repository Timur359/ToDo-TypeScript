import React from 'react';

interface TodoFormProps {
 onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
 const ref = React.useRef<HTMLInputElement>(null);

 const keyPressHandler = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter') {
   props.onAdd(ref.current!.value);
   ref.current!.value = '';
  }
 };

 return (
  <div className="input-field mt2">
   <input
    ref={ref}
    type="text"
    placeholder="Введите название дела"
    onKeyPress={keyPressHandler}
   />
   <label htmlFor="title" className="active">
    Введи названия дела
   </label>
  </div>
 );
};
