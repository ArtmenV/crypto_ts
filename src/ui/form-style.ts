import styled, { css } from "styled-components";

const btn = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
`;

export default styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 500px;
    margin: 25px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    label {
      margin: 10px 0 0 5px
    }

    strong {
      color: red
    }

    h4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
        padding: 15px
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 0px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type="checkbox"] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    .submit--section {
      display: flex;
      justify-content: flex-end
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin-top: 20px;
      &[type="submit"] {
        background: #037BFF;
        margin-left: 20px;
        padding: 5px 15px 5px 15px;
        border: 0;
        border-radius: 3px;
        color: #fff
      }
      &[type="submit"]:hover {
        background: #026bdb;
      }
      &[type="button"] {
        background: #dbdbdd;
        margin-left: 20px;
        padding: 5px 15px 5px 15px;
        border: 0;
        border-radius: 3px;
        color: #000
      }
      &[type="button"]:hover {
        background: #edeaea;
      }
    }
  }
`;
