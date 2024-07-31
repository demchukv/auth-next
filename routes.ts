/**
 * An array of routes that are accessible without authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
];

/**
 * The prefix for API authentication routes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default login redirect route
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
