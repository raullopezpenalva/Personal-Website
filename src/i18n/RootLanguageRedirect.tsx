import { Navigate } from 'react-router-dom';
import { getPreferredLanguage } from './language';

export function RootLanguageRedirect() {
  const preferredLanguage = getPreferredLanguage();

  return <Navigate to={`/${preferredLanguage}`} replace />;
}