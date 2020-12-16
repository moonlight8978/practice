namespace :data do
  namespace :seed do
    task company: :environment do
      FactoryBot.create_list(:company, 40)
    end

    task user: :environment do
      Company.all.each.with_index do |company, index|
        next if index > 30

        users = FactoryBot.create_list(:user, Faker::Number.between(from: 10, to: 20), company: company)
        users.each do |user|
          Faker::Number.between(from: 20, to: 40).times do |i|
            FactoryBot.create(:medical, created_at: i.hours.ago, user: user)
          end
        end
      end
    end

    task task: :environment do
      User.all.each do |user|
        FactoryBot.create_list(:task, Faker::Number.between(from: 20, to: 40), assignee: user)
      end
    end

    task update_role: :environment do
      User.all.each do |user|
        user.update(role: User.role.values.sample)
      end
    end
  end
end
