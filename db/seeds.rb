# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

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
       departure: "14:00pm",
       cost:15000
    }
])