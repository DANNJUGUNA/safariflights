puts "✈️ Seeding...."

User.create(username: 'Kamala Khan', email: 'kamalakhan@gmail.com', password_digest: 'Khankamala*8')
User.create(username: 'Gwen Stacy', email: 'gwenstacy@gmail.com', password_digest: 'Uuyg68/*_09KH')
User.create(username: 'Doreen Green', email: 'doreengreen@gmail.com', password_digest: 'sY7HFVjng*_v c8')

Flight.create(destination: "Nairobi", from: "Mombasa", duration: "45 minutes", departure: "06-01-2023", cost: "10000")
Flight.create(destination: "Mombasa", from: "Nairobi", duration: "45 minutes", departure: "06-01-2023", cost: "10000")
Flight.create(destination: "Nairobi", from: "Naivashs", duration: "45 minutes", departure: "06-01-2023", cost: "10000")

Review.create(user_id:1, rating:3.9)
Review.create(user_id:2, rating:4.9)
Review.create(user_id:3, rating:2.9)

Booking.create(flight_id:1, user_id:1)
Booking.create(flight_id:2, user_id:2)
Booking.create(flight_id:3, user_id:3)

puts "✈️ Done Seeding!"