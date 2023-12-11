import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avatar
        image="https://i.namu.wiki/i/RmvRMOOKwgMXiSuviLLEEqATReBYIBeM_NJCM9fqX4jTDF2HOoBH_51aj1d431FzC4D1EoAPKiy2us2I-faTOdb9jnK-9CXYrkwoaxl91C68Zj3o_D7cow3sCoBJMbvetNetNNXhfmroH6ViFiP9vw.webp"
        isNew={true}
      />
      <Profile
        image="https://i.namu.wiki/i/geGngQMnvmK2g3wuKU4O1uNs8Ix1HXQULk9PrnT57lHOlU4AxL9qsNCYXOOY9DIqPWtXnphq8G6NzCcvzv-ppQ.webp"
        name="치이카와"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://i.namu.wiki/i/Izc2lMHNCH0a7F437hGJ8KhgRzThiUkUX2FoTDKhuCxiFbbtluOQilhuQyb9MN_CI9twAhNceRt1uQ1q0taWwvzfLxF5YBwAF2WzVBOd_cAykCXzeSbNfFwbQp7UiaaddNaY9ZNwuFGilgB5gURKhg.webp"
        name="하치와레"
        title="백엔드 개발자"
      />
      <Profile
        image="https://i.namu.wiki/i/emK1bDZ3d_TmFbO-Z5vmHUubDUQGzWTN_AUr-o4VrwCl24Qj0mK-oJugUPcSH72uw4FhKrIpkkDS7lCnX91GCQlKo3ZjnIRLa7EcsFAfo4AKcHx-qoggjxFoAlsWGPJEWCA7BKdSKgJ5NktOPBK54Q.webp"
        name="우사기"
        title="????"
      />
    </>
  );
}

export default AppProfile;
