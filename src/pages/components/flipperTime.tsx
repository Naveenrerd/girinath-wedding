/* eslint-disable jsx-a11y/anchor-is-valid */
import "./flipperTime.styles.css";

export interface INumberBlock {
  blockNum: number;
  currentNum: number;
  isInitial?: boolean;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getNumBlockClass = ({
  blockNum,
  currentNum,
  isInitial,
}: INumberBlock) => {
  if (blockNum === currentNum) return "active";
  if (blockNum === currentNum + 1 || (blockNum === 0 && currentNum === 9))
    return "before";
  return "";
};

const NumberBlock: React.FC<INumberBlock> = ({
  blockNum,
  currentNum,
  isInitial,
}) => (
  <li className={getNumBlockClass({ blockNum, currentNum, isInitial })}>
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

const NumberSection: React.FC<{ currentNum: number; isInitial?: boolean }> = ({
  currentNum,
  isInitial,
}) => (
  <ul className="flip">
    {numbers.map((blockNum) => (
      <NumberBlock
        key={blockNum}
        blockNum={blockNum}
        currentNum={currentNum}
        isInitial={isInitial}
      />
    ))}
  </ul>
);

const FlipperTime: React.FC<{ time: number; isInitial?: boolean }> = ({
  time,
  isInitial,
}) => {
  const timeString = time.toString();
  const allDigits = timeString.split("").map((val) => parseInt(val, 10));

  return (
    <div className="container">
      {allDigits.length === 1 && (
        <NumberSection
          currentNum={0}
          key={"thirdWheel"}
          isInitial={isInitial}
        />
      )}
      {allDigits.map((digit) => (
        <NumberSection currentNum={digit} key={digit} isInitial={isInitial} />
      ))}
    </div>
  );
};

export default FlipperTime;
