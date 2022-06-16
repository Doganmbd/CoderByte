"""
Shortest Path
Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.
Examples
Input: ["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"]
Output: A-C-D-F
Input: ["4","X","Y","Z","W","X-Y","Y-Z","X-W"]
Output: X-W 
"""

class Queue():
    def __init__(self) :
        self.queue=[]
    def enqueue(self,value):
        self.queue.append(value)
    def dequeue (self):
        if self.size()>0:
            return self.queue.pop(0)
        else:
            return None
    def size(self):
        return len(self.queue)

class Graph:
    def _init_(self):
        self.vertices={}
    def add_vertex(self,vertex_id):
        self.vertices[vertex_id]-set()
    def add_edge(self,v1,v2):
        self.vertices[v1].add(v2)
        self.vertices[v2].add(v1)
			        		
def shortest_path(self,start,end):
    q=Queue ()
    q.enqueue ([start])
    visited=set()
    
    while q.size()>0:
        path=q.dequeue ()
        v = path[-1]
        if v not in visited:
            if v==end:
                return path
        visited.add(v)

        for vert in self.vertices[v]:
            new_path=list(path)
            new_path.append(vert)
            q.enqueue (new_path)
    return -1

def buildGraph(graph, attr):
    numOfVert=int(attr[0])
    vertices=attr[1:numOfVert+1]
    for vertice in vertices:
        graph.add_vertex(vertice)
    edges=attr[numOfVert+1:]

    for edge in edges:
        i,j=edge.split('-')
        graph.add_edge(i,j)
    return vertices

def ShortestPath(strArr):
    graph=Graph()
    vertices=buildGraph (graph, strArr)
    path =graph.shortest_path(vertices[0],vertices[-1])
    if path!=-1:
        path='-'.join(path)
# code goes here
    return path
#keep this function call here
ShortestPath(["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"])	

""" solution 2 """

def ShortestPath(strArr):
    street_num = int(strArr[0])
    streets = strArr[1:street_num+1]
    paths = strArr[street_num+1:]
    possible_paths = {}
    start = streets[0]
    finish = streets[-1]

    for street in streets:
        connections = []
        for path in paths:
            if street in path:
                street1, street2 = tuple(path.split('-'))
                
                if street == street1:
                    connections.append(street2)
                    possible_paths[street] = connections

                else:
                    connections.append(street1)
                    possible_paths[street] = connections

    all_roads = [start]
    road = start
    for x in all_roads:
        for next_street in possible_paths[x[-1]]:
            road = x + next_street
            if road.count(next_street) > 1:
                continue
            
            all_roads.append(road)
            
            if next_street == finish:
                return '-'.join(road)

    return -1