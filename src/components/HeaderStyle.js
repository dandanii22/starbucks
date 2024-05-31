import styled from 'styled-components';

export const HeaderWarp = styled.div`
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    border-top: 2px solid #000;
    background-color: F6F5EF;
    .inner {
        width: 1520px;
        height: 120px;
    }
    h1 {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        a {
            img {
                width: 60px;
            }
        }
    }
`;

export const NavWarp = styled.nav`
    ul {
        display: flex;
    }
`;

export const TopMenu = styled.ul``;
