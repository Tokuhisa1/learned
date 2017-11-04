require 'httparty'

class DecksController < ApplicationController
  def index
    decks = HTTParty.get('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c')
    render json: { message: "ok", decks_data: decks }
  end

  def create
    new_deck = HTTParty.post('http://memjogger.com/api/cardset?token=6dce93485a8fb619c6536793db63d60c',
      :body => { :name => params[:name] }.to_json)
    render json: { message: "ok", new_data: new_deck }
  end

  def show
    deck = HTTParty.get("http://memjogger.com/api/cardset/#{params[:id]}?token=6dce93485a8fb619c6536793db63d60c")
    cards = HTTParty.get("http://memjogger.com/api/cardset/#{params[:id]}/cards?token=6dce93485a8fb619c6536793db63d60c")
    render json: { message: "ok", deck_data: [deck, cards]}
  end

  def update
    revision = HTTParty.put("http://memjogger.com/api/cardset/#{params[:id]}?token=6dce93485a8fb619c6536793db63d60c",
      :body => { :name => params[:name] }.to_json)
    render json: { message: "ok", new_data: revision }
  end

  def destroy
    HTTParty.delete("http://memjogger.com/api/cardset/#{params[:id]}?token=6dce93485a8fb619c6536793db63d60c")
  end
end
