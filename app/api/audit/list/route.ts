// GET /api/audit/list
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Query params: entity_type, entity_id, operation, changed_by, start_date, end_date, page, limit
// SELECT * FROM audit_logs WHERE filters applied
// JOIN employees table on changed_by to get changed_by_name
// Apply pagination
// Return: { audits: [{ id, entity_id, entity_type, row_id, operation, changed_by, changed_by_name, changed_at, changed_fields }], total: count, page, limit }
