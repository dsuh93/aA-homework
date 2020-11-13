class Map
    def initialize
        @map = Array.new
    end 

    def set(key, value)
        pair = [key, value]
        @map << pair if @map.length == 0
        @map.each_with_index do |pair, i|
            @map[i].include?(key) ? @map[i][1] = value : @map << [key, value]
        end
    end

    def get(key)
        return nil if @map.length == 0
        @map.each_with_index do |pair, i|
            return @map[i][0] if pair.include?(key)
        end
    end

    def delete(key)
        return nil if @map.length == 0
        @map.reject {|pair| pair.include?(key) }
    end
    
    def show
        print @map 
    end
end