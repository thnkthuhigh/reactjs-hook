import { useEffect, useState } from "react";

const Clock = () => {
  const [Time, setTime] = useState(10);
  const [Reset, setReset] = useState("");
  const [isError, setError] = useState(false);

  useEffect(() => {
    var ck = setTimeout(() => {
      setTime(Time - 1);
    }, 1000);
    if (Time === 0) {
      clearTimeout(ck);
    }
  }, [Time]);

  const handleOnChangeTime = (event) => {
    const value = parseInt(event.target.value);

    value >= 0 ? setReset(value) : setReset(0);
  };

  return (
    <div>
      {Time !== 0 ? (
        <div>{Time} - Hook</div>
      ) : (
        <div>
          Settime{" "}
          <input
            type="number"
            value={Reset}
            onChange={(event) => {
              handleOnChangeTime(event);
            }}
          />{" "}
          Hook{" "}
          <button
            onClick={() => {
              if (!Number.isInteger(Reset)) {
                setError(true);
              } else {
                setTime(Reset);
                setError(false);
              }
            }}
          >
            Reset
          </button>
          {isError && <div>Please enter a valid integer.</div>}
        </div>
      )}
    </div>
  );
};

export default Clock;
