class HomeController < ApplicationController
	def index
		if current_user
			@categories = Category.all
			@categories_by_user = current_user.categories
			@categories = @categories_by_user.order(:category_create_date)
			@category= @categories_by_user.all.includes(:products)
			@products = Product.where(:user_id => current_user)
			@categories_months = @categories.group_by { |c| c.category_create_date.beginning_of_month }
		else
			root_path
		end
	end
end
