
const Square = () => {
  const edgeSize = "50px";
  const squareStyle = {
    width: edgeSize,
    height: edgeSize,
    backgroundColor: "gray",
    marginLeft: "3px",
    display: "inline-block"
  }
  return (
    <div style={squareStyle}></div>
  )
}

export default Square