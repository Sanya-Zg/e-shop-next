import { SignInButton } from '@clerk/nextjs';

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-lightColor hover:text-darkColor hover:cursor-pointer hoverEffect">
        Sign In
      </button>
    </SignInButton>
  );
};
export default SignIn;
