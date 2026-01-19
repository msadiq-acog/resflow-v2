// GET /api/reports/list
// Roles: employee, project_manager, hr_executive
// Query params: emp_id, report_type, start_date, end_date, page, limit
// If role = 'employee': SELECT * FROM reports WHERE emp_id = current_user_id
// If role = 'project_manager': SELECT * FROM reports WHERE emp_id IN (SELECT employee_id FROM project_allocations WHERE project_id IN (SELECT id FROM projects WHERE project_manager_id = current_user_id)) OR emp_id = current_user_id
// If role = 'hr_executive': SELECT * FROM reports (no filter)
// Apply additional query param filters and pagination
// JOIN employees table to get employee_code, employee_name
// Return: { reports: [...], total: count, page, limit }
