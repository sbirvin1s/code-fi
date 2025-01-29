/* ========== EXTERNAL MODULES ========== */
import styled from '@emotion/styled';

/* ========== INTERNAL MODULES ========== */


/* ========== EXPORTS ========== */
export default function Home() {

  /* --- STATE HOOKS --- */
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */
  /* --- RENDERER --- */
  return (
    <HomePage>
      <h1>Welcome to </h1>
      <Logo>&lt;code-fi&gt;</Logo>
      <H3 >A webplayer that streams lofi beats</H3>
    </HomePage>
  )
}

/* ========== STYLES ========== */
const Logo = styled.span`
  font-family: 'Audiowide';
  font-size: 4rem;
  background: linear-gradient(60deg, #1C75BC, #92278F);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const H3 = styled.h3`
  text-align: center;
`;

const HomePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 80vh;
`;