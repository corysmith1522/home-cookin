class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :add_meal]
  before_action :authorize_request, only: [:index, :create, :update, :destroy]
  before_action :set_user_order, only: [:update, :destroy]

  # GET /orders
  def index
    @orders = @current_user.orders

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order, include: :meals
  end

  # POST /orders
  def create
    @order = Order.new(order_params)
    @order.user = @current_user

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  def add_meal
    @meal = Meal.find(params[:meal_id])
    @order.meals << @meal

    render json: @order, include: :meals
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    def set_user_order
      @order = @current_user.orders.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit(:name_on_order, :user_id)
    end
end
