require 'httparty'

class DecksController < ApplicationController
  def index
    decks = HTTParty.get('http://memjogger.com/api/cardset?token=')
    render json: { message: "ok", deck_data: decks }
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

end
