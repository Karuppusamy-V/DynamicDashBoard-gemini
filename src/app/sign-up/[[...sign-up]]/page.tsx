import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Left side - Sign In */}
      <div className="w-full col-span-1 flex items-center justify-center p-8 lg:p-16">
        <SignUp />
      </div>

      {/* Right side - Image */}
     
    </div>
  );
};

export default SignInPage;
