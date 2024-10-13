import hedCss from './header.module.css'

export default function Header1(){
    return (
      <div className={hedCss.header}>

        <div className={hedCss.header__tytle}>
          <h1 className={hedCss.header__tytle_text}>Шашлычный калькулятор</h1>
        </div>
        
        
      </div>
    );
  }