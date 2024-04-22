import { useEffect, useRef, useState } from "react";
import pic from "../assets/download-4.jpg";
import pic1 from "../assets/download-5.jpg";
import pic2 from "../assets/react.svg";
import pic3 from "../assets/big-screen.png";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Calculator = () => {
  const [expression, setExpression] = useState<any>();
  const buttonClick = (value: any) => {
    setExpression((el: any) => el + value);
  };

  const calculate = () => {
    setExpression(eval(expression));
  };

  const deleteNum = () => {
    setExpression("");
  };

  const delOne = () => {
    setExpression((el: any) => el.slice(0, -1));
  };

  const percent = () => {
    setExpression(expression / 100);
  };

  const approx = () => {
    setExpression(Math.round(expression));
  };

  const sqrt = () => {
    setExpression(Math.sqrt(expression));
  };
  return (
    <div className="mx-[55px] my-[20px] ">
      <div className="w-[235px] min-h-[320px] border-[0.5px] rounded-[8px]  shadow-[black 20px] border-[black] ">
        <div className="w-full h-[85px]  bg-[#616060]  rounded-t-[8px] p-[13px] flex justify-end pt-[15px] text-[50px] font-[200] text-white">
          {expression}
        </div>
        <div className="w-full min-h-[234px] rounded-b-[8px] bg-gray-500  text-white flex flex-wrap ">
          <div
            className="w-[58.5px] h-[55px] bg-[#706e6e] flex justify-center items-center text-[25px] border-[#424242] border-b-[1px] border-r-[1px]"
            onClick={deleteNum}
          >
            c
          </div>
          <div
            className="w-[58.5px] h-[55px] bg-[#706e6e] flex justify-center items-center text-[18px] border-[#424242] border-b-[1px] border-r-[1px]"
            onClick={delOne}
          >
            del
          </div>
          <div
            className="w-[58.5px] h-[55px] bg-[#706e6e] flex justify-center items-center text-[19px] border-[#424242] border-b-[1px] border-r-[1px]"
            onClick={percent}
          >
            %
          </div>
          <div
            className="w-[58.5px] h-[55px] bg-[orange] flex justify-center items-center text-[25px] border-[#424242] border-b-[1px] border-r-[1px]"
            onClick={() => {
              buttonClick("/");
            }}
          >
            /
          </div>
          {[
            // "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            ".",
          ].map((el: any) => (
            <div
              className="w-[58.5px] h-[46.8px] bg-[#949494] flex justify-center items-center text-[25px] border-[#424242] border-b-[1px] border-r-[1px]"
              onClick={() => {
                buttonClick(el);
              }}
            >
              {el}
            </div>
          ))}
          <div
            className="w-[117px] h-[46.7px] rounded-br-[8px] bg-[orange] flex justify-center items-center text-[25px] border-[#424242] border-b-[1px] border-r-[1px] "
            onClick={calculate}
          >
            =
          </div>
          {/* <div
            className="w-[58.5px] h-[55px] bg-[#706e6e] flex justify-center items-center text-[19px] border-[#424242] border-b-[1px] border-r-[1px]"
            onClick={approx}
          >
            R
          </div>
          <div
            className="w-[58.5px] h-[55px] bg-[#706e6e] flex justify-center items-center text-[19px] border-[#424242] border-b-[1px] border-r-[1px]"
            onClick={sqrt}
          >
            √
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const image = [pic, pic1, pic2, pic3];
  const dot: React.MutableRefObject<any> = useRef();
  const dot1: React.MutableRefObject<any> = useRef();
  const dot2: React.MutableRefObject<any> = useRef();
  const dot3: React.MutableRefObject<any> = useRef();
  const [state, setState] = useState<any>(0);
  const count = () => {
    setState(() => state + 1);
  };

  const removeCount = () => {
    if (state > 0) {
      setState(() => state - 1);
    } else if (state <= 0) {
      setState(image.length - 1);
    }
  };

  let dotColor = ["gray", "white", "white", "white"];
  let dotColor1 = ["white", "gray", "white", "white"];
  let dotColor2 = ["white", "white", "gray", "white"];
  let dotColor3 = ["white", "white", "white", "gray"];
  useEffect(() => {
    dot.current.style.backgroundColor = dotColor[state % dotColor.length];
    dot1.current.style.backgroundColor = dotColor1[state % dotColor.length];
    dot2.current.style.backgroundColor = dotColor2[state % dotColor.length];
    dot3.current.style.backgroundColor = dotColor3[state % dotColor.length];
  });
  useEffect(() => {
    setInterval(() => {
      count();
    }, 3000);
    removeCount();
  }, []);
  return (
    <div className="w-[400px] h-[300px] border">
      <div className="w-[400px] h-[300px] relative">
        <div className="absolute flex justify-between w-full items-center h-full">
          <div className="w-full h-full absolute flex  text-white top-2 left-[45%] ">
            <div className="w-2 h-2 bg-white rounded-full mx-[2px]" ref={dot} />
            <div
              className="w-2 h-2 bg-white rounded-full mx-[2px] "
              ref={dot1}
            />
            <div
              className="w-2 h-2 bg-white rounded-full mx-[2px] "
              ref={dot2}
            />
            <div
              className="w-2 h-2 bg-white rounded-full mx-[2px] "
              ref={dot3}
            />
          </div>
          <div
            className="mr-2 text-[green] text-[20px] w-[50px] h-[50px] hover:rounded-[50%] hover:bg-[#00000057] flex justify-center items-center transition-all duration-300 cursor-pointer"
            onClick={() => {
              removeCount();
              console.log(dotColor2[state]);
            }}
          >
            <FaAngleLeft />
          </div>
          <div
            className="mr-2 text-[green] text-[20px] w-[50px] h-[50px] hover:rounded-[50%] hover:bg-[#00000057] flex justify-center items-center transition-all duration-300 cursor-pointer z-10"
            onClick={() => {
              count();
            }}
          >
            <FaAngleRight />
          </div>
        </div>
        <img
          src={image[state % image.length]}
          alt="img"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </div>
  );
};

export const Multi = () => {
  return (
    <div className="flex justify-around items-center">
      <Calculator />
      {/* <Carousel /> */}
    </div>
  );
};
