import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 100, 200, 300, 400, 500, 600, 700, 800, 900;
    font-style: normal;
}
  
body {
    font-size: 16px;
    line-height: 1.6;
    /* font-family: 'Noto Sans KR', sans-serif; */
    font-family: 'Pretendard-Regular', sans-serif;
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
`
export default GlobalStyle;
