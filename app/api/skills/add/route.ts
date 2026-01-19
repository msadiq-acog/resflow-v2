// POST /api/skills/add
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { skill_name, skill_department }
// Check skill_name uniqueness: SELECT 1 FROM skills WHERE skill_name = ?
// If exists, return 400
// INSERT into skills table
// Return: { skill_id, skill_name, skill_department, created_at }
