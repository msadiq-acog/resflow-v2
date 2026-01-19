// POST /api/skills/approve
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { employee_skill_id }
// UPDATE employee_skills SET approved_by = current_user_id, approved_at = NOW() WHERE id = ?
// INSERT audit log with operation='UPDATE', changed_by=current_user_id
// Return: { id, emp_id, skill_id, proficiency_level, approved_by, approved_at }
