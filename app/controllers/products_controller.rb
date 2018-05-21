class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all
  end

  def new
    @product = Product.new
    @categories = Category.where(:user_id => current_user).map{ |c| [c.name, c.id]}
  end

  def show
  end

  def edit
    @categories = Category.all.map{|c| [ c.name, c.id ] }
  end

  def create
    @product = Product.new(product_params)
    # @product.category_id = params[:category_id] 

    if @product.save
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end

  end

  def update
    # @product.category_id = params[:category_id]
    respond_to do |format|
      if @product.update(product_params)
        format.json { render :show, status: :ok, location: @product }
      else
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_params
      params.require(:product).permit(:name, :price, :category_id).merge(user: current_user)
    end
end
