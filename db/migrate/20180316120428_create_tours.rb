class CreateTours < ActiveRecord::Migration[5.1]
  def change
    create_table :tours do |t|
      t.string :name
      t.string :places, array: true, default: []
      t.datetime :date
      t.string :cover
      t.boolean :status
      t.decimal :price

      t.timestamps
    end
  end
end
