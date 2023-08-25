
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request:NextRequest) {
    const path = request.nextUrl.pathname;
   
    
    
   // const isPublicPath = path === '/' || path === '/register';
    const token = request.cookies.get('token')?.value || '';
    
    // if (token && path.startsWith('/')) {
    //   return NextResponse.rewrite(new URL('/about', request.url))
    // }
    // if (token && path.startsWith('/register')) {
    //   return NextResponse.rewrite(new URL('/about', request.url))
    // }
    
    if (!token && path.match('/about')) {
      return NextResponse.redirect(new URL('/', request.nextUrl))
    }
   
  }
  
  export const config = {
    matcher: ['/', '/about/:path*', '/register'], // Fixed missing slashes
  };
  
