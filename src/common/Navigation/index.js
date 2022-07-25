import {
  Header,
  Content,
  Nav,
  Logo,
  NameWebsite,
  Menu,
  List,
  Item,
  Link,
  LinkActive,
  Search,
} from "./styled";
import logo from "./logo.svg";
import search from "./search.svg";

const Navigation = () => (
  <Header>
    <Content>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo - Movies Browser" width="40" height="40" />
          <NameWebsite>
            <Link href="#">Movies Browser</Link>
          </NameWebsite>
        </Logo>
        <Menu>
          <List>
            <Item>
              <LinkActive href="#">MOVIES</LinkActive>
            </Item>
            <Item>
              <Link href="#">PEOPLE</Link>
            </Item>
          </List>
        </Menu>
      </Nav>
      <Search>
        <div>
          <img src={search} width="18" height="18" alt="" />
          <input placeholder="Search for movie..." />
        </div>
      </Search>
    </Content>
  </Header>
);

export default Navigation;
