import { useState, useEffect } from "react";

type DropdownProps = {
  options: any[],
  label: string,
  stateUpdate: Function
}

const Dropdown = ({ options, label, stateUpdate }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedVal, setSelectedVal] = useState();
  const selectOption = (value: any) => {
    setSelectedVal(value);
    setIsActive(false);
    console.log(selectedVal)
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.innerHTML)
    stateUpdate(e.target.innerHTML)
    setIsActive(false);
    // const { target } = event;
    // const output = (target as HTMLButtonElement).getAttribute('value');
    // console.log("output", output)
    // target && setSelectedVal(parseInt((target as HTMLButtonElement).value));
  }

  return (
    <div className={`dropdown ${isActive && 'is-active'}`}>
      <div className='dropdown-trigger' >
        <button className='button' onClick={(() => setIsActive(!isActive))}>
          <span>{label}</span>
        </button>
      </div>
      <div className='dropdown-menu ' id='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          {options.map((val) => {
            return (
              <button
                className={`dropdown-item ${val === selectedVal ? 'is-active' : ''}`}
                key={val}
                onClick={handleClick}
              >
                {val}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown;