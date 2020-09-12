import React, { useState } from 'react';

import styled from 'styled-components'

const Container = styled.div`
    cursor:pointer;
    width:50px;
    height:50px;
    border-radius:50%;
    background:${({ theme }) => theme.body_200};
`

const MenuToggle = ({ isLight, theme, toggleTheme }) => {
    return (
        <Container>
            <div class="menu cross">
                <label>
                    <input type="checkbox" />
                    <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                        <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                        <path class="line--2" d="M0 50h99" />
                        <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                    </svg>
                </label>
            </div>
        </Container>
    );
}

export default MenuToggle