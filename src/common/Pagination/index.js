import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchNextPage } from "../../features/SearchResult/searchNameValue";
import { Arrow, ArrowMobile } from "./Arrow";
import { Wrapper, Paragraph, Link, Text, Number } from "./styled";

const Pagination = ({ totalPage, page }) => {
  const [numberPage, setNumberPage] = useState(+page);
  const location = useLocation();
  const navigate = useNavigate();
  const pageParams = new URLSearchParams(location.search);

  if (totalPage > 500) {
    totalPage = 500;
  }

  useEffect(() => {
    pageParams.set(searchNextPage, numberPage);
    navigate({
      search: `?${pageParams}`,
    });
  }, [numberPage, navigate]);

  return (
    <Wrapper>
      <p>
        <Link
          disabled={numberPage <= 1 ? true : false}
          onClick={() => setNumberPage(1)}
        >
          <Arrow active={numberPage <= 1 ? false : true} />
          <ArrowMobile active={numberPage <= 1 ? false : true} />
          <Text>First</Text>
        </Link>

        <Link
          disabled={numberPage <= 1 ? true : false}
          onClick={() => setNumberPage((numberPage) => numberPage - 1)}
        >
          <Arrow active={numberPage <= 1 ? false : true} />
          <Text>Previous</Text>
        </Link>
      </p>

      <Paragraph>
        Page <Number>{numberPage}</Number> of <Number>{totalPage}</Number>
      </Paragraph>

      <p>
        <Link
          disabled={numberPage === totalPage ? true : false}
          onClick={() => setNumberPage((numberPage) => numberPage + 1)}
        >
          <Text>Next</Text>
          <Arrow
            rotation={true}
            active={numberPage === totalPage ? false : true}
          />
        </Link>

        <Link
          disabled={numberPage === totalPage ? true : false}
          onClick={() => setNumberPage(totalPage)}
        >
          <Text>Last</Text>
          <ArrowMobile
            rotation={true}
            active={numberPage === totalPage ? false : true}
          />
          <Arrow
            rotation={true}
            active={numberPage === totalPage ? false : true}
          />
        </Link>
      </p>
    </Wrapper>
  );
};

export default Pagination;
