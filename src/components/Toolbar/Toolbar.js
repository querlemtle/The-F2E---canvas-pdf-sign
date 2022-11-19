import iconSign from "../../assets/icon-sign.svg";
import iconSeal from "../../assets/icon-seal.svg";
import iconText from "../../assets/icon-text.svg";
import iconDate from "../../assets/icon-date.svg";
import iconCheck from "../../assets/icon-check.svg";

export default function Toolbar() {
  return (
    <ul className="flex flex-col gap-y-5 bg-white p-5 basis-1/4">
      <li className="p-4 rounded-5 border border-gray-3 border-solid border-l-5 border-l-gray-5 hover:border-l-blue hover:shadow-s flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2.5">
          <img src={iconSign} alt="icon-sign" />
          <span>您的簽名</span>
        </div>
        <span className="text-gray-4">新增</span>
      </li>
      <li className="p-4 rounded-5 border border-gray-3 border-solid border-l-5 border-l-gray-5 hover:border-l-blue hover:shadow-s flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2.5">
          <img src={iconSeal} alt="icon-seal" />
          <span>您的圖章</span>
        </div>
        <span className="text-gray-4">新增</span>
      </li>
      <li className="p-4 rounded-5 border border-gray-3 border-solid border-l-5 border-l-gray-5 flex hover:border-l-blue hover:shadow-s justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2.5">
          <img src={iconText} alt="icon-text" />
          <span>文字輸入</span>
        </div>
      </li>
      <li className="p-4 rounded-5 border border-gray-3 border-solid border-l-5 border-l-gray-5 hover:border-l-blue hover:shadow-s flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2.5">
          <img src={iconDate} alt="icon-date" />
          <span>日期欄位</span>
        </div>
      </li>
      <li className="p-4 rounded-5 border border-gray-3 border-solid border-l-5 border-l-gray-5 hover:border-l-blue hover:shadow-s flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-x-2.5">
          <img src={iconCheck} alt="icon-check" />
          <span>核取方塊</span>
        </div>
      </li>
    </ul>
  );
}
