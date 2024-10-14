import "./App.css";

const App = () => {
  const today = new Date();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const formattedDate = formatDate(today);
  return (
    <div className="max-w-lg mx-auto ">
      <div className="mockup-browser bg-pink-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input text-gray-500">https://○○○○_profile.com</div>
        </div>
        <div className="text-right pr-1">
          <a className="link link-warning text-yellow-400">[前略プロフ]</a>
          <p className="text-black">最終更新日：{formattedDate}</p>
        </div>
        <div className="header-wrap text-center w-4/5 mx-auto">
          <h1>○○○○のプロフィール</h1>
        </div>
        <div className="avatar m-6">
          <div className="w-24 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="text-left w-3/5 mx-auto">
          <p className="header-wrap">&nbsp;HN</p>
          <div className="py-2">
            <p>ああああああああ</p>
          </div>
          <p className="header-wrap">&nbsp;HNの由来</p>
          <div className="py-2">
            <p>ああああああ</p>
          </div>
          <p className="header-wrap">&nbsp;住んでいるところ</p>
          <div className="py-2">
            <p>ああああああ</p>
          </div>
          <p className="header-wrap">&nbsp;職業</p>
          <div className="py-2">
            <p>ああああああ</p>
          </div>
          <p className="header-wrap">&nbsp;学年</p>
          <div className="py-2">
            <p>ああああああ</p>
          </div>
          <p className="header-wrap">&nbsp; 絡むーちょ</p>
          <div className="py-2">
            <p>ああああああ</p>
          </div>
          <p className="header-wrap">&nbsp;ﾘｱﾙﾀｲﾑﾌﾞﾛｸﾞ</p>
          <div className="py-2 text-right">
            <a className="link link-warning text-yellow-400">SNLのりぁる★</a>
          </div>
          <p className="header-wrap">&nbsp;ｱﾙﾊﾞﾑ</p>
          <div className="py-2 text-right">
            <a className="link link-warning text-yellow-400">SNLのぉもぃτ〃</a>
          </div>
          <p className="header-wrap">&nbsp;ｹﾞｽﾄﾌﾞｯｸ</p>
          <div className="py-2">
            <a className="link link-warning text-yellow-400">
              掲示板★ヵ≠⊃∪τね～
            </a>
          </div>
        </div>
        <div className="border-b-4 w-2/3 mx-auto"></div>
        <div className="m-1">
          <a className="link link-warning text-yellow-400">友達にした</a>
          <span className="text-yellow-400">/</span>
          <a className="link link-warning text-yellow-400">された</a>
        </div>
        <div className="border-b-4 w-2/3 mx-auto"></div>
        <a className="link link-warning text-yellow-400">他のﾌﾟﾛﾌも見る！</a>
        <div className="m-6"></div>
      </div>
    </div>
  );
};

export default App;
