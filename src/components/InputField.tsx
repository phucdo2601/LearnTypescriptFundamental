import React from 'react'
import '../styles/InputField.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddNew: (e: React.SyntheticEvent) => void;
}

// const InputField = ({todo, setTodo}: Props) => {
//   return (
//     <>
//         <form className="input">
//             <input type="input" placeholder="Enter a task" className="input_box" />
//             <button className="input_submit" type="submit">Go</button>
//         </form>
//     </>
//   )
// }

/**
 * Mot cach truyen prop khac trong reactjs
 */
const InputField: React.FC<Props> = ({ todo, setTodo, handleAddNew }: Props) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <>
            <form
                className="input"
                onSubmit={
                    (e) => {
                        handleAddNew(e)
                        inputRef.current?.blur()
                    }
                }>
                <input
                    type="input"
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter a task"
                    className="input_box"
                />
                <button className="input_submit" type="submit">Go</button>
            </form>
        </>
    )
}

export default InputField