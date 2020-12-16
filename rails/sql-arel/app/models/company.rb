class Company < ApplicationRecord
  has_many :users

  scope :with_counts, -> do
    users = User.arel_table
    medicals = Medical.arel_table

    company_male_users_counts = users
      .project(users[:company_id], users[:id].count.as('male_users_count'))
      .where(users[:gender].eq(User.gender.male))
      .group(users[:company_id])
      .as('company_male_users_counts')

    company_female_users_counts = users
      .project(users[:company_id], users[:id].count.as('female_users_count'))
      .where(users[:gender].eq(User.gender.female))
      .group(users[:company_id])
      .as('company_female_users_counts')

    users_with_latest_medical = -> do
      users
        .join(medicals)
        .on(
          medicals[:id].eq(
            medicals
              .project(:id)
              .where(medicals[:user_id].eq(users[:id]))
              .order(medicals[:created_at].desc, medicals[:id].desc)
              .take(1)
          )
        )
    end

    company_avg_blood_pressures = users_with_latest_medical.call
      .project(users[:company_id], medicals[:blood_pressure].average.as('avg_blood_pressure'))
      .group(users[:company_id])
      .as('company_avg_blood_pressures')

    company_hospitalized_users_counts = users_with_latest_medical.call
      .project(users[:company_id], users[:id].count.as('hospitalized_users_count'))
      .where(medicals[:hospitalization].eq(Medical.hospitalization.hospitalized))
      .group(users[:company_id])
      .as('company_hospitalized_users_counts')

    companies = arel_table
    joining = companies
      .join(company_male_users_counts)
        .on(companies[:id].eq(company_male_users_counts[:company_id]))
      .join(company_female_users_counts)
        .on(companies[:id].eq(company_female_users_counts[:company_id]))
      .join(company_avg_blood_pressures)
        .on(companies[:id].eq(company_avg_blood_pressures[:company_id]))
      .join(company_hospitalized_users_counts)
        .on(companies[:id].eq(company_hospitalized_users_counts[:company_id]))

    self
      .select(
        companies[Arel.star],
        company_male_users_counts[:male_users_count].as('male_users_count'),
        company_female_users_counts[:female_users_count].as('female_users_count'),
        company_avg_blood_pressures[:avg_blood_pressure].as('avg_blood_pressure'),
        company_hospitalized_users_counts[:hospitalized_users_count].as('hospitalized_users_count'),
      )
      .joins(joining.join_sources)
  end
end
