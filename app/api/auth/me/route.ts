// GET /api/auth/me
// Roles: employee, project_manager, hr_executive
// Extract user id from JWT
// Query employees table WHERE id = current_user_id
// Return: { id, employee_code, full_name, email, employee_type, employee_role, role, working_location, department_id, project_manager_id, status, joined_on }
// Error 403 if no valid token
// Error 404 if user not found
