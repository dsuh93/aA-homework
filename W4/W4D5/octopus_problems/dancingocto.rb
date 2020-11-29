tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, array)
    array.index(direction)
end

# p slow_dance("up", tiles_array)
# p slow_dance("right-down", tiles_array)

tiles_hash = {"up"=>0, "right-up"=>1, "right"=>2, "right-down"=>3, "down"=>4, "left-down"=>5, "left"=>6, "left-up"=>7}
def constant_dance(direction, hash)
    hash[direction]
end

p constant_dance("up", tiles_hash)
p constant_dance("right-down", tiles_hash)
