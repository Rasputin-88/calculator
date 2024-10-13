export default function Btn({click , text , css}) {
    return (
      <button className = {css} onClick = {click}>{text}</button>
    );
  }