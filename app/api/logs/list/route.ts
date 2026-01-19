// GET /api/logs/list
// Roles: employee, project_manager, hr_executive
// Query params: emp_id, project_code, start_date, end_date, page, limit
// If role = 'employee': SELECT * FROM reports WHERE emp_id = current_user_id AND report_type = 'daily'
// If role = 'project_manager': SELECT * FROM reports WHERE emp_id IN (SELECT employee_id FROM project_allocations WHERE project_id IN (SELECT id FROM projects WHERE project_manager_id = current_user_id)) AND report_type = 'daily'
// If role = 'hr_executive': SELECT * FROM reports WHERE report_type = 'daily' (no filter)
// Apply additional query param filters and pagination
// JOIN employees table to include employee_code, employee_name
// Return: { logs: [...], total: count, page, limit }
