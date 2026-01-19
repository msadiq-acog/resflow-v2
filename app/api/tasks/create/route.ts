// POST /api/tasks/create
// Role: hr_executive only
// Check JWT role = 'hr_executive', else return 403
// Accept: { owner_id, entity_id, status, due_on }
// INSERT into tasks table
// Return: { id, owner_id, entity_id, status, due_on, created_at }
