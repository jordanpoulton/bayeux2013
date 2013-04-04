class AddMapInfoToUsers < ActiveRecord::Migration
  def change
      add_column :users, :lat, :string
      add_column :users, :lng, :string
      add_column :users, :image_link, :string
      add_column :users, :content, :text
  end
end
