import styled, { css } from 'styled-components';
import { shade } from 'polished';

const buttonColor = '#04f361';
const error = '#c53030';

interface FormProps {
   hasError: boolean;
}

export const Title = styled.h1`
   font-size: 48px;
   color: #3a3a3a;
   max-width: 450px;
   line-height: 56px;

   margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
   margin-top: 40px;
   max-width: 700px;
   height: 70px;

   display: flex;

   input {
      flex: 1;
      padding: 0 24px;
      border: none;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border: 2px solid #fff;
      border-right: none;

      ${({ hasError }) =>
         hasError &&
         css`
            border-color: ${error};
         `}

      &::placeholder {
         color: #a8a8b3;
      }
   }

   button {
      width: 210px;
      background: ${buttonColor};
      border: none;
      border-radius: 0 5px 5px 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
         background: ${shade(0.2, buttonColor)};
      }
   }
`;

export const Repositories = styled.div`
   margin-top: 80px;
   max-width: 700px;

   a {
      background: #fff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      display: block;
      text-decoration: none;
      transition: transform 0.2s;

      display: flex;
      align-items: center;

      & + a {
         margin-top: 16px;
      }

      &:hover {
         transform: translateX(10px);
      }

      img {
         width: 64px;
         border-radius: 50%;
      }

      div {
         margin-left: 16px;
         flex: 1;

         strong {
            font-size: 20px;
            color: #3d3d4d;
         }

         p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
         }
      }

      svg {
         margin-left: auto;
         color: #cdcdd6;
      }
   }
`;

export const Error = styled.span`
   display: block;
   color: ${error};
   margin-top: 8px;
`;
