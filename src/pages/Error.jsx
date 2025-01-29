/* ========== EXTERNAL MODULES ========== */
import React from 'react';
import { useRouteError } from 'react-router-dom';

/* ========== INTERNAL MODULES ========== */
import { Page } from '../stylesheets';
import styled from '@emotion/styled';

/* ========== EXPORTS ========== */
export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorBackground>
      <ErrorPage>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ErrorPage>
    </ErrorBackground>
  );
}

/* ========== STYLES ========== */

const ErrorPage = styled(Page)`
  min-height: 95vh;
  min-width: 95vw;
  background: #252525;
  border-radius: 0.5rem;
`;

const ErrorBackground = styled(Page)`
  min-height: 100vh;
  min-width: 100vw;
  background: #121212;
`;