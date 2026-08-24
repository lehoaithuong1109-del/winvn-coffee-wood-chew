import { Navigate } from 'react-router-dom';
import SEO from '../components/layout/SEO';

interface RedirectProps {
  to: string;
}

/**
 * Renders for legacy/catch-all routes that only exist to send visitors somewhere else
 * (e.g. the old "/about" URL). Client-side <Navigate> can't send a real HTTP 301 on a
 * static host, so this also marks the pre-rendered page itself "noindex" and points its
 * canonical at the real destination — otherwise crawlers that don't run JavaScript would
 * see (and could index) a blank, unlabeled page at this URL.
 */
export default function Redirect({ to }: RedirectProps) {
  return (
    <>
      <SEO title="Redirecting…" noindex canonicalPath={to} />
      <Navigate to={to} replace />
    </>
  );
}
