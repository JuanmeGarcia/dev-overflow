import { auth } from "@/auth";
import { LogOut } from "@/components/forms/LogOut";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { signOut } from "next-auth/react";

export default async function Home() {

  const session = await auth()

  console.log({ session });

  return (
    <div>
      <h1 className="h1-bold ">Dev Overflow</h1>
      <h1 className="h1-bold font-space-grotesk">Dev Overflow</h1>

      <LogOut />
    </div>
  );
}
