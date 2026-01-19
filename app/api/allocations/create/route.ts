// POST /api/allocations/create
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { employee_id, project_id, role, allocation_percentage, start_date, end_date, billability, is_critical_resource }
// Calculate total allocation: SELECT SUM(allocation_percentage) FROM project_allocations WHERE employee_id = ? AND end_date >= start_date AND start_date <= end_date
// If total + allocation_percentage > 100, return 400 with current and requested percentages
// INSERT into project_allocations table
// INSERT audit log with operation='INSERT', changed_by=current_user_id
// Return: { id, employee_id, project_id, role, allocation_percentage, start_date, end_date, billability, created_at }
