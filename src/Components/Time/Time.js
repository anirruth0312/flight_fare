import React, { useState, useEffect } from "react";
function Time(props) {
  // eslint-disable-next-line
  const [curtime, setCurtime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setCurtime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  var time = new Date();
  var hours = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  return (
    <h2 className={props.class}>
      {hours}:{min}:{sec}
    </h2>
  );
}

export default Time;
