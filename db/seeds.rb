# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create(name: 'Unicorn Party', user_id: 2, due_date: 2.days.ago)
Category.create(name: 'Coachella Event', user_id: 1, due_date: 40.days.ago)
Category.create(name: 'Chris Bday', user_id: 1, due_date: 1.days.ago)
Category.create(name: 'Dizzys Coca Cola', user_id: 1, due_date: 70.days.ago)