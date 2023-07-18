import { Fragment,  useState } from "react";
import TodoList from "./assets/component/TodoList";


const App = () => {

        // const [fromobj, setfromobj] = useState({

        //   fname: "",
        //   lname: "",
        //   age : 20,
        //   gender:"Female",
        //   city: ""
        // })

        // const inputonchange = (property, value)=>{

        //     setfromobj(prevObj=>({
        //       ...prevObj,
        //       [property]:value
        //     }))
        // }

        // const fromsubmit = (e)=>{
        //     e.preventDefault();  
              
        //     alert(JSON.stringify(fromobj)); 

        //        }

        
              


     return(
       <Fragment>
             {/* <from onSubmit={fromsubmit}>
               <input onChange={(e)=>{inputonchange("fname",e.target.value)}} value={fromobj.fname} type="text"  placeholder="Fname"></input>
               <input onChange={(e)=>{inputonchange("lname",e.target.value)}} value={fromobj.lname} type="text"  placeholder="Lname"></input>
              <select onChange={(e)=>{inputonchange("city",e.target.value)}} value={fromobj.city}>
                <option value="">city</option>
                <option value="Dakah">Dakah</option>
                <option value="Rangpur">Rangpur</option>
              </select>
              <br/>

                <input onChange={()=>{inputonchange("gender", 'Male')}} checked={fromobj.gender==="Male"} type="radio" name="gender"/>Male
                 <input onChange={()=>{inputonchange("gender", "Female")}} checked={fromobj.gender==="Female"} type="radio" name="gender"/>FeMale
              
              <br/>
                 <button onClick={fromsubmit} type="button">Sumbit</button> */}

               
          {/* </from> */}
          
                <TodoList/>
                
      </Fragment>
     )

        

};

export default App;
