SELECT users.*
FROM users
  INNER JOIN (
    (SELECT 'employee' AS role, 1 AS role_int FROM DUAL)
    UNION ALL
    (SELECT 'leader' AS role, 2 AS role_int FROM DUAL)
    UNION ALL
    (SELECT 'manager' AS role, 3 AS role_int FROM DUAL)
    UNION ALL
    (SELECT 'admin' AS role, 4 AS role_int FROM DUAL)
  ) role_mappings ON users.role = role_mappings.role
WHERE users.company_id = 1
ORDER BY role_mappings.role_int ASC;
