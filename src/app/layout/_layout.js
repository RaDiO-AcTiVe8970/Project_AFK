"use client";

import _Header  from "./_header";
import _Footer  from "./_Footer";


export default function _Layout({children}) {
  //  title = props.title;
  return (
    <>
      <_Header/>
      <div className="main">{children}</div>
      <_Footer/>
    </>
  );
}
