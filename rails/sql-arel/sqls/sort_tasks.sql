SELECT
  tasks.*,
  CASE tasks.status
  WHEN 'todo' THEN -1
  WHEN 'in_progress' THEN 0
  WHEN 'done' THEN 1 END AS status_int
FROM tasks
WHERE tasks.assignee_id = 1
ORDER BY
  status_int ASC,
  CASE tasks.status
  WHEN 'todo' THEN tasks.created_at
  WHEN 'in_progress' THEN tasks.started_at
  WHEN 'done' THEN tasks.finished_at
  END ASC,
  tasks.id ASC;
