# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
Review.delete_all
Establishment.delete_all

u1 = User.create(first_name: 'Colin', last_name: 'Durbin', email: 'colin@colin.com', password: 'password', occupation: 'unemployed', bio: 'akdsjfkdsjdklfjakfjakfjs')
u2 = User.create(first_name: 'Mat', last_name: 'Hawley', email: 'mat@mat.com', password: 'password', occupation: 'unemployed', bio: 'akdsjfkdsjdklfjakfjakfjs')

e1 = Establishment.create(name: 'Nude Espresso', address: '12 Hanbury Street', phone_number: '1232-343', email: 'nude@nude.com', description: 'asdjfkalsjfksdj', user_id: u1.id)
e2 = Establishment.create(name: 'Brooklyn Coffee', address: '2 Commercial Street', phone_number: '1232-343', email: 'coffee@brooklyn.com', description: 'asdjfkalsjfksdj', user_id: u1.id)
e3 = Establishment.create(name: 'Ozone', address: '34 Leonard Street', phone_number: '1232-343', email: 'ozone@coffee.com', description:'asdjfkalsjfksdj', user_id: u2.id)

r1 = Review.create(power: 3, wifi: 4, coffee: 5, food: 2, service: 2, noise_level: 4, content: 'coadfdfajfksdjfkljwenknafkld', user_id: u1.id, establishment_id: e1.id)
r2 = Review.create(power: 2, wifi: 3, coffee: 3, food: 3, service: 5, noise_level: 2, content: 'coadfdfajfksdjfkljwenknafkld', user_id: u2.id, establishment_id: e2.id)
r3 = Review.create(power: 3, wifi: 4, coffee: 5, food: 2, service: 2, noise_level: 4, content: 'coadfdfajfksdjfkljwenknafkld', user_id: u1.id, establishment_id: e2.id)
r4 = Review.create(power: 3, wifi: 4, coffee: 5, food: 2, service: 2, noise_level: 4, content: 'coadfdfajfksdjfkljwenknafkld', user_id: u2.id, establishment_id: e3.id)








