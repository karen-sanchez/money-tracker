class HomeController < ApplicationController
	def index
		@categories = Category.order(:due_date)
		@categories_months = @categories.group_by { |c| c.due_date.beginning_of_month }
	end
end
