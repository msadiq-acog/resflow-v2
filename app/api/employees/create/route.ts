// POST /api/employees/create
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { employee_code, full_name, email, employee_type, employee_role, role, working_location, department_id, project_manager_id, resume, college, degree, joined_on }
// Check employee_code uniqueness, return 400 if exists
// INSERT into employees table with status = 'Active'
// Return: { id, employee_code, full_name, email, role, status, created_at }
