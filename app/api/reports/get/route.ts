// GET /api/reports/get
// Roles: employee, project_manager, hr_executive
// Query param: report_id
// Get report: SELECT * FROM reports WHERE report_id = ?
// If role = 'employee': verify emp_id = current_user_id, else return 403
// If role = 'project_manager': verify emp_id IN team members OR emp_id = current_user_id, else return 403
// If role = 'hr_executive': allow any report_id
// JOIN employees table to get employee_code, employee_name
// Return: { report_id, emp_id, employee_code, employee_name, report_type, report_date, content, weekly_hours, created_at }
// Error 404 if not found
