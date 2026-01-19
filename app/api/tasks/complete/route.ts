// POST /api/tasks/complete
// Roles: employee, project_manager, hr_executive
// Accept: { id }
// Get task: SELECT owner_id FROM tasks WHERE id = ?
// If role = 'employee' OR 'project_manager': verify owner_id = current_user_id, else return 403
// If role = 'hr_executive': allow any owner_id
// UPDATE tasks SET status = 'complete', completed_at = NOW() WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, status, completed_at }
