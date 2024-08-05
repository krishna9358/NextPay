"use client";
import {PrismaClient} from "@repo/db/client";
// import { useBalance } from "@repo/store/useBalance";

const client = new PrismaClient();

export default function() {
  // const balance = useBalance();
  return <div>
    hi there 
  </div>
}