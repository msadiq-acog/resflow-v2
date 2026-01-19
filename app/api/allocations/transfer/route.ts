// POST /api/allocations/transfer
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { allocation_id, new_project_id, transfer_date }
// Get old allocation: SELECT * FROM project_allocations WHERE id = allocation_id
// UPDATE old allocation SET end_date = transfer_date WHERE id = allocation_id
// INSERT new allocation with same employee_id, role, allocation_percentage, billability, is_critical_resource but project_id = new_project_id, start_date = transfer_date
// INSERT audit logs for both UPDATE and INSERT operations with changed_by=current_user_id
// Return: { old_allocation: { id, end_date }, new_allocation: { id, employee_id, project_id, role, allocation_percentage, start_date, end_date, billability, is_critical_resource, created_at } }
