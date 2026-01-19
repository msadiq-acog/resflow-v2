// GET /api/employees/list
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Query params: status, department_id, role, page, limit
// SELECT * FROM employees WHERE filters applied
// Apply pagination using LIMIT and OFFSET
// Return: { employees: [...], total: count, page, limit }
