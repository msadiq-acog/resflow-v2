// POST /api/auth/logout
// Roles: employee, project_manager, hr_executive
// Extract JWT from Authorization header
// Invalidate token (add to blacklist table or clear client-side)
// Return: { message: "Logged out successfully" }
// Error 403 if no valid token
