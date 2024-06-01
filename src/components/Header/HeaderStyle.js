import styled from 'styled-components';

export const HeaderWarp = styled.div`
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    border-top: 2px solid #000;
    background-color: #f6f5ef;
    /* position: fixed;
    z-index: 1000; */

    .inner {
        margin: 0 auto;
        width: 1520px;
        height: 120px;
        position: relative;
        display: flex;
        justify-content: end;
        align-items: center;
        z-index: 1000;
    }
    h1 {
        img {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 60px;
        }
    }
`;

export const NavWarp = styled.nav`
    .gnb {
        margin-top: 30px;
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 0;

        > li {
            line-height: 120px;
            position: relative;
            padding: 0 30px;

            line-height: 80px;
            &.on {
                background: #333;
                a {
                    color: #fff;
                }
            }

            span {
                position: absolute;
                top: 15px;
                width: 20px;
                line-height: 20px;
                border-radius: 50%;
                background: #000;
                color: #fff;
                text-align: center;
                font-size: 14px;
                font-weight: bold;
            }
        }
        > a {
            text-decoration: none;
            color: #333;
            font-size: 18px;

            &.active {
                color: #006341;
                font-weight: bold;
            }
        }
    }
    .dropdown {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 110px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        width: 100%;

        ul {
            list-style: none;
            margin: 0;
            background: #333;
            display: flex;
            justify-content: center;
            gap: 40px;
            padding: 20px 0;

            li {
                width: 170px;
                a {
                    text-decoration: none;
                    color: #aaa;
                    display: block;
                    font-size: 16px;
                    line-height: 30px;

                    &:first-child {
                        font-weight: 600;
                        font-size: 18px;
                        margin-bottom: 15px;

                        color: #fff;
                    }
                    &:hover {
                        text-decoration-line: underline;
                    }
                }
                &.coffee {
                    margin-left: 430px;
                }
                &.food {
                    margin-left: 670px;
                }
                &.product {
                    margin-left: 870px;
                }
            }
        }
        &:hover .dropdown {
            display: block;
        }
    }
`;

export const TopMenu = styled.ul`
    position: absolute;
    right: 0;
    top: 10px;
    display: flex;
    li {
        margin-left: 25px;
        a {
            font-size: 15px;
        }
        &::after {
            content: '';
            height: 14px;
            width: 1px;
            background: #999;
            display: inline-block;
            margin-left: 20px;
        }
        &:last-child::after {
            display: none;
        }
    }
`;
