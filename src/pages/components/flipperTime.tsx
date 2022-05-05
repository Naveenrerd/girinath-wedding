/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./flipperTime.styles.css";

export interface INumberBlock {
  blockNum: number;
  currentNum: number;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getNumBlockClass = ({ blockNum, currentNum }: INumberBlock) => {
  if (blockNum === currentNum) return "active";
  if (blockNum === currentNum + 1 || (blockNum === 0 && currentNum === 9))
    return "before";
  return "";
};

const NumberBlock: React.FC<INumberBlock> = ({ blockNum, currentNum }) => (
  <li className={getNumBlockClass({ blockNum, currentNum })}>
    <a href="#">
      <div className="up">
        <div className="shadow"></div>
        <div className="inn">{blockNum}</div>
      </div>
      <div className="down">
        <div className="shadow"></div>
        <div className="inn">{blockNum}</div>
      </div>
    </a>
  </li>
);

const NumberSection: React.FC<{ currentNum: number }> = ({ currentNum }) => (
  <ul className="flip">
    {numbers.map((blockNum) => (
      <NumberBlock key={blockNum} blockNum={blockNum} currentNum={currentNum} />
    ))}
  </ul>
);

const FlipperTime: React.FC<{ time: number }> = ({ time }) => {
  const [allDigits, setAllDigits] = useState<number[]>([]);

  useEffect(() => {
    const timeString = time.toString();
    // setAllDigits([2, 1]);
    setAllDigits(timeString.split("").map((val) => parseInt(val, 10)));

    return () => {
      setAllDigits([]);
    };
  }, [time]);

  return (
    <div className="container">
      {allDigits.length === 1 && (
        <NumberSection currentNum={0} key={"thirdWheel"} />
      )}
      {allDigits.map((digit) => (
        <NumberSection currentNum={digit} key={digit} />
      ))}
    </div>
  );
};

export default FlipperTime;
