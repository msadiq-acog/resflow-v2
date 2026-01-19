// DELETE /api/skills/delete
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { skill_id }
// Check if skill is assigned: SELECT COUNT(*) FROM employee_skills WHERE skill_id = ?
// If count > 0, return 400 with count
// DELETE FROM skills WHERE skill_id = ?
// INSERT audit log with operation='DELETE', changed_by=current_user_id
// Return: { message: "Skill deleted successfully" }
