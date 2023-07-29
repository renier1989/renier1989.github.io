import React from "react";

function Layout({children}) {
  return (
    <div className={`w-full overflow-hidden overflow-x-hidden font-poppins`}>
      {children}
    </div>
  );
}

export { Layout };
