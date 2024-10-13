import checkboxCss from './checkBoxCss/checkBox.module.css'

export default function InputCheckbox({checked , onChange}){
    return(
        <input type="checkbox" checked={checked} onChange={onChange} className= {checkboxCss.checkbox}/>
    )
}

