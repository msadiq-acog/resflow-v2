// GET /api/projects/get
// Roles: employee, project_manager, hr_executive
// Query param: id
// If role = 'employee': verify id IN (SELECT project_id FROM project_allocations WHERE employee_id = current_user_id), else return 403
// If role = 'project_manager': verify project_manager_id = current_user_id, else return 403
// If role = 'hr_executive': allow any id
// SELECT * FROM projects WHERE id = ?
// Return: { id, project_code, project_name, client_name, short_description, long_description, pitch_deck_url, github_url, project_manager_id, priority, status, started_on, closed_on, created_at, updated_at }
// Error 404 if not found
