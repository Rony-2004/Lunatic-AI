import { clerkMiddleware } from "@clerk/nextjs/server";

console.log("✅ Clerk Middleware is running...");

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Ensures Clerk runs on relevant routes
    "/(api|trpc)(.*)", // Run middleware on API routes
  ],
};
