class LRUCache
    attr_accessor :size, :cache 

    def initialize(size)
        @size = size
        @cache = Array.new(size)
    end

    def count
        count = 0
        @cache.each {|el| count += 1 if el != nil}
        count
    end

    def add(el)
        if @cache.include?(el)
            @cache.delete(el)
            @cache.push(el)
        else
            @cache[0] = @cache[1]
            @cache[1] = @cache[2]
            @cache[2] = @cache[3]
            @cache[3] = el
        end
    end

    def show
        @cache
    end

    private

end

c = LRUCache.new(4)
c.add("I walk the line")
c.add(5)

p c.count # => returns 2

c.add([1,2,3])
c.add(5)
c.add(-5)
c.add({a: 1, b: 2, c: 3})
c.add([1,2,3,4])
c.add("I walk the line")
c.add(:ring_of_fire)
c.add("I walk the line")
c.add({a: 1, b: 2, c: 3})

p c.show