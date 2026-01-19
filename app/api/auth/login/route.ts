// POST /api/auth/login
// Public endpoint - no auth required
// Accept: { email: string, password: string }
// Query employees table WHERE email = ? AND password hash matches
// Generate JWT with payload: { id, employee_code, full_name, email, role }
// Return: { token: string, user: { id, employee_code, full_name, email, employee_type, employee_role, role, status } }
// Error 401 if credentials invalid
