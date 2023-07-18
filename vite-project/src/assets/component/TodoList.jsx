import { useState } from "react";



const TodoList = () => {

    const [List,setList]= useState([])
const [item,setItem]= useState(" ")


            const addList = ()=>{

                List.push(item)
                setList([...List])
            }

            const removeItem = (index)=>{
                    List.splice(index, 1)
                    setList([...List])
            }
    return (
        <div className="container">
                
                <input onChange={(e)=>setItem(e.target.value)} placeholder="Enter your nae"></input>
                <button onClick={addList}>add</button>
               
                    <table>
                        <tbody>
                                {
                                    List.length!==0?(

                                        List.map((element,index)=>{
                                            return(
                                                <tr>
                                                    <td>{element}</td>
                                                    <td><button onClick={()=>{
                                                        removeItem(index);
                                                    }}>
                                                    
                                                    Remove</button></td>

                                                </tr>
                                            )
                                        })

                                        ):(<tr></tr>)
                                }
                        </tbody>
                    </table>
              
        </div>
    );
};

export default TodoList;