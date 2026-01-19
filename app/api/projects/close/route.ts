// POST /api/projects/close
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, closed_on }
// Check for active allocations: SELECT SUM(allocation_percentage) FROM project_allocations WHERE project_id = ? AND end_date > closed_on
// If sum > 0, return 400 with total allocation percentage
// UPDATE projects SET status = 'Closed', closed_on = ? WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, project_code, status, closed_on }
