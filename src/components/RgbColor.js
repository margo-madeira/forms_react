export const RgbColor = (props) => {
  const result = props.result;
  const convertColor = props.convertColor;
  const style = props.style;

  return (
    <form className="container" style={style}>
      <input
        type="text"
        name="color_hex"
        onInput={convertColor}
        className="field"
      />
      <div className="rgb_color">{result}</div>
    </form>
  );
};
