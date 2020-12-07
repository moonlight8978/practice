# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_13_152250) do

  create_table "discount_codes", force: :cascade do |t|
    t.string "code", limit: 20
    t.date "available_from"
    t.date "available_to"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.integer "referrer_id"
    t.string "name"
    t.string "name_kana"
    t.string "phone_number", limit: 20
    t.integer "phone_type", limit: 2
    t.string "address_postal_code", limit: 10
    t.string "address_city"
    t.string "address_street"
    t.integer "gender", limit: 1
    t.date "birthday"
    t.integer "role", limit: 2
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_users_on_name"
    t.index ["name_kana"], name: "index_users_on_name_kana"
    t.index ["referrer_id"], name: "index_users_on_referrer_id"
    t.index ["role"], name: "index_users_on_role"
  end

end
