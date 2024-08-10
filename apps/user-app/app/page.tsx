"use client";
import { Appbar } from "@repo/ui/AppBar";
// import { useBalance } from "@repo/store/useBalance";
import { signIn, signOut, useSession } from "next-auth/react";
import { AppbarClient } from "../AppBarClient";

export default function() {
  const session = useSession();
  // const balance = useBalance();
  return <div>
    {/* <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}></Appbar> */}
    {/* <AppbarClient></AppbarClient> */}
  </div>
}