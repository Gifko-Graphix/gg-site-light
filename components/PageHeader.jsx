import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeIn } from 'react-animations';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`
      animation: 1s ${fadeInDownAnimation};
  `;

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
      animation: 1s ${fadeInAnimation} 0.5s;
      opacity: 0;
      animation-fill-mode: forwards;
  `;

export default function PageHeader({ title, caption }) {
  return (
    <div className="flex flex-col items-center justify-content-center ">
      <FadeInDownDiv>
        <h1 className="text-4xl sm:text-7xl text-center">{title}</h1>
      </FadeInDownDiv>
      <FadeInDiv>
        <p className="mt-3 block text-center text-sm sm:text-xl">{caption}</p>
      </FadeInDiv>
    </div>
  );
}
