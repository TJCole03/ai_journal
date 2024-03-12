import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

/*

This matcher thing is a regex that says: "everything", "the homepage", "the API"

 */

/*

What is middleware in Next.js? 

a function that puts routes in some type of "check";
We can check to see if someone is authenticated;
It's just a function that runs before any route is navigated to.

*/

// the name is this file MUST be called middleware and MUST be in root file of repo
