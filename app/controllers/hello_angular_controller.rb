class HelloAngularController < ApplicationController
  def index

  end

  def name
    name = %w[Jack Smith Sara Linda Josh Amitai].sample
    # MessagesChannel.broadcast_to('messages', name: name)
    ActionCable.server.broadcast 'messages', name: name
    head :ok
    #render json: { name: name }
  end
end