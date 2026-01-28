BEGIN;

DROP TABLE IF EXISTS project_manager_staging;

-- Staging table must match CSV structure
CREATE TEMP TABLE project_manager_staging (
  project_code text,
  project_name text,
  client_name text,
  project_manager_name text,
  project_type text,
  project_master text,
  status_text text,
  economic_billability text,
  capacity_billability text
);

-- Load CSV
COPY project_manager_staging
FROM '/data/projects.csv'
DELIMITER ','
CSV HEADER;

-- Update projects.project_manager_id using employee name
UPDATE projects p
SET project_manager_id = e.id
FROM employees e
JOIN project_manager_staging s
  ON s.project_manager_name = e.full_name
WHERE p.project_code = s.project_code
  AND p.project_manager_id IS NULL;

COMMIT;
