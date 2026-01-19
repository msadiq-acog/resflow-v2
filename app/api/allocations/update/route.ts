// PUT /api/allocations/update
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, allocation_percentage, end_date, billability, is_critical_resource }
// Get current allocation: SELECT employee_id, allocation_percentage, start_date, end_date FROM project_allocations WHERE id = ?
// Calculate total excluding this allocation: SELECT SUM(allocation_percentage) FROM project_allocations WHERE employee_id = ? AND id != ? AND end_date >= start_date AND start_date <= end_date
// If total + new_allocation_percentage > 100, return 400
// UPDATE project_allocations SET fields WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, allocation_percentage, end_date, billability, is_critical_resource, updated_at }
