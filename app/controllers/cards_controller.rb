require 'httparty'

class CardsController < ApplicationController
  def index
  end

  def create
  end

  def show
    card = HTTParty.get("http://memjogger.com/api/card/#{params[:id]}?token=6dce93485a8fb619c6536793db63d60c")
    render json: { message: "ok", card_data: card }
  end

  def update
  end

  def destroy
  end
end
