// PUT /api/employees/update
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, full_name, employee_role, role, working_location, department_id, project_manager_id, resume, college, degree }
// Do NOT allow updating employee_code
// UPDATE employees SET fields WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, employee_code, full_name, employee_role, role, updated_at }
