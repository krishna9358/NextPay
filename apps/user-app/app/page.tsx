"use client";
import {PrismaClient} from "@repo/db/client";
import { Appbar } from "../../../packages/ui/src/AppBar";
// import { useBalance } from "@repo/store/useBalance";
import { signIn, signOut, useSession } from "next-auth/react";
const client = new PrismaClient();

export default function() {
  const session = useSession();
  // const balance = useBalance();
  return <div>
    <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}></Appbar>
  </div>
}