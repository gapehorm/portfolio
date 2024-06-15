import { NextResponse } from "next/server";

// A faulty API route to test Sentry's error monitoring
export function get(req) {
  throw new Error("Sentry Example API Route Error");
  // The code below won't be reached due to the error thrown above
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
