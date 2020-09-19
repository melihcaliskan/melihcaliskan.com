import Menu from './Menu'
import styled from 'styled-components'
import { useState } from 'react';

const Container = styled.div`
    cursor:pointer;
    width:50px;
    height:50px;
    border-radius:50%;
    background:${({ theme }) => theme.body_200};
    @media only screen and (max-width: 1280px) {
        margin-right:${props => !props.open ? "1em" : 0};
    }
`

const MenuToggle = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Container open={open}>
            <Menu {...props} open={isChecked} setIsChecked={setIsChecked} />
            <div className="menu cross">
                <label>
                    <input
                        value={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        type="checkbox" />
                    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                        <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                        <path className="line--2" d="M0 50h99" />
                        <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                    </svg>
                </label>
            </div>
        </Container>
    );
}
//            fadeinup<br />ile geleceek
export default MenuToggle