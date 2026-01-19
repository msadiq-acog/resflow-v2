// PUT /api/projects/update
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, project_name, client_name, short_description, long_description, pitch_deck_url, github_url, project_manager_id, priority, status }
// Do NOT allow updating project_code
// UPDATE projects SET fields WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, project_code, project_name, status, updated_at }
