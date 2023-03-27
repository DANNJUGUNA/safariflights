class CreateFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.string :destination
      t.string :from
      t.string :duration
      t.string :departure
      t.integer :cost

      t.timestamps
    end
  end
end
