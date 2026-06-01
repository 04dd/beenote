// get PocketBase client from the server (node) environments

import PocketBase from "pocketbase/cjs";
import { cookies } from "next/headers";

export default async function getclient() {
  const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE);
  const cookie = (await cookies()).get("pb_auth");
  const cookie_string = cookie?.name + "=" + cookie?.value;
  client.authStore.loadFromCookie(cookie_string);

  return client;
}
