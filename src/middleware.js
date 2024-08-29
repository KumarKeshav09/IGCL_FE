import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { WEB_BASE_URL } from "../utils/constants";

export const config = {
  matcher: [
    // "/",
    "/dashboard",
    "/testimonials/:path*",
    "/client/:path*",
    "/FAQ/:path*",
    "/contactus/:path*",
    "/resource/:path*",
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
      return NextResponse.redirect(`${WEB_BASE_URL}/login`);
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
      return NextResponse.redirect(`${WEB_BASE_URL}/login`);
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.redirect(`${WEB_BASE_URL}/login`);
  }
}
