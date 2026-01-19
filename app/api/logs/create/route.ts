// POST /api/logs/create
// Roles: employee, project_manager, hr_executive
// Accept: { emp_id, project_code, date, hours, description }
// Verify emp_id = current_user_id, else return 403
// Verify employee allocated to project on date: SELECT 1 FROM project_allocations pa JOIN projects p ON pa.project_id = p.id WHERE pa.employee_id = ? AND p.project_code = ? AND pa.start_date <= ? AND pa.end_date >= ?
// If not allocated, return 400
// INSERT into reports table with report_type = 'daily', content = "project_code: hours - description"
// Return: { report_id, emp_id, report_type, report_date, content, created_at }
