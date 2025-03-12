import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)"
]);

console.log("✅ Clerk Middleware is running...");

export default clerkMiddleware(async(auth,req)=>{
  const {userId}= await auth()
  if(!userId && isProtectedRoute(req)) {
    const {redirectToSignIn }=await auth();
    return redirectToSignIn();

  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Ensures Clerk runs on relevant routes
    "/(api|trpc)(.*)", // Run middleware on API routes
  ],
};
