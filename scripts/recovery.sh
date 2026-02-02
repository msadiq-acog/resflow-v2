#!/bin/bash
set -e

DB_CONTAINER="resflow_db"
DB_USER="resflowuser"
DB_NAME="resflowdb"
BACKUP_DIR="backups"

# Check if backup file is provided
if [ -n "$1" ]; then
  BACKUP_FILE="$1"
  if [ ! -f "$BACKUP_FILE" ]; then
    echo "Error: Backup file not found: $BACKUP_FILE"
    exit 1
  fi
  
  echo "Restoring from backup: $BACKUP_FILE"
  docker exec -i $DB_CONTAINER psql -U $DB_USER -d $DB_NAME < "$BACKUP_FILE"
  echo "Restore completed!"
  exit 0
fi

# Otherwise, do fresh seed from CSV
echo "No backup file provided. Performing fresh seed from CSV files..."

docker exec -i $DB_CONTAINER psql -U $DB_USER -d $DB_NAME <<EOF
SET session_replication_role = 'replica';

TRUNCATE TABLE
  employees,
  attribute_values,
  attributes,
  audit_logs,
  clients,
  daily_project_logs,
  demand_skills,
  departments,
  employee_skills,
  phase,
  phase_report,
  project_allocation,
  projects,
  reports,
  resource_demands,
  skills,
  tasks
RESTART IDENTITY CASCADE;

SET session_replication_role = 'origin';

INSERT INTO employees (
  id, employee_code, ldap_username, full_name, email,
  employee_type, employee_role, employee_design, working_location,
  status, joined_on, created_at, updated_at
) VALUES (
  '03cef969-9b9f-4021-9d95-cb0845876da5', 'HR001', 'admin.hr',
  'System Admin', 'admin@aganitha.ai', 'FTE', 'HR', 'HR Director',
  'HQ', 'ACTIVE', '2026-01-21', NOW(), NOW()
);

EOF

FILES=(
  "import_sql.sql"
  "project_manager.sql"
  "departments_insert.sql"
  "import_departments.sql"
  "import_skills.sql"
  "import_client.sql"
  "import_projects.sql"
  "import_allocations.sql"
)

for file in "${FILES[@]}"; do
  echo "Running $file..."
  docker exec -i $DB_CONTAINER psql -U $DB_USER -d $DB_NAME < "scripts/$file"
done

echo "Fresh seed completed!"