// POST /api/approvals/action
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { id, type, action } where action = 'approve' or 'reject'
// If type = 'skill' AND action = 'approve': UPDATE employee_skills SET approved_by = current_user_id, approved_at = NOW() WHERE id = ?
// If type = 'skill' AND action = 'reject': DELETE FROM employee_skills WHERE id = ?
// INSERT audit log with operation='UPDATE' or 'DELETE', changed_by=current_user_id
// Return: { id, type, status: 'approved' or 'deleted', approved_by/deleted_at }
