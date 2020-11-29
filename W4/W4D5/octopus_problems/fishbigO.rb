 #sluggish octopus
FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

 def sluggish_octopus(array)
    return array if array.length <= 1
    pivot = [array.first]
    p pivot
    left = array[1..-1].select {|el| el.length < array.first.length}
    p left
    right = array[1..-1].select {|el| el.length > array.first.length}
    p right
    sluggish_octopus(left) + pivot + sluggish_octopus(right)
 end

#  print sluggish_octopus(FISH)[-1]

def dominant_octopus(array, &prc)
    return array if array.length <= 1
    
    mid_idx = array.length / 2
    left = dominant_octopus(array.take(mid_idx), &prc)
    right = dominant_octopus(array.drop(mid_idx), &prc)
    merge(left, right, &prc)
end

def merge(left, right, &prc)
    prc ||= Proc.new { |a, b| a <=> b} 
    merged_array = []
    until left.empty? || right.empty?
      case prc.call(left.first.length, right.first.length)
      when -1
        merged_array << left.shift
      when 0
        merged_array << left.shift
      when 1
        merged_array << right.shift
      end
    end
    merged_array + left + right
end

# p dominant_octopus(FISH)[-1]

def clever_octopus(array)
    array.inject do |fish, el|
        fish = el if el.length > fish.length
        fish
    end
end

# p clever_octopus(FISH)