import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const config = {
  matcher: [
    // "/",
    "/dashboard",
    "/testimonials",
    "/client",
    "/FAQ",
    "/contactus",
    "/resource",
    "/resource/Policy/:path*",
    "/resource/notification/:path*",
    "/resource/judgement/:path*",
    "/resource/abstract/:path*"
  ],
};

export default async function middleware(req) {
  
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(`https://igcl.netlify.app/login`);
    }
    // const cleanedToken = token.value.replace(/"/g, '');
    const cleanedToken = token.value.replace(/"/g, "");
    // const isValid = await jwt.verify(cleanedToken, process.env.JWT_SECRET_KEY);
    const jwtRes = await jwtVerify(
        cleanedToken,
        new TextEncoder().encode("igcl123")
    );
    
    if (!jwtRes ) {
      console.log('Invalid token, redirecting to login page');
      return NextResponse.redirect(`https://igcl.netlify.app/login`);
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.redirect(`https://igcl.netlify.app/login`);
  }
}
