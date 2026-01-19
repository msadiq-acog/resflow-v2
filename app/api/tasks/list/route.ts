// GET /api/tasks/list
// Roles: employee, project_manager, hr_executive
// Query params: owner_id, status, page, limit
// If role = 'employee' OR 'project_manager': SELECT * FROM tasks WHERE owner_id = current_user_id
// If role = 'hr_executive': SELECT * FROM tasks (no filter)
// Apply additional query param filters and pagination
// JOIN employees table to get owner_name
// Determine entity_type from entity_id lookup (check projects, employees, etc tables)
// Return: { tasks: [{ id, owner_id, owner_name, entity_id, entity_type, status, due_on, created_at }], total: count, page, limit }
