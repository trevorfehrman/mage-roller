import { useRouter } from 'next/router';

import 'firebase/auth';
import { useUser, useAuth } from 'reactfire';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { LoadingSpinner } from '../components/shared/loading-spinner';

const SignInForm = () => {
  const auth = useAuth;

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
};

export default function Home() {
  const { status, data: user } = useUser();
  console.log(user, 'user');
  const router = useRouter();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (user) {
    router.push('/session-browser');
  }

  return <SignInForm />;
}
