import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 16px;
        color: #3d3d4d;
      }

      p {
        font-size: 14px;
        color: #a8a8b3;
        margin-top: 8px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    li {
      strong {
        display: block;
        font-size: 20px;
        font-weight: bold;
      }

      span {
        display: block;
        margin-top: 5px;
        color: #6c6c80;
      }

      & + li {
        margin-left: 60px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 40px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 14px;
        color: #3d3d4d;
      }

      p {
        font-size: 12px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
