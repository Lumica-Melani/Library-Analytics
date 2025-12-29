import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            variables: {
              colorBackground: "var(--color-bg)",
              colorText: "var(--color-text)",
              colorPrimary: "var(--color-accent)",
            },
          }}
        />
      </div>
    </div>
  );
}
