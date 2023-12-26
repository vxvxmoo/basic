import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>

      <Card>
        <article>
          <img
            src="https://dcimg4.dcinside.co.kr/viewimage.php?id=23b2de21e1d335a161b2&no=24b0d769e1d32ca73dea8efa11d02831c5a13172a783ed9d276af118494d34b2e1ca8d5063d91997ddc7b9c0731685557b72f4c20cbc3771f05dece70be859342bbec63a4445faaa1d35e706155cd84bf08eee33d7e2123e"
            height="200"
            width="200"
          />
        </article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
