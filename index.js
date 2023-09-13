const Box = props => {
  //  Write your code here.
  const {className,message} = props,
  return (
  <div className = {containerClassName}>
    <p className = "box1">{message}</p>
  </div>)

}

const element = (
  //  Write your code here.
  <div className = "boxes-container">
    <h1 className = "title">Boxes</h1>
    <div className = "container">
        <Box className = "box1" message = "Small"/>
        <Box className = "box2" message = "Medium"/>
        <Box className = "box3" message = "Large"/>

    </div>
  </div> 
)

ReactDOM.render(element, document.getElementById("root"));
