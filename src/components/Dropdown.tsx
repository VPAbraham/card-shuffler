import { useState, useEffect } from "react";

type DropdownProps = {
  options: any[],
  label: string,
  stateUpdate: Function
}

const Dropdown = ({ options, label, stateUpdate }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedVal, setSelectedVal] = useState<number>();

  const handleClick = (e: any) => {
    e.preventDefault();
    let newVal = parseInt(e.target.innerText)
    stateUpdate(newVal)
    setSelectedVal(newVal)
    setIsActive(false);
  }

  return (
    <div className={`dropdown ${isActive && 'is-active'}`}>
      <div className='dropdown-trigger' >
        <button className='button is-dark' onClick={(() => setIsActive(!isActive))}>
          <span>{label}</span>
          <span className='icon'>▼</span>
        </button>
      </div>
      <div className='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          {options.map((val) => {
            return (
              <a
                className={`dropdown-item ${val === selectedVal ? 'is-active' : ''}`}
                key={val}
                onClick={handleClick}
              >
                {val}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown;