SELECT
  companies.*,
  company_male_users_counts.male_users_count AS male_users_count,
  company_female_users_counts.female_users_count AS female_users_count,
  company_avg_blood_pressures.avg_blood_pressure AS avg_blood_pressure,
  company_hospitalized_users_counts.hospitalized_users_count AS hospitalized_users_count
FROM companies
  INNER JOIN (
    SELECT users.company_id, COUNT(users.id) AS male_users_count
    FROM users
    WHERE users.gender = 'male'
    GROUP BY users.company_id
  ) company_male_users_counts ON companies.id = company_male_users_counts.company_id
  INNER JOIN (
    SELECT users.company_id, COUNT(users.id) AS female_users_count
    FROM users
    WHERE users.gender = 'female'
    GROUP BY users.company_id
  ) company_female_users_counts ON companies.id = company_female_users_counts.company_id
  INNER JOIN (
    SELECT users.company_id, AVG(medicals.blood_pressure) AS avg_blood_pressure
    FROM users
      INNER JOIN medicals ON medicals.id = (
        SELECT id FROM medicals
        WHERE medicals.user_id = users.id
        ORDER BY medicals.created_at DESC, medicals.id DESC
        LIMIT 1
      )
    GROUP BY users.company_id
  ) company_avg_blood_pressures ON companies.id = company_avg_blood_pressures.company_id
  INNER JOIN (
    SELECT users.company_id, COUNT(users.id) AS hospitalized_users_count
    FROM users
      INNER JOIN medicals ON medicals.id = (
        SELECT id
        FROM medicals
        WHERE medicals.user_id = users.id
        ORDER BY medicals.created_at DESC, medicals.id DESC
        LIMIT 1
      )
    WHERE medicals.hospitalization = 'hospitalized'
    GROUP BY users.company_id
  ) company_hospitalized_users_counts ON companies.id = company_hospitalized_users_counts.company_id;
