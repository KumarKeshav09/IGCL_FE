import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const config = {
  matcher: [
    // "/",
    "/dashboard",
    "/testimonials",
    "/client",
    "/FAQ"
  ],
};

export default async function middleware(req) {
  
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(`http://localhost:3000/login`);
    }
    // const cleanedToken = token.value.replace(/"/g, '');
    const cleanedToken = token.value.replace(/"/g, "");
    // const isValid = await jwt.verify(cleanedToken, process.env.JWT_SECRET_KEY);
    const jwtRes = await jwtVerify(
        cleanedToken,
        new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    );
    
    if (!jwtRes ) {
      console.log('Invalid token, redirecting to login page');
      return NextResponse.redirect(`http://localhost:3000/login`);
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.redirect(`http://localhost:3000/login`);
  }
}
