import InputCheckbox from "./inputCheckbox/InputCheckbox";
import { useState } from "react";
const arryTest = [
    {id:'1',value:'Свинина'},
    {id:'2',value:'Говядина'},
    {id:'3',value:'Баранина'},
    {id:'4',value:'Курица'},
    {id:'5',value:'Овощи'},
]
const style ={
    color:'black',
}
console.log(arryTest);
console.log(arryTest.length);




export default function Test(){
    const [checked, setChecked] = useState(false);
    /* const arr = arryTest.filter((item)=>{
        if(checked === true){
            return  console.log(setChecked(item.id));
        }
    }) */

   // console.log(setChecked);
   { arryTest.map((item)=>{
    return <div className="check" key = {item.id}>
       <InputCheckbox  id = {item.id}  value = {item.value} onChange={(e) => this.setChecked(!checked)}/>
       <span >{item.value}</span>
    </div>
   })}
    return(
<div>
  
</div>
    )
}