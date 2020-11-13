class Stack
    attr_accessor :stack
    def initialize
        @stack = []
    end

    def push(el)
        stack << el
    end

    def pop
        stack.reject {|el| el == stack[-1]}
    end

    def peek
        stack[0]
    end
end

