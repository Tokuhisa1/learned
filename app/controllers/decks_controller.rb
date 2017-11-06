require 'httparty'

class DecksController < ApplicationController
  def index
    decks = HTTParty.get('http://memjogger.com/api/cardset?token=23eaef38e53e228e82c0095a4f5beff8')
    render json: { message: "ok", decks_data: decks }
  end

  def create
    new_deck = HTTParty.post('http://memjogger.com/api/cardset?token=23eaef38e53e228e82c0095a4f5beff8',
      :body => { :name => params[:name] }.to_json)
    render json: { message: "ok", new_data: new_deck }
  end

  def show
    deck = HTTParty.get("http://memjogger.com/api/cardset/#{params[:id]}?token=23eaef38e53e228e82c0095a4f5beff8")
    cards = HTTParty.get("http://memjogger.com/api/cardset/#{params[:id]}/cards?token=23eaef38e53e228e82c0095a4f5beff8")
    render json: { message: "ok", deck_data: [deck, cards]}
  end

  def update
    revision = HTTParty.put("http://memjogger.com/api/cardset/#{params[:id]}?token=23eaef38e53e228e82c0095a4f5beff8",
      :body => { :name => params[:name] }.to_json)
    render json: { message: "ok", new_data: revision }
  end

  def destroy
    HTTParty.delete("http://memjogger.com/api/cardset/#{params[:id]}?token=23eaef38e53e228e82c0095a4f5beff8")
  end
end
