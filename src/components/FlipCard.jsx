import React, { useState } from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  display: inline-block;
  perspective: 1000px;
`;

const Inner = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "none")};
  margin: 0 auto;
`;

const Face = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: grid;
  place-items: center;
`;

const Back = styled(Face)`
  transform: rotateY(180deg);
`;

const FlipButton = styled.button`
  margin-top: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  background: #111827; /* gray-900 */
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
`;

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="text-center">
      <CardWrap>
        <Inner $flipped={flipped} role="img" aria-label="포켓몬 앞/뒤 이미지">
          <Face>
            <img src={front} alt="front" width={120} height={120} />
          </Face>
          <Back>
            <img src={back || front} alt="back" width={120} height={120} />
          </Back>
        </Inner>
      </CardWrap>
      <div>
        <FlipButton onClick={() => setFlipped((v) => !v)}>
          {flipped ? "앞면 보기" : "뒷면 보기"}
        </FlipButton>
      </div>
    </div>
  );
};

export default FlipCard;
