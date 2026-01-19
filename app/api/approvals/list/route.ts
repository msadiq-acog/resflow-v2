// GET /api/approvals/list
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Query params: type, status, page, limit
// SELECT * FROM employee_skills WHERE approved_by IS NULL (pending approval)
// JOIN employees table to get employee_code, employee_name
// JOIN skills table to get skill_name
// Apply filters and pagination
// Return: { approvals: [{ id, type: 'skill', emp_id, employee_code, employee_name, skill_id, skill_name, proficiency_level, created_at }], total: count, page, limit }
