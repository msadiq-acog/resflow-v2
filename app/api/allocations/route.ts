// POST /api/allocations/create
// Allowed Roles: hr_executive
// Check JWT role = 'hr_executive', else return 403
// Accept: { emp_id, project_id, role, allocation_percentage, start_date, end_date, billability, is_critical_resource }
// Validate: end_date must be >= start_date, else return 400 "end_date must be >= start_date"
// Calculate total allocation: SELECT SUM(allocation_percentage) FROM project_allocation WHERE emp_id = ? AND ((start_date <= ? AND end_date >= ?) OR (start_date <= ? AND end_date >= ?))
// If total + allocation_percentage > 100, return 400 "Employee allocation exceeds 100%. Current: X%, Requested: Y%, Total: Z%"
// INSERT into project_allocation table with assigned_by = current_user_id
// INSERT audit log with operation='INSERT', changed_by=current_user_id
// Return: { id, emp_id, project_id, role, allocation_percentage, start_date, end_date, billability, is_critical_resource, assigned_by }

// GET /api/allocations/list
// Allowed Roles: employee, project_manager, hr_executive
// Query params: emp_id, project_id, active_only, page, limit
// Data Filtering:
//   - employee: Returns WHERE emp_id = current_user_id
//   - project_manager: Returns WHERE project_id IN (SELECT id FROM projects WHERE project_manager_id = current_user_id)
//   - hr_executive: Returns all allocations
// active_only=true filters: WHERE start_date <= CURRENT_DATE AND (end_date IS NULL OR end_date >= CURRENT_DATE)
// SELECT * FROM project_allocation WHERE filters applied
// JOIN employees table to get employee_code, employee_name (full_name)
// JOIN projects table to get project_code, project_name
// Apply pagination using LIMIT and OFFSET
// Return: { allocations: [{ id, emp_id, employee_code, employee_name, project_id, project_code, project_name, role, allocation_percentage, start_date, end_date, billability, is_critical_resource, assigned_by }], total, page, limit }
// Error 403 if access denied

// PUT /api/allocations/update
// Allowed Roles: hr_executive
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, allocation_percentage, end_date, billability, is_critical_resource }
// Get current allocation: SELECT emp_id, allocation_percentage, start_date, end_date FROM project_allocation WHERE id = ?
// Calculate total excluding this allocation: SELECT SUM(allocation_percentage) FROM project_allocation WHERE emp_id = ? AND id != ? AND ((start_date <= ? AND end_date >= ?) OR (start_date <= ? AND end_date >= ?))
// If total + new_allocation_percentage > 100, return 400 "Updated allocation exceeds 100%. Current other: X%, Requested: Y%, Total: Z%"
// UPDATE project_allocation SET fields WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, allocation_percentage, end_date, billability, is_critical_resource }

// POST /api/allocations/transfer
// Allowed Roles: hr_executive
// Check JWT role = 'hr_executive', else return 403
// Accept: { allocation_id, new_project_id, transfer_date }
// Get old allocation: SELECT * FROM project_allocation WHERE id = allocation_id
// Validate: transfer_date must be between start_date and end_date, else return 400 "transfer_date must be between start_date and end_date"
// UPDATE old allocation SET end_date = transfer_date WHERE id = allocation_id
// INSERT new allocation with same emp_id, role, allocation_percentage, billability, is_critical_resource but project_id = new_project_id, start_date = transfer_date, assigned_by = current_user_id
// INSERT audit logs for both UPDATE and INSERT operations with changed_by=current_user_id
// Return: { old_allocation: { id, end_date }, new_allocation: { id, emp_id, project_id, role, allocation_percentage, start_date, end_date, billability, is_critical_resource, assigned_by } }
