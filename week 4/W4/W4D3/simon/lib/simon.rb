class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize(sequence_length = 1)
    @sequence_length = sequence_length
    @game_over = false
    @seq = []
  end

  def play
    until @game_over == true
      self.take_turn
    end
    if @game_over == true
      self.game_over_message
      self.reset_game
    end
  end

  def take_turn
    self.show_sequence
    self.require_sequence
    if @game_over == false
      self.round_success_message
      @sequence_length += 1
    end
    
  end

  def show_sequence
    self.add_random_color
  end

  def require_sequence

  end

  def add_random_color
    random_color = ["red", "blue", "yellow", "green"].sample
    seq.push(random_color)
  end

  def round_success_message

  end

  def game_over_message

  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
