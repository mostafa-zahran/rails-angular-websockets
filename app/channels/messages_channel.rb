class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'
  end

  def receive(data)
    data.symbolize_keys!
    ActionCable.server.broadcast 'messages', name: data[:name]
  end

  def reset_name
    ActionCable.server.broadcast 'messages', name: nil
  end
end