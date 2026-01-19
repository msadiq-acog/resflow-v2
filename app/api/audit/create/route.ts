// POST /api/audit/create
// Internal endpoint called by other API routes after INSERT/UPDATE/DELETE
// Roles: employee, project_manager, hr_executive (but only called internally)
// Accept: { entity_id, row_id, operation, changed_fields }
// Extract changed_by from JWT (current_user_id)
// INSERT into audit_logs table with changed_by = current_user_id, changed_at = NOW()
// Return: { id, entity_id, row_id, operation, changed_by, changed_at }
