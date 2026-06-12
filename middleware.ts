import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Routes that require authentication
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

// Routes only for guests (signed-out users)
const isGuestRoute = createRouteMatcher(['/'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()

  // Signed-in user visiting the landing page → send to dashboard
  if (isGuestRoute(req) && userId) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // Protected route without a session → Clerk redirects to sign-in
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Required for Clerk v7 auto-proxy
    '/__clerk/:path*',
  ],
}
