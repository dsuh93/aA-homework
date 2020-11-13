class Queue
    attr_accessor :queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.reject {|el| el == @queue[0]}
    end

    def peek
        @queue[0]
    end
end