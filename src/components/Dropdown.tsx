import { useState } from "react";
const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`dropdown ${isActive && 'is-active'}`}>
      <div className="dropdown-trigger">
        <button className="button" onClick={(() => setIsActive(!isActive))}>
          <span>label</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Dropdown item
          </a>
          <a className="dropdown-item">
            Other dropdown item
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;