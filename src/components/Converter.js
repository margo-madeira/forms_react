import { RgbColor } from "./RgbColor";
import { useState } from "react";

export const Converter = () => {
  const [result, setState] = useState("");
  const [style, setStateStyle] = useState({ backgroundColor: "" });

  const convertColor = (e) => {
    if (e.target.value.length === 7) {
      if (e.target.value[0] === "#") {
        const arr = Array.from(e.target.value.split("#")[1]);
        const enLower = "abcdefghijklmnopqrstuvwxyz";
        const enUpper = enLower.toUpperCase();
        const numbers = "1234567890";
        let newArr = [];

        arr.forEach((el) => {
          if (
            !enUpper.includes(el) &&
            !enLower.includes(el) &&
            !numbers.includes(el)
          ) {
            setState("ошибка!");
            return false;
          }
          if (enUpper.includes(el)) {
            newArr.push(el.toLowercase());
          }
          newArr.push(el);
        });

        function hex2rgb() {
          let bigint = parseInt(newArr.join(""), 16);
          let r = (bigint >> 16) & 255;
          let g = (bigint >> 8) & 255;
          let b = bigint & 255;
          setState("rgb(" + r + "," + g + "," + b + ")");
          setStateStyle({
            backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
          });
        }

        if (arr.length === newArr.length) {
          hex2rgb(newArr.join(""));
        } else {
          return;
        }
      } else {
        setState("ошибка!");
      }
    }
  };
  return <RgbColor result={result} convertColor={convertColor} style={style} />;
};
