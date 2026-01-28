BEGIN;

DROP TABLE IF EXISTS employees_staging;

-- 1. Staging table exactly matching CSV
CREATE TEMP TABLE employees_staging (
  employee_code text,
  full_name text,
  email text,
  joined_on text,
  year_of_joining text,
  gender text,
  employee_type text,
  working_location text,
  employee_design text,
  department text,
  experience_years text,
  college text,
  educational_stream text,
  reporting_manager_name text,
  ldap_username text,
  employee_role text,
  resume_url text,
  status text,
  exited_on text
);

-- 2. Load CSV
COPY employees_staging
FROM '/data/users.csv'
DELIMITER ','
CSV HEADER;

INSERT INTO employees (
  employee_code,
  full_name,
  email,
  joined_on,
  gender,
  employee_type,
  working_location,
  employee_design,
  experience_years,
  college,
  educational_stream,
  ldap_username,
  employee_role,
  resume_url,
  status,
  exited_on
)
SELECT
  employee_code,
  full_name,
  email,
  to_date(joined_on, 'DD-Mon-YYYY'),
  gender::gender,
  employee_type::employee_type,
  working_location,
  employee_design,
  experience_years,
  college,
  educational_stream,
  COALESCE(NULLIF(ldap_username, ''), employee_code),
  employee_role::employee_role,
  resume_url,
  status::status,
  NULLIF(exited_on, 'NULL')::date
FROM employees_staging;


-- 4. Resolve reporting manager using name → id
UPDATE employees e
SET reporting_manager_id = m.id
FROM employees_staging s
JOIN employees m
  ON m.full_name = s.reporting_manager_name
WHERE e.employee_code = s.employee_code;

COMMIT;
