# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_16_020858) do

  create_table "companies", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "medicals", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id"
    t.decimal "blood_pressure", precision: 10
    t.integer "pulse_rate"
    t.string "hospitalization"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_medicals_on_user_id"
  end

  create_table "tasks", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "creator_id"
    t.bigint "assignee_id"
    t.string "name"
    t.string "status"
    t.datetime "started_at"
    t.datetime "finished_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["creator_id"], name: "index_tasks_on_creator_id"
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "company_id"
    t.string "name"
    t.string "gender"
    t.integer "medicals_count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "role"
    t.index ["company_id"], name: "index_users_on_company_id"
  end

end
