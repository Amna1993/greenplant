import React, { useState } from "react";

const DropdownMenu = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="group">
      <button
        onClick={() => setOpen(!open)}
        className="inline-block uppercase pb-2 relative"
      >
        {title}
      </button>
      {open && <ul className="absolute bg-white shadow-md">{children}</ul>}
    </div>
  );
};

export default DropdownMenu;
