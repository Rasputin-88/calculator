import calc from './calcCss/calc.module.css'
import {useState} from 'react'
import InputCheckbox from './inputCheckbox/InputCheckbox.jsx'
import InputRange from './inputRange/InputRange.jsx'
import Header from './header/Header1.jsx'
import Btn from './btn/Btn.jsx'
import {result , /* resProduct , */ Check1 , Check2, Check3 , Check4 , Check5} from './myFunction.js'

export default function Calc(){
    const [data , setData] = useState(1)
    const [power , setPower] = useState(1)
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [ res, setRes] = useState();
    const [gender,setGender]=useState(2);
    // const arrayCheck = [checked1,checked2,checked3 ,checked4 ,checked5]
    const handleChange=(e)=>{setGender( e.target.value);}
  
   
    return(
        <div className={calc.calc}>
            <Header/>
            <h4>Сколько вас ?</h4>
            <div className= {calc.input_wrap}>
                <InputRange 
                className = {calc.input1} 
                value = {data} 
                min= {1} 
                max = {20} 
                step= {1} 
                id= 'number1' 
                onChange = {(e)=>setData(e.target.value)}/>

                <span>{data}</span>
              </div>
              <h4>Что жарим ?</h4>
            <div className={calc.checed} >
            <div className={calc.check_wrap}>
                <InputCheckbox  checked={checked1} onChange={() => setChecked1(!checked1)} defaultChecked/>
                <span  style = {Check1(checked1)}>Свинина</span>
             </div>
             <div className={calc.check_wrap}>
                <InputCheckbox  checked={checked2} onChange={() => setChecked2(!checked2)} />
                <span style = {Check2(checked2)}>Говядина</span>
             </div>
             <div className={calc.check_wrap}>
                <InputCheckbox  checked={checked3} onChange={() => setChecked3(!checked3)} />
                <span style = {Check3(checked3)}>Баранина</span>
             </div>
             <div className={calc.check_wrap}>
                <InputCheckbox  checked={checked4} onChange={() => setChecked4(!checked4)} />
                <span style = {Check4(checked4)}>Курица</span>
             </div>
             <div className={calc.check_wrap}>
                <InputCheckbox  checked={checked5} onChange={() => setChecked5(!checked5)} />
                <span style = {Check5(checked5)}>Овощи</span>
             </div>
            </div>
            <h4>На солько вы голодны ?</h4>
            <div className={calc.input_wrap}>
                <InputRange 
                className = {calc.input1} 
                value = {power}  
                min= {1} 
                max= {3} 
                id= 'number2'
                step= {1}
                onChange = {(e)=>setPower(e.target.value)}/>

                <span>{power}</span>
            </div>
            <h4>Как долго планируете сидеть ?</h4>
        <div className = {calc.radio}>

        <div className = {calc.radio_wrap}>
              <input type="radio" value={1} id="male"
               onChange={handleChange} name="gender" />
             <label for="male">Мы быстро</label>
        </div> 
       <div className = {calc.radio_wrap}>
            <input type="radio" value={2} id="female"
              onChange={handleChange} name="gender" defaultChecked/>
            <label for="female">Нормально посидим</label>
        </div>
        <div className = {calc.radio_wrap}>
            <input type="radio" value={3} id="female"
              onChange={handleChange} name="gender"/>
            <label for="female">Пока мангал не развалится</label>
        </div>
        </div  >
             
           <div className='data'>
           <h4>Общий вес {res} кг.</h4>
           <Btn text = 'Посчитать' click = {(e)=>setRes(result(data ,power,gender))}/>

           {/* <span>Люди {data}</span> */}
           {/* <span>Сила голода{power}</span> */}
           {/* <span>Время {gender}</span> */}
           {/* <span>Результат {res} кг.</span> */}
           {/* <span>Результат 2 {resProduct()} кг.</span> */}
           </div>
           
        </div>
        
    )
}
