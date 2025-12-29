import { SignUp } from "@clerk/clerk-react";
import { clerkAppearance } from "../clerkAppearance";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignUp appearance={clerkAppearance} />
      </div>
    </div>
  );
}
