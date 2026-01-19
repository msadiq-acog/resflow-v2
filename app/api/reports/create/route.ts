// POST /api/reports/create
// Roles: employee, project_manager, hr_executive
// Accept: { emp_id, report_type, report_date, content, weekly_hours? }
// Verify emp_id = current_user_id, else return 403
// Check duplicate: SELECT 1 FROM reports WHERE emp_id = ? AND report_date = ? AND report_type = ?
// If exists, return 400
// INSERT into reports table with weekly_hours as JSONB if provided
// Return: { report_id, emp_id, report_type, report_date, content, created_at }
