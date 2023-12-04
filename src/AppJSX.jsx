import "./App.css";

function AppJSX() {
  const name = "후와고";
  const list = ["우유", "딸기", "바나나", "우유"];
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>{`ㅎㅇㅎㅇ ${name}`}</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://media.bunjang.co.kr/product/236761837_1_1695037402_w180.jpg"
        alt="nature"
      />
    </>
  );
}

export default AppJSX;
