class GraphNode
    attr_accessor :val, :neighbors

    def initialize(val)
        self.val = val
        self.neighbors = []
    end
end

def bfs(starting_node, target_value)
    visited = Set.new()
    return nil if (visited.include?(starting_node.val))
    queue = [starting_node]
    until queue.empty?
        el = queue.shift
        visited.add(el.val)
        return el if el.val == target_value
        el.neighbors.each {|neighbor| queue << neighbor}
    end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]
p bfs(a, "f")