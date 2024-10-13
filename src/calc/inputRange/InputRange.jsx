
import rangeCss from './rangeCss/range.module.css'

export default function InputRange({value , min , max , step , id  , onChange }){
    return (
        <input 
        className= {rangeCss.range}
        type = 'range'
        value = {value} 
        min= {min} 
        max= {max} 
        id= {id} 
        step= {step} 
        onChange = {onChange}
        />
    )
}