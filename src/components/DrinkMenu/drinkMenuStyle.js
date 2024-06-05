import styled from "styled-components";

export const DrinkSortContent = styled.div`
  .sortContent {
    margin-top: 100px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    padding: 30px;
    .drinkTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
      }
      span {
        width: 42px;
        height: 42px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url("../../public/images/drink/list_up_btn.png");
        transform: rotate(180deg);
        &.on {
          transform: rotate(0deg);
        }
      }
    }
    .drinkCategory {
      margin-top: 30px;
      border-top: 1px solid #dddddd;
      display: flex;
      .category {
        width: 200px;
        height: 35px;
        margin-top: 31px;
        border-radius: 3px;
        background: #f4f4f1;
        color: #222;
        text-align: center;
        line-height: 35px;
        margin-right: 26px;
        &.on {
          background: #006633;
          color: #fff;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .checkboxUl {
      width: 1460px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      li {
        margin-right: 30px;
        color: #3f4141;
        input[type="checkbox"] {
          display: none;
        }
        label {
          cursor: pointer;
          padding-left: 21px;
          background-repeat: no-repeat;
          background-position: 0 35%;
          background-image: url("../../public/images/drink/ck_icon.jpg");
        }
        input[type="checkbox"]:checked + label {
          cursor: pointer;
          padding-left: 21px;
          background-repeat: no-repeat;
          background-position: 0 35%;
          background-image: url("../../public/images/drink/ck_icon_on.jpg");
        }
      }
    }
  }

  .drinkSort {
    margin-top: 46px;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-bottom: 30px;
    position: relative;
    li {
      width: 248px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 3px;
      color: #444;
      text-indent: 13px;
      font-size: 14px;
      background-color: #fff;
      input[type="checkbox"] {
        display: none;
      }
      label {
        cursor: pointer;
        padding-left: 21px;
        background-repeat: no-repeat;
        background-position: 0 35%;
        background-image: url("../../public/images/drink/ck_icon.jpg");
      }
      input[type="checkbox"]:checked + label {
        cursor: pointer;
        padding-left: 21px;
        background-repeat: no-repeat;
        background-position: 0 35%;
        background-image: url("../../public/images/drink/ck_icon_on.jpg");
      }

      &:nth-of-type(1) {
        background-repeat: no-repeat;
        background-image: url("../../public/images/drink/sbox_arrow_down.png");
        background-position: 226px 15px;
      }
      &:nth-of-type(2) {
        position: absolute;
        top: 40px;
        span {
          display: inline-block;
          background-repeat: no-repeat;
          background-image: url("../../public/images/drink/mark01.png");
          background-position: 0px 50%;
          width: 21px;
          height: 21px;
          background-size: cover;
          vertical-align: middle;
          margin-right: 2px;
        }
      }
      &:nth-of-type(3) {
        position: absolute;
        top: 80px;
        span {
          display: inline-block;
          background-repeat: no-repeat;
          background-image: url("../../public/images/drink/mark02.png");
          background-position: 0px 50%;
          width: 21px;
          height: 21px;
          background-size: cover;
          vertical-align: middle;
          margin-right: 2px;
        }
      }
    }
  }
`;

export const DrinkmenuList = styled.div`
  .namebox {
    width: 1518px;
    height: 70px;
    background-color: #f4f4f2;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    h4 {
      color: #222;
      font-size: 16px;
      font-weight: bold;
      line-height: 18px;
      margin-top: 26px;
      margin-right: 21.41px;
    }
    img {
      width: 45px;
      height: 35.52px;
      margin-top: 17px;
      margin-right: 14.59px;
    }
    span {
      font-size: 14px;
      letter-spacing: -1px;
      line-height: 18px;
      margin-top: 26px;
    }
  }
  ul {
    width: 1518px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 44px;
    margin-bottom: 125px;
  }
`;

export const DrinkMenuLi = styled.li`
  width: 280px;
  margin-right: 29px;
  &:nth-of-type(5n) {
    margin-right: 0;
  }
  .img {
    position: relative;
    overflow: hidden;
    height: 280px;
    width: 280px;
    margin-bottom: 15px;
    cursor: pointer;
    img {
      height: 280px;
      width: 280px;
      transition: 1s;
      &:hover {
        transform: scale(1.1);
      }
    }
    p {
      position: absolute;
      left: 10px;
      bottom: 10px;
      img {
        width: 44px;
        height: 44px;
        transition: 0;
        margin-right: 5px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  .name {
    text-align: center;
    margin-bottom: 95px;
    color: #444;
  }
`;

export const DrinkDetail = styled.div`
  .inner {
    width: 1520px;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 80px;
  }
  .detialCon {
    margin-bottom: 100px;
    margin-top: 98px;
    display: flex;
    justify-content: space-between;
    .bigImg {
      width: 619px;
      height: 646px;
      img {
        width: 619px;
        height: 646px;
      }
    }
    .detailDesc {
      width: 768px;
      h2 {
        color: #222;
        font-size: 30px;
        line-height: 24px;
        font-weight: bold;
        margin-bottom: 7px;
      }
      h3 {
        color: #666;
        font-size: 14px;
        line-height: 14px;
        border-bottom: 2px solid #333;
        padding-bottom: 42px;
      }
      .detailDescP {
        margin-top: 25px;
        color: #444;
        font-size: 16px;
        line-height: 25.6px;
        word-break: keep-all;
        margin-bottom: 50px;
      }
      .info {
        .infoP {
          margin-left: 10px;
          line-height: 59px;
          color: #222;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          span {
            margin-left: 299.31px;
            color: #444;
          }
        }
        .infoDetail {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          margin: 19.8px 10px 35px;
          p {
            font-size: 14px;
            color: #444;
            line-height: 22.4px;
            width: 360px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 14.8px;
            &:nth-of-type(n + 5) {
              margin-bottom: 0;
            }
          }
        }
        .allergy {
          background-color: #f4f4f2;
          color: #444;
          font-size: 14px;
          line-height: 48.39px;
          height: 48.39px;
          padding-left: 11px;
          box-sizing: border-box;
        }
        .btn {
          margin-top: 23.44px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  button {
    width: 372px;
    height: 40px;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    color: #000;
    background-color: #fff;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
    position: relative;
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 5px;
    }
  }
  .recommend {
    width: 1510px;
    margin: auto;
    background-color: #f6f5ef;
    padding: 35px;
    box-sizing: border-box;
    margin-bottom: 42px;
    position: relative;
    .recommendP {
      width: 1447px;
      border-bottom: 2px solid #333;
      img {
        width: 85px;
        position: absolute;
        left: 30px;
        top: 55px;
      }
      span {
        display: block;
        font-size: 30px;
        line-height: 24px;
        font-weight: bold;
        margin-top: 43px;
        margin-bottom: 19px;
        margin-left: 83px;
      }
    }
    .recommendImg {
      display: flex;
      justify-content: space-between;
      margin-top: 42px;
      .nameBackground {
        width: 240px;
        height: 250px;
        position: relative;
        cursor: pointer;
        .background {
          transition: 0.6s;
          width: 240px;
          height: 250px;
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
        }
        .backname {
          opacity: 0;
          position: absolute;
          color: #fff;
          left: 50%;
          top: 50%;
          word-break: keep-all;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        img {
          width: 240px;
          height: 250px;
        }
        &:hover {
          .background {
            opacity: 1;
          }
          .backname {
            opacity: 1;
          }
        }
      }
    }
  }
  .backBtn {
    display: flex;
    justify-content: center;
  }
`;

export const CustomContent = styled.form`
  margin-top: 130px;
  margin-bottom: 79px;
  .content {
    width: 1520px;
    height: 200px;
    border-radius: 3px;
    background-color: #f4f4f2;
    position: relative;
    margin-bottom: 74px;
    .left {
      position: absolute;
      left: 34px;
      top: 50%;
      transform: translateY(-50%);
      img {
        width: 302px;
        height: 319px;
      }
    }
    .right {
      width: 700px;
      position: absolute;
      left: 382px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-wrap: wrap;
      span {
        font-size: 16px;
        line-height: 28.8px;
        color: #444;
        font-weight: bold;
        margin-right: 30px;
      }
      select {
        border-radius: 3px;
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        margin-right: 30px;
      }
      .size {
        margin-bottom: 30px;
        select {
          width: 262px;
          height: 40px;
          text-indent: 20px;
          option {
            font-size: 16px;
            color: #444;
            line-height: 28.8px;
          }
        }
      }
      .shot {
        margin-bottom: 30px;
      }
      button {
        width: 39px;
        height: 39px;
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        &:nth-of-type(odd) {
          border-radius: 3px 0 0 3px;
        }
        &:nth-of-type(even) {
          border-radius: 0 3px 3px 0;
          margin-right: 30px;
        }
      }
      b {
        display: inline-block;
        width: 39px;
        height: 39px;
        text-align: center;
        background-color: #f7f7f7;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        line-height: 39px;
      }
      .drizzle {
        select {
          width: 174px;
          height: 40px;
          text-indent: 20px;
        }
      }
      .whipping {
        padding-top: 5px;
        input[type="radio"] {
          margin-right: 15px;
        }
        label {
          margin-right: 15px;
          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
  .customBtn {
    display: flex;
    justify-content: right;
    margin-right: 22px;
    button {
      width: 77px;
      height: 40px;
      border-radius: 3px;
      color: #fff;
      font-size: 13.56px;
      font-weight: bold;
      line-height: 40px;
    }
    .customSave {
      background-color: #006633;
      margin-right: 14px;
    }
    .customCancel {
      background-color: #222222;
    }
  }
`;
