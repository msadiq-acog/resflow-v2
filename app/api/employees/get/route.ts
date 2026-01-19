// GET /api/employees/get
// Roles: employee, project_manager, hr_executive
// Query param: id
// If role = 'employee' OR 'project_manager': verify id = current_user_id, else return 403
// If role = 'hr_executive': allow any id
// SELECT * FROM employees WHERE id = ?
// Return: { id, employee_code, full_name, email, employee_type, employee_role, role, working_location, department_id, project_manager_id, resume, college, degree, status, joined_on, exited_on, created_at, updated_at }
// Error 404 if not found
