import arrow from "./arrow.svg";
import { Img } from "./styled";

//        States of the arrow
// active                   rotation
// false = gray #7E839A     false = left
// true  = blue #0044CC     true  = right

const Arrow = ({ rotation, active }) => (
  <Img active={active} rotation={rotation} src={arrow} alt="" />
);

export default Arrow;
