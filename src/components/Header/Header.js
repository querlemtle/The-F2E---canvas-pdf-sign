import logo from "../../assets/logo.svg";
import iconBack from "../../assets/icon-back-1.svg";

export default function Header() {
  return (
    <header className="py-3.5 w-full h-1/6 bg-gray-1">
      <div className="mx-auto w-11/12 flex justify-between">
        <img src={logo} alt="logo" className="w-2/12" />
        <button
          type="button"
          className="bg-white hover:bg-gray-5 hover:text-white text-inherit border border-gray-3 border-solid rounded-30 px-8 py-3 flex items-center gap-x-3"
        >
          <img src={iconBack} alt="icon-back" className="w-7" />
          重新選取文件
        </button>
      </div>
    </header>
  );
}
