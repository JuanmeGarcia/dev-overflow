'use client'
import { signOut, signIn } from 'next-auth/react';
import { Button } from "../ui/button";
import { ROUTES } from "@/constants/routes";

export const LogOut = () => {
  return (
    <form
      className="px-10 pt-[100px]"
      action={() => {
        signOut({
          redirectTo: ROUTES.SIGN_IN,
        });
      }}
    >
      <Button type="submit">Log Out</Button>
    </form>
  )
}
