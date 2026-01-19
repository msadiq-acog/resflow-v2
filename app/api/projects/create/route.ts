// POST /api/projects/create
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { project_code, project_name, client_name, short_description, long_description, pitch_deck_url, github_url, project_manager_id, priority, started_on }
// Check project_code uniqueness, return 400 if exists
// INSERT into projects table with status = 'Planning'
// INSERT audit log with operation='INSERT', changed_by=current_user_id
// Return: { id, project_code, project_name, status, created_at }
