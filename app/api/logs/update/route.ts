// PUT /api/logs/update
// Roles: employee, project_manager, hr_executive
// Accept: { report_id, hours, description }
// Get log: SELECT emp_id, content FROM reports WHERE report_id = ?
// If role = 'employee' OR 'project_manager': verify emp_id = current_user_id, else return 403
// If role = 'hr_executive': allow any emp_id
// Parse existing content to extract project_code
// UPDATE reports SET content = "project_code: hours - description" WHERE report_id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { report_id, emp_id, report_date, content, updated_at }
