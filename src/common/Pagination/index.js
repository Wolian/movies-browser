import { Wrapper, Paragraph, Link, Text, Number } from "./styled";
import { Arrow, ArrowMobile } from "./Arrow";

const Pagination = () => (
  <Wrapper>
    <p>
      <Link active={false} href="#">
        <Arrow rotation={false} active={false} />
        <ArrowMobile rotation={false} active={false} />
        <Text>First</Text>
      </Link>
      <Link active={false} href="#">
        <Arrow rotation={false} active={false} />
        <Text>Previous</Text>
      </Link>
    </p>

    <Paragraph>
      Page <Number>1</Number> of <Number>500</Number>
    </Paragraph>

    <p>
      <Link active={true} href="#">
        <Text>Next</Text>
        <Arrow rotation={true} active={true} />
      </Link>
      <Link active={true} href="#">
        <Text>Last</Text>
        <ArrowMobile rotation={true} active={true} />
        <Arrow rotation={true} active={true} />
      </Link>
    </p>
  </Wrapper>
);

export default Pagination;
