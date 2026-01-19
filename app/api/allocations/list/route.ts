// GET /api/allocations/list
// Roles: employee, project_manager, hr_executive
// Query params: employee_id, project_id, active_only, page, limit
// If role = 'employee': SELECT * FROM project_allocations WHERE employee_id = current_user_id
// If role = 'project_manager': SELECT * FROM project_allocations WHERE project_id IN (SELECT id FROM projects WHERE project_manager_id = current_user_id)
// If role = 'hr_executive': SELECT * FROM project_allocations (no filter)
// Apply additional query param filters and pagination
// JOIN employees and projects tables to include employee_code, employee_name, project_code, project_name
// Return: { allocations: [...], total: count, page, limit }
