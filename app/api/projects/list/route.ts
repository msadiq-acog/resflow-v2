// GET /api/projects/list
// Roles: employee, project_manager, hr_executive
// Query params: status, project_manager_id, page, limit
// If role = 'employee': SELECT * FROM projects WHERE id IN (SELECT project_id FROM project_allocations WHERE employee_id = current_user_id)
// If role = 'project_manager': SELECT * FROM projects WHERE project_manager_id = current_user_id
// If role = 'hr_executive': SELECT * FROM projects (no filter)
// Apply additional query param filters and pagination
// Return: { projects: [...], total: count, page, limit }
