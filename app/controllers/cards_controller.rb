require 'httparty'

class CardsController < ApplicationController
  def index
  end

  def create
  end

  def show
    card = HTTParty.get("http://memjogger.com/api/card/#{params[:id]}?token=23eaef38e53e228e82c0095a4f5beff8")
    render json: { message: "ok", card_data: card }
  end

  def update
  end

  def destroy
  end
end
