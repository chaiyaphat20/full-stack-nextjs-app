export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard/:path*"] };


// export { default } from "next-auth/middleware";
// export const config = { matcher: ["/dashboard/:path*"] };
//มีแค่นี้คือ ทุก path /dashboard/:path* จะถูก potech nextauth ให้เฉพาะคนที่ login เท่านั้น ที่ใช้ได้
