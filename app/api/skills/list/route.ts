// GET /api/skills/list
// Roles: employee, project_manager, hr_executive
// Query params: skill_department, page, limit
// SELECT * FROM skills WHERE filters applied
// Apply pagination
// Return: { skills: [{ skill_id, skill_name, skill_department, created_at }], total: count, page, limit }
