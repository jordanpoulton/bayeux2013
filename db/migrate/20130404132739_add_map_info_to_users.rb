class AddMapInfoToUsers < ActiveRecord::Migration
  def change
      add_column :users, :lat, :float
      add_column :users, :lng, :float
      add_column :users, :image_link, :string
      add_column :users, :content, :text
  end
end
