// POST /api/demands/create
// Role: project_manager only
// Check JWT role = 'project_manager', else return 403
// Accept: { project_id, role_required, skills_required, start_date }
// Verify project_id ownership: SELECT 1 FROM projects WHERE id = ? AND project_manager_id = current_user_id
// If not found, return 403
// INSERT into resource_demands table with requested_by = current_user_id, status = 'Pending'
// Return: { id, project_id, project_code, role_required, skills_required, start_date, requested_by, status, created_at }
