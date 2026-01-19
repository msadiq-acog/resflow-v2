// GET /api/demands/list
// Roles: project_manager, hr_executive
// Query params: project_id, status, requested_by, page, limit
// If role = 'project_manager': SELECT * FROM resource_demands WHERE requested_by = current_user_id
// If role = 'hr_executive': SELECT * FROM resource_demands (no filter)
// Apply additional query param filters and pagination
// JOIN projects table to get project_code, project_name
// JOIN employees table to get requested_by_name
// Parse skills_required comma-separated IDs and JOIN skills table to get skill names array
// Return: { demands: [...], total: count, page, limit }
