BEGIN;

DROP TABLE IF EXISTS allocation_staging;

-- 1. Staging table exactly matching CSV
CREATE TEMP TABLE allocation_staging (
  allocated_date text,
  emp_code text,
  emp_name text,
  project_code text,
  project_name text,
  project_type text,
  role text,
  allocation_percent text,
  period text,
  utilization text,
  billability_text text,
  availability text
);

-- 2. Load CSV
COPY allocation_staging
FROM '/data/allocation.csv'
DELIMITER ','
CSV HEADER;

-- 3. Insert into project_allocation
INSERT INTO project_allocation (
  emp_id,
  project_id,
  role,
  allocation_percentage,
  start_date,
  end_date,
  utilization,
  billability,
  assigned_by
)
SELECT
  e.id,   -- employee FK
  p.id,   -- project FK
  s.role,

  -- "100.0%" -> 100.0
  REPLACE(s.allocation_percent, '%', '')::decimal,

  -- "16-Sep-2025"
  to_date(s.allocated_date, 'DD-Mon-YYYY'),

  -- convert Period (2025-09) -> end of month
  (date_trunc('month', (s.period || '-01')::date)
     + interval '1 month - 1 day')::date,

  s.utilization,

  CASE s.billability_text
    WHEN 'BILLABLE' THEN true
    WHEN 'UNBILLABLE' THEN false
    ELSE false
  END,

  hr.id   -- assigned_by = Pooja Bonagiri

FROM allocation_staging s
JOIN employees e
  ON e.employee_code = s.emp_code
JOIN projects p
  ON p.project_code = s.project_code
JOIN employees hr
  ON hr.full_name = 'Pooja Bonagiri';

COMMIT;
