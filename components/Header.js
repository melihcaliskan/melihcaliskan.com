import MenuToggle from './MenuToggle';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components'

const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const CustomHeader = (props) => {
    console.log(props)
    return (
        <Header>
            <ThemeToggle {...props} />
            {/*}
            <MenuToggle {...props} />
            {*/}
        </Header>
    );
}

export default CustomHeader