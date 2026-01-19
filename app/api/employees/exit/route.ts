// POST /api/employees/exit
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, exited_on }
// Check for active allocations: SELECT SUM(allocation_percentage) FROM project_allocations WHERE employee_id = ? AND end_date > exited_on
// If sum > 0, return 400 with total allocation percentage
// UPDATE employees SET status = 'Exited', exited_on = ? WHERE id = ?
// Cancel related tasks: UPDATE tasks SET status = 'cancelled' WHERE owner_id = ? AND status != 'complete'
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, employee_code, status, exited_on, tasks_cancelled: count }
