import { useEffect, useRef, useState } from "react";
// import { fabric } from "fabric";
import iconSign from "../../assets/icon-sign.svg";
import iconUpload from "../../assets/icon-upload.svg";
import iconClear from "../../assets/icon-clear.svg";

export default function SignModal() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasWidth = 700;
    const canvasHeight = 250;
    /* double pixel density for higher screen density  */
    canvas.width = canvasWidth * 2;
    canvas.height = canvasHeight * 2;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctxRef.current = ctx;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#f1f2f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section className="w-screen h-screen bg-black/50 fixed inset-0 z-50">
      <div className="border border-[#bfbfbf] bg-white absolute top-[12.5%] left-[12.5%]">
        <ul className="flex relative">
          <li className="py-6 basis-1/2 flex justify-center items-center border-b border-[#bfbfbf] cursor-pointer hover:after:w-1/2 hover:after:h-1 hover:after:bg-blue hover:bg-blue-light after:absolute after:bottom-0">
            <img src={iconSign} alt="icon-sign" className="w-7.5 h-7.5" />
            <span className="font-medium ml-12">繪製</span>
          </li>
          <li className="py-6 basis-1/2 flex justify-center items-center border-b border-[#bfbfbf] cursor-pointer hover:after:w-1/2 hover:after:h-1 hover:after:bg-blue hover:bg-blue-light after:absolute after:bottom-0">
            <img src={iconUpload} alt="icon-upload" className="w-7.5 h-7.5" />
            <span className="font-medium ml-12">上傳簽名</span>
          </li>
        </ul>
        <div className="px-16 py-10">
          <h2 className="text-black font-medium pb-4">請在框內簽署</h2>
          <canvas
            ref={canvasRef}
            className="bg-gray-1 rounded-lg"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
          />
          <div className="w-full flex justify-between items-center mt-6">
            <div className="flex justify-evenly gap-x-7 items-center">
              <button
                type="button"
                className="flex items-center gap-x-2.5 disabled:text-gray-3 text-black"
                onClick={clearCanvas}
              >
                清除
                <img src={iconClear} alt="icon-clear" className="w-7.5 h-7.5" />
              </button>
              <div className="w-5 h-5 p-2.5 bg-black rounded-full cursor-pointer relative after:absolute after:-bottom-1/4 after:-right-1/4 after:w-7.5 after:h-7.5 after:bg-transparent after:border after:border-black after:border-solid after:rounded-full" />
              <div className="w-5 h-5 p-2.5 bg-blue rounded-full cursor-pointer" />
              <div className="w-5 h-5 p-2.5 bg-red rounded-full cursor-pointer" />
            </div>
            <div className="grid grid-cols-2 gap-x-7">
              <button
                type="button"
                className="bg-white hover:bg-gray-5 hover:text-white text-inherit border border-gray-3 border-solid rounded-30 px-8 py-3"
              >
                取消
              </button>
              <button
                type="button"
                className="disabled:bg-gray-3 disabled:text-white bg-blue text-white hover:bg-blue-dark rounded-30 px-8 py-3"
              >
                建立簽名
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
