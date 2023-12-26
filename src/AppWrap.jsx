import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://3.gall-img.com/tdgall/files/attach/images/82/936/687/273/d15ed06d5719ce82ddcfb5cc34bd4be8.jpg"
          name="kani"
          size={200}
        />
        <p>카니쟝</p>
      </Navbar>
      <Navbar>
        <p>카니쨩은 기여웡</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "pink" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
