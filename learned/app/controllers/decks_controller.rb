require 'httparty'

class DecksController < ApplicationController
  def index
    decks = HTTParty.get('http://memjogger.com/api/cardset?token=')
    render json: { message: "ok", deck_data: decks }
  end
end
