import { useEffect, useState } from "react";

const Clock = () => {
  const [Time, setTime] = useState(10);
  const [Reset, setReset] = useState();

  useEffect(() => {
    var ck = setTimeout(() => {
      setTime(Time - 1);
    }, 1000);
    if (Time === 0) {
      clearTimeout(ck);
    }
  }, [Time]);

  const handleOnChangeTime = (event) => {
    setReset(event.target.value);
  };

  return (
    <div>
      {Time !== 0 ? (
        <div>{Time} - Hook</div>
      ) : (
        <div>
          Settime <> </>
          <input
            onChange={(event) => {
              handleOnChangeTime(event);
            }}
          />{" "}
          Hook{" "}
          <button
            onClick={() => {
              setTime(Reset);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export { Clock };
