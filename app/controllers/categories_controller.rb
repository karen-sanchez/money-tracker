class CategoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :set_category, only: [:show, :edit, :update, :destroy]

  def index
    @categories = Category.all
    @categories_by_user = current_user.categories
    @category= @categories_by_user.all.includes(:products)
    @products = Product.where(:user_id => current_user)
  end

  def show
    @user = User.all
  end

  def new
    @category = Category.new
  end

  # GET /categories/1/edit
  def edit
  end

  def create
    @category = Category.new(category_params)
    @user = current_user

    if @category.save
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def update
    respond_to do |format|
      if @category.update(category_params)
        format.json { render :show, status: :ok, location: @category }
      else
        format.json { render json: @category.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @category.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def category_params
      params.require(:category).permit(:name).merge(user: current_user)
    end
end
