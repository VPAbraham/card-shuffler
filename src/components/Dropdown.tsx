import { useState, useEffect } from "react";

type DropdownProps = {
  options: any[],
  label: string
}

const Dropdown = ({ options, label }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedVal, setSelectedVal] = useState(1);
  const selectOption = (value: any) => {
    setSelectedVal(value);
    setIsActive(false);
  }
  const handleClick = (event: Event) => {
    const { target } = event;
    target && setSelectedVal(parseInt((target as HTMLButtonElement).value));
  }

  return (
    <div className={`dropdown ${isActive && 'is-active'}`}>
      <div className='dropdown-trigger' onBlur={(() => setIsActive(false))}>
        <button className='button' onClick={(() => setIsActive(!isActive))}>
          <span>{label}</span>
        </button>
      </div>
      <div className='dropdown-menu ' id='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          {options.map((val) => {
            return (
              <a
                href='#'
                className={`dropdown-item ${val == selectedVal && 'is-active'}`}
                key={val}
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