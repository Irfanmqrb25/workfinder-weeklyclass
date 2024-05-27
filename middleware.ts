import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/sso-callback(.*)",
    "/api/uploadthing",
  ],

  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);

    if (!auth.userId) {
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }

    const user = await clerkClient.users.getUser(auth.userId);

    if (!user) {
      throw new Error("User not found");
    }

    const res = NextResponse.next();

    res.headers.append(
      "Access-Control-Allow-Origin",
      `${process.env.NEXT_PUBLIC_API_URL}`
    );
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE"
    );

    return res;
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
