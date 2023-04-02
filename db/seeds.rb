
puts "✈️ Seeding...."
Flight.create([
    {
        destination: "Mombasa",
        from: "Nairobi",
        duration: "45min",
        departure: "08:00am",
        cost:10000
    },
    {
        destination: "Kisumu",
        from: "Nairobi",
        duration: "1hr",
        departure: "07:00am",
        cost:12000
    },
    {
        destination: "Eldoret",
        from: "Nairobi",
        duration: "45min",
        departure: "12:00pm",
        cost:8000
    },
    {
        destination: "London",
        from: "Nairobi",
        duration: "13hr",
        departure: "09:00am",
        cost:50000
    },
    {
        destination: "Kisumu",
        from: "Mombasa",
        duration: "1hr 20 min",
        departure: "2:00pm",
        cost:15000
    },
    {
        destination: "Moyale",
        from: "Eldoret",
        duration: "1hr 20 min",
        departure: "2:00pm",
        cost:20000
    },
    {
      destination: "Mombasa",
        from: "Dubai",
        duration: "6hr 20 min",
        departure: "12:00am",
        cost:100000  
    },
    {
        destination: "Nairobi",
        from: "Dar es Salaam",
        duration: "1hr 20 min",
        departure: "2:00pm",
        cost:30000
    }
])

User.create(username: 'Kamala Khan', email: 'kamalakhan@gmail.com', password_digest: 'Khankamala*8')
User.create(username: 'Gwen Stacy', email: 'gwenstacy@gmail.com', password_digest: 'Uuyg68/*_09KH')
User.create(username: 'Doreen Green', email: 'doreengreen@gmail.com', password_digest: 'sY7HFVjng*_vc8')
User.create(username: 'Collins Malin', email: 'malincollins@gmail.com', password_digest: 'shjkbfvggvb')
User.create(username: 'Jane', email: 'jane@gmail.com', password_digest: 's532ffjkh')

Review.create(user_id:1, rating: 3.9)
Review.create(user_id:2, rating: 4.9)
Review.create(user_id:4, rating: 4.5)
Review.create(user_id:5, rating: 4.0)
Review.create(user_id:6, rating: 3.7)

Booking.create(flight_id: 1, user_id: 1)
Booking.create(flight_id: 2, user_id: 3)
Booking.create(flight_id: 3, user_id: 2)
Booking.create(flight_id: 4, user_id: 5)
Booking.create(flight_id: 5, user_id: 4)


puts "✈️ Done Seeding!"
