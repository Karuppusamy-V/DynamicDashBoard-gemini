import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Left side - Sign In */}
      <div className="w-full col-span-1 flex items-center justify-center p-8 lg:p-16">
        <SignIn />
      </div>

      {/* Right side - Image */}
      {/* <div className="w-full col-span-2 relative hidden lg:block">
        <Image
          src="/showcase.png"
          alt="sign-in"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}
    </div>
  );
};

export default SignInPage;
